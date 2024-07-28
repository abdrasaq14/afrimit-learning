const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Web Development" },
        { name: "Mobile Development" },
        { name: "Data Science" },
        { name: "Machine Learning" },
        { name: "Artificial Intelligence" },
        { name: "Blockchain" },
        { name: "Cyber Security" },
        { name: "Cloud Computing" },
        { name: "DevOps" },
        { name: "UI/UX" }
      ]
    });

    console.log("Categories seeded successfully");
  } catch (error) {
    console.log("error", error);
  } finally {
    await db.$disconnect();
  }
}

main();
