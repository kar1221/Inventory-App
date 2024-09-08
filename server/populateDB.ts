import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.itemsOnCategories.deleteMany();
  await prisma.items.deleteMany();
  await prisma.categories.deleteMany();

  const catOne = await prisma.categories.create({
    data: {
      category_name: 'Category 1'
    }
  });

  const catTwo = await prisma.categories.create({
    data: {
      category_name: 'Category 2'
    }
  });

  const catThree = await prisma.categories.create({
    data: {
      category_name: 'Category 3'
    }
  });

  await prisma.items.create({
    data: {
      item_name: 'Item 1',
      categories: {
        create: [
          {
            category_id: catOne.id
          },
          {
            category_id: catThree.id
          }
        ]
      }
    }
  });

  await prisma.items.create({
    data: {
      item_name: 'Item 2',
      categories: {
        create: [
          {
            category_id: catTwo.id
          },
          {
            category_id: catThree.id
          }
        ]
      }
    }
  });

  const data = await prisma.items.findMany({
    include: {
      categories: {
        select: {
          category: {
            select: {
              category_name: true
            }
          }
        }
      }
    }
  });

  const formattedData = data.map((item) => ({
    item_name: item.item_name,
    categories: item.categories.map((cat) => ({
      category_name: cat.category.category_name
    }))
  }));

  console.log(formattedData);
}
main().finally(() => {
  prisma.$disconnect();
});
