import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export const signJwt = (
  object: Object,
  // keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) => {
  //Obtener la llave privada
  // const signingKey = Buffer.from(
  //   config.get<string>(keyName),
  //   "base64"
  // ).toString("ascii");

  //Generar token de autenticación
  // return jwt.sign(object, signingKey, {
  //   ...(options && options),
  //   algorithm: "RS256",
  // });

  return jwt.sign(object, privateKey, {
    ...(options && options),
    // algorithm: "RS256",
  });
};

export const verifyJwt = (
  token: string
  // keyName: "accessTokenPublicKey | refreshTokenPublicKey"
) => {
  //Obtener la llave pública
  // const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
  //   "ascii"
  // );

  //Verificar token de autenticación
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    console.log(error);
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};
