import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if (!res.ok) throw new Error('Fetch failed');
        const data: Todo[] = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };
    fetchTodos();
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        height: '100vh',
        overflowY: 'auto',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(45deg, hotpink, limegreen, yellow, purple)',
          padding: '20px',
          border: '5px dashed orange',
          fontFamily: "'Courier New', monospace",
          color: 'white',
          textShadow: '2px 2px 4px magenta',
          transform: 'rotate(2deg)',
        }}
      >
        <h1>Todos</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Link href="/about" className="about-link">Go to About</Link>
          <Link href="/gallery" className="about-link">Gallery</Link>
          <Link href="/faq" className="about-link">FAQ</Link>
          <Link href="/contact" className="about-link">Contact Us</Link>
        </div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              backgroundColor: `hsl(${todo.id * 36}, 70%, 50%)`,
              margin: '10px',
              padding: '15px',
              borderRadius: '50%',
              boxShadow: '0 0 10px cyan',
            }}
          >
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>User: {todo.userId}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </div>
        ))}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}