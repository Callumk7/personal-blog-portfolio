import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding categories");
  const rustCat = await prisma.category.upsert({
    where: { name: "rust" },
    update: {},
    create: {
      name: "rust",
    },
  });
  const reactCat = await prisma.category.upsert({
    where: { name: "react" },
    update: {},
    create: {
      name: "react",
    },
  });
  const learningCat = await prisma.category.upsert({
    where: { name: "learning" },
    update: {},
    create: {
      name: "learning",
    },
  });
  const nodeCat = await prisma.category.upsert({
    where: { name: "node" },
    update: {},
    create: {
      name: "node",
    },
  });
  console.log("seeded: ", reactCat, rustCat, learningCat, nodeCat);

  console.log("seeding posts..");
  const rust = await prisma.post.upsert({
    where: { title: "Why Rust is Great" },
    update: {},
    create: {
      title: "Why Rust is Great",
      slug: "why-rust-is-great",
      coverImage: "www.example.com",
      description: "Rust is great, and in this article you are going to learn why it is so great.",
      content: "# Title\n\nGreat Scott! What a read!",
      categoryId: 1,
    },
  });
  const typescript = await prisma.post.upsert({
    where: { title: "Why Typescript is so Great" },
    update: {},
    create: {
      title: "Why Typescript is so Great",
      slug: "why-typescript-is-so-great",
      coverImage: "www.example.com",
      description:
        "Typescript is great, and in this article you are going to learn why it is so great.",
      content: "# Title\n\nGreat Scott! What a read!",
      categoryId: 1,
    },
  });
  console.log(rust, typescript);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
