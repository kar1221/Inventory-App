import prisma from '~/lib/prisma';

export default defineEventHandler(async () => {
  const items = await prisma.items.findMany({
    select: {
      item_name: true,
      id: true,
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

  const normalizeItems = items.map((item) => {
    return {
      id: item.id,
      item_name: item.item_name,
      categories: item.categories.map((cat) => {
        return cat.category.category_name;
      })
    };
  });

  const itemsCount = await prisma.items.groupBy({
    by: ['id'],
    _count: {
      amount: true
    }
  });

  const summary = [];

  for (let i = 0; i < normalizeItems.length; i += 1) {
    for (let j = 0; j < itemsCount.length; j += 1) {
      if (normalizeItems[i].id !== itemsCount[j].id) continue;

      const element = {
        ...normalizeItems[i],
        amount: itemsCount[j]._count.amount
      };

      summary.push(element);
    }
  }

  return summary;
});
