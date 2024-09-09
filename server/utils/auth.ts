import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const token = event.node.req.headers['authorization']?.split(' ')[1];

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }

  const jwtSecret = process.env.JWT_SECRET!;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    event.context.user = decoded;
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
