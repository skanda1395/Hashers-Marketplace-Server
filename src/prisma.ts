import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

// main()
// .then((res) => console.log)
// .catch(err => console.log);

export default prisma;
