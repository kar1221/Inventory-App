import prisma from '~/lib/prisma';

export default defineEventHandler(async () => {
  const data = await prisma.categories.findMany({
    select: {
      id: true,
      category_name: true
    }
  });

  return data;
});
