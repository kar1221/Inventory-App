import prisma from '~/lib/prisma';
import type { IServerCategoryAction } from '~/types';

export default defineEventHandler({
  onRequest: [auth],
  handler: async (event) => {
    const { category } = await readBody<IServerCategoryAction>(event);

    const isExistingCategory = await prisma.categories.findFirst({
      where: {
        category_name: category
      }
    });

    if (!isExistingCategory) {
      return createError({ statusCode: 400, message: 'Category not exist.' });
    }

    const deletedCategory = await prisma.categories.delete({
      where: {
        category_name: isExistingCategory.category_name,
        id: isExistingCategory.id
      }
    });

    return {
      statusCode: 200,
      message: 'Category Deleted.',
      data: deletedCategory
    };
  }
});
