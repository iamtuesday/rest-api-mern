## Creating Your First Document

import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/test');

  const user = new User({
    name: 'Bill',
    email: 'bill@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png'
  });
  await user.save();

  console.log(user.email); // 'bill@initech.com'
}


npn init -y
pnpm i typescript
npx tsc --init
pnpm i ts-node-dev

"scripts": {
"dev": "ts-node-dev --respawn --transpile-only ./src/index.ts"
},

pnpm i express
pnpm i @types/node @types/express -D

\*JEST
pnpm i supertest jest ts-jest @types/jest @types/supertest -d

pnpm ts-jest config:init

pnpm i express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid

pnpm i @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D


### Generar key
openssl genrsa -out private.pem 2048

openssl rsa -pubout -in private.pem -out public.pem
