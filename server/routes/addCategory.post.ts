import prisma from '~/lib/prisma';
import type { IServerCategoryAction } from '~/types';

export default defineEventHandler({
  onRequest: [auth],
  handler: async (event) => {
    const { category } = await readBody<IServerCategoryAction>(event);

    const existingCategory = await prisma.categories.findFirst({
      where: {
        category_name: category
      },
      select: {
        category_name: true
      }
    });

    if (existingCategory) {
      return createError({
        statusCode: 400,
        message: 'This category is already existing.'
      });
    }

    const data = await prisma.categories.create({
      data: {
        category_name: category
      }
    });

    return {
      statusCode: 200,
      statusMessage: 'Category added',
      data
    };
  }
});
