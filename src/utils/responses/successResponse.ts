import { NextApiResponse } from 'next';

const successResponse = (
  res: NextApiResponse,
  message: string,
  body: object,
  status = 200,
  error = false
) => res.status(status).json({ error, message, status, body });

export default successResponse;
