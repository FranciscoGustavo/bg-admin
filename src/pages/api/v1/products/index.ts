import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import successResponse from '@utils/responses/successResponse';
import prisma from '../../../../lib/prisma';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await prisma.product.findMany();
  return successResponse(res, 'products listed', products);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { code, cover, name, isActive, unity } = body;

  const createdProduct = await prisma.product.create({
    data: {
      code,
      name,
      cover,
      unity,
      isActive,
    },
  });

  return successResponse(res, 'product created', createdProduct, 201);
});

export default handler;
