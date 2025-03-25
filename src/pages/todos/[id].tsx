import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export default function TodoDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [todo, setTodo] = useState<Todo | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`/api/todo/${id}`)
          .then((res) => res.json())
          .then((data) => setTodo(data));
      }
    }, [id]);
  
    if (!todo) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#8A9A5B' }}>
      <h1>Todo #{todo.id}</h1>
      <p style={{ fontFamily: "'Comic Sans MS', cursive", color: '#FFD700' }}>
        Title: {todo.title}
      </p>
      <p style={{ fontFamily: "'Comic Sans MS', cursive", color: '#FFD700' }}>
        User: {todo.userId}
      </p>
      <p style={{ fontFamily: "'Comic Sans MS', cursive", color: '#FFD700' }}>
        Done: {todo.completed ? 'Yep' : 'Nah'}
      </p>
    </div>
  );
}