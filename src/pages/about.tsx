import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Link href="/" className="about-link" style={{ display: 'block', margin: '10px 0' }}>Back to Home</Link>
            <h1>About Us</h1>
            <p>Welcome to the wild side!</p>
        </div>
    );
}