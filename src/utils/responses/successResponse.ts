import { NextApiResponse } from 'next';

type successResponseType = (
  res: NextApiResponse,
  message: string,
  body: any,
  status?: number,
  error?: boolean
) => void;

const successResponse: successResponseType = (
  res,
  message,
  body,
  status = 200,
  error = false
) => res.status(status).json({ error, message, status, body });

export default successResponse;
