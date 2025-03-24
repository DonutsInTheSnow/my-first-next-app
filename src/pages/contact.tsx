import { useRef } from 'react';

export default function Contact() {
    const audioRef = useRef<HTMLAudioElement>(null);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (audioRef.current) audioRef.current.play();
    };
  
    return (
      <div>
        <h1>Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            fontSize: '8px',
            border: '75px solid #4A2C2A',
            padding: '10px',
            backgroundColor: 'rgba(255, 0, 255, 0.3)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Comic Sans MS', cursive",
            animation: 'wobble 1s infinite',
            cursor: 'crosshair',
          }}
        >
          <div>
            <input type="text" placeholder="First Name" style={{ width: '80px', fontFamily: "'Comic Sans MS', cursive", cursor: 'crosshair' }} />
            <input type="text" placeholder="Last Name" style={{ width: '80px', fontFamily: "'Comic Sans MS', cursive", cursor: 'crosshair' }} />
          </div>
          <div>
            <input type="email" placeholder="Email" style={{ width: '100px', fontFamily: "'Comic Sans MS', cursive", cursor: 'crosshair' }} />
          </div>
          <div>
            <input type="text" placeholder="Subject" style={{ width: '100px', fontFamily: "'Comic Sans MS', cursive", cursor: 'crosshair' }} />
          </div>
          <div>
            <textarea placeholder="Message" style={{ width: '100px', height: '30px', fontFamily: "'Comic Sans MS', cursive", cursor: 'crosshair' }} />
          </div>
          <button type="submit" style={{ fontSize: '8px', padding: '2px 5px', fontFamily: "'Comic Sans MS', cursive", backgroundColor: 'yellow', cursor: 'crosshair' }}>
            Submit
          </button>
          <audio ref={audioRef} src="https://www.myinstants.com/media/sounds/fart.mp3" />
        </form>
      </div>
    );
  }