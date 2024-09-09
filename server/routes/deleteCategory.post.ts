import prisma from '~/lib/prisma';
import type { IServerCategoryAction } from '~/types';

export default defineEventHandler({
  onRequest: [auth],
  handler: async (event) => {
    const { category } = await readBody<IServerCategoryAction>(event);

    const existingCategory = await prisma.categories.findFirst({
      where: {
        category_name: category
      }
    });

    if (!existingCategory) {
      return createError({ statusCode: 400, message: 'Category not exist.' });
    }

    await prisma.itemsOnCategories.deleteMany({
      where: {
        category_id: existingCategory.id
      }
    });

    await prisma.categories.delete({
      where: {
        id: existingCategory.id
      }
    });

    return {
      statusCode: 200,
      message: 'Category Deleted.'
    };
  }
});
