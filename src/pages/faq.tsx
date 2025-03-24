import Link from 'next/link';

export default function FAQ() {
    const faqs = [
      { q: "Why so ugly?", a: "Cuz beauty's overrated!" },
      { q: "Can I read this?", a: "Nope, try squinting!" },
      { q: "What's the smell?", a: "Digital farts!" },
    ];
  
    return (
      <div style={{ padding: '20px', backgroundColor: '#4A2C2A' }}>
        <Link href="/" className="about-link" style={{ display: 'block', margin: '10px 0' }}>Back to Home</Link>
        <h1>FAQ</h1>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              margin: '15px 0',
              padding: '10px',
              backgroundColor: `hsl(${i * 50 + 100}, 40%, 30%)`,
              border: '8px double #8A9A5B',
              transform: `skew(${i * 5 - 5}deg)`,
              fontFamily: "'Comic Sans MS', cursive",
              color: '#FFD700',
            }}
          >
            <p style={{ fontSize: '14px' }}>Q: {faq.q}</p>
            <p style={{ fontSize: '12px', textShadow: '2px 2px 4px #000' }}>A: {faq.a}</p>
          </div>
        ))}
      </div>
    );
  }