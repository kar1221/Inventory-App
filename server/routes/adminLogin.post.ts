import jwt from 'jsonwebtoken';
import type { IServerUserAuthAction } from '~/types';

export default defineEventHandler({
  handler: async (event) => {
    const { username, password } = await readBody<IServerUserAuthAction>(event);

    const jwtSecret = process.env.JWT_SECRET!;
    const adminUser = process.env.ADMIN_USER!;
    const adminPass = process.env.ADMIN_PASS!;

    if (username !== adminUser || password !== adminPass) {
      return sendError(
        event,
        createError({
          statusCode: 401,
          statusMessage: 'Incorrect username or password.'
        })
      );
    }

    const token = jwt.sign({ username }, jwtSecret, {
      expiresIn: '1h'
    });

    return { token };
  }
});
