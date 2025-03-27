import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NewTodo() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/todo/1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, userId: Number(userId), completed }),
    });
    const data = await res.json();
    window.alert(`Todo #${data.id} created with fugly rating ${data.fuglyRating}!`);
    router.push(`/?newTodo=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#4A2C2A' }}>
      <h1>New Todo</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontFamily: "'Comic Sans MS', cursive",
          color: '#FFD700',
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ width: '150px', fontSize: '12px', border: '3px dashed #8A9A5B' }}
        />
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          style={{ width: '150px', fontSize: '12px', border: '3px dashed #8A9A5B' }}
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Done?
        </label>
        <button
          type="submit"
          style={{ backgroundColor: 'yellow', padding: '5px', fontSize: '12px' }}
        >
          Create
        </button>
      </form>
      <Link href="/" className="about-link" style={{ display: 'block', marginTop: '10px' }}>
        Back to Home
      </Link>
    </div>
  );
}