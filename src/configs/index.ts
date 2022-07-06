import dotenv from "dotenv";

dotenv.config();

interface JWTConfig {
  secretKey: string;
  expiresIn: string | number;
}

const jwtConfig: JWTConfig = {
  secretKey: "2345",
  expiresIn: "24h",
};

const PORT = process.env.PORT ?? 3000;

export { jwtConfig, PORT };
