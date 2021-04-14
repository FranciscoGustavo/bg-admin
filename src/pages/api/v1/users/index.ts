import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import bcrypt from 'bcrypt';
import successResponse from '@utils/responses/successResponse';
import prisma from '@lib/prisma';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { role } = query;

  const users = await prisma.user.findMany({ where: { role: role as string } });
  const usersWithoutPassword = users.map((user) => ({
    ...user,
    password: undefined,
  }));
  return successResponse(res, 'users listed', usersWithoutPassword);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { code, cover, name, isActive, username, password, role } = body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await prisma.user.create({
    data: {
      code,
      name,
      cover,
      isActive,
      role,
      username,
      password: hashedPassword,
    },
  });
  createdUser.password = undefined;

  return successResponse(res, 'user created', createdUser, 201);
});

export default handler;
