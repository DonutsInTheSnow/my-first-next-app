import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    const sizes = ['50px', '200px', '10px', '150px', '30px', '250px', '80px', '120px', '300px'];
    const aligns = ['flex-start', 'center', 'flex-end'];
    const images = ['/cc-1.webp', '/cc-2.webp', '/cc-3.webp'];
  
    return (
      <div>
        <Link href="/" className="about-link" style={{ display: 'block', margin: '10px 0' }}>Back to Home</Link>
        <h1>Chaos-Llery</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '5px',
            padding: '20px',
            backgroundColor: '#ff00ff',
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: aligns[i % 3],
                alignItems: aligns[i % 3],
                backgroundColor: `hsl(${i * 10}, 60%, 30%)`,
              }}
            >
              <Image
                src={images[i % 3]}
                alt={`Cupcake ${i + 1}`}
                width={1000}
                height={1000}
                style={{
                    width: sizes[i],
                    height: sizes[i],
                    border: '10px dotted #4A2C2A',
                    transform: `rotate(${i * 10}deg)`,
                    objectFit: 'cover',
                 }}
                />
            </div>
          ))}
        </div>
      </div>
    );
  }