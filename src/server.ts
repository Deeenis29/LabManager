import app from "@/app";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

// Por defecto el backend escucha en 3000. Se puede sobrescribir con la variable de entorno PORT.
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to database with Prisma");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error connecting to the database:", err);
    process.exit(1);
  }
}

main();
