// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ITodo } from '../interfaces/todos'
import { todos } from '../database/todo'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  res.status(200).json(todos);
}
