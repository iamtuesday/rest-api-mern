import mongose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends UserInput, mongose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>; 
}

const userSchema = new mongose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // La contraseña se almacenará en formato hasheado
  },
  {
    timestamps: true,
  }
);

// Middleware para hashear la contraseña antes de guardarla en la base de datos
userSchema.pre("save", async function (next) {
  const user = this as UserDocument;

  // Solo hashear la contraseña si ha sido modificada o es nueva
  if (!user.isModified("password")) return next();

  try {
    // Generar una salt (valor aleatorio) para hashear la contraseña
    // const salt = await bcrypt.genSalt(10);
    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    // Hashear la contraseña del usuario
    const hash = await bcrypt.hash(user.password, salt);

    // Reasignar la contraseña hasheada
    user.password = hash;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

// Método para comparar la contraseña del usuario con la contraseña hasheada
userSchema.methods.comparePassword  = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongose.model<UserDocument>("User", userSchema);

export default UserModel;
