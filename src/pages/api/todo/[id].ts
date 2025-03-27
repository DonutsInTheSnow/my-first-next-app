import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await response.json();
    const fuglyRating = Math.floor(Math.random() * 10) + 1;
    res.status(200).json({ ...todo, fuglyRating });
  } else if (req.method === 'POST') {
    const { title, userId, completed } = req.body;
    res.status(201).json({
      id: Math.floor(Math.random() * 1000), // Fake ID
      title,
      userId,
      completed,
      fuglyRating: Math.floor(Math.random() * 10) + 1,
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}