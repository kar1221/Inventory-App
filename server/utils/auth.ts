import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const token = event.node.req.headers['authorization']?.split(' ')[1]; // Expected input: authorization: Bearer [token]

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }

  const jwtSecret = process.env.JWT_SECRET!;

  try {
    jwt.verify(token, jwtSecret);
  } catch {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
