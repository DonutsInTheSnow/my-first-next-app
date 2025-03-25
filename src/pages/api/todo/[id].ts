import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await response.json();
  res.status(200).json(todo);
}