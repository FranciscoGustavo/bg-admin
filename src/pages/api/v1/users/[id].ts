import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import successResponse from '@utils/responses/successResponse';
import prisma from '@lib/prisma';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { id, role } = query;

  let user;
  if (id === 'new') {
    user = {
      id: false,
      code: '',
      username: '',
      name: '',
      cover: '',
      role,
      isActive: true,
    };
  } else {
    user = await prisma.user.findFirst({
      where: {
        AND: { id: Number(id), role: role as string },
      },
    });
  }
  user.password = '';
  return successResponse(res, 'users listed', user);
});

export default handler;
