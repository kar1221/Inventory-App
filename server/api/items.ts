import prisma from '~/lib/prisma';

export default defineEventHandler(async () => {
  const data = await prisma.items.findMany({
    select: {
      item_name: true,
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

  return data;
});
