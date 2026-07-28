import React from 'react';
import { ArrowDown, Radio, Play, ShieldAlert, Mail } from 'lucide-react';
// Import local assets
import spideyHero from '../assets/spiderman-hero-swing.png';
import spideyBg from '../assets/spiderman-bg.gif';

export default function LandingPage({ onEnterPortal }) {
  
  // Custom SVG Spider web spinner in background
  const renderWebSpinner = () => {
    return (
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        pointerEvents: 'none',
        opacity: 0.12,
        zIndex: 1,
        animation: 'webSpin 120s linear infinite'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="10" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" />
          
          <line x1="100" y1="10" x2="100" y2="190" stroke="white" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" stroke="white" strokeWidth="0.5" />
          <line x1="163.64" y1="36.36" x2="36.36" y2="163.64" stroke="white" strokeWidth="0.5" />
          
          {/* Concentric Web segments */}
          <path d="M100 70 L121 79 L121 121 L100 130 L79 121 L79 79 Z" stroke="white" strokeWidth="0.5" />
          <path d="M100 40 L142 58 L142 142 L100 160 L58 142 L58 58 Z" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    );
  };

  // Animated Swinging Spider-Man Silhouette SVG
  const renderSwingingSpiderman = () => {
    return (
      <div className="swinging-spidey-container" style={{
        position: 'absolute',
        top: '5%',
        left: '-10%',
        width: '100px',
        height: '180px',
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.2,
        transformOrigin: 'top center',
        animation: 'spideySwing 12s ease-in-out infinite'
      }}>
        {/* String representing Web line */}
        <div style={{
          width: '1px',
          height: '110px',
          backgroundColor: 'rgba(255,255,255,0.4)',
          margin: '0 auto'
        }} />
        {/* Spider-Man Hanging Silhouette */}
        <svg width="40" height="70" viewBox="0 0 40 70" fill="var(--color-marvel-red)" style={{ margin: '0 auto', display: 'block' }}>
          <circle cx="20" cy="12" r="5" fill="var(--color-marvel-red)" />
          {/* Eyes */}
          <path d="M17 11 L19 12 L19 10 Z" fill="white" />
          <path d="M23 11 L21 12 L21 10 Z" fill="white" />
          {/* Body */}
          <path d="M15 20 L25 20 L28 40 L12 40 Z" />
          <circle cx="20" cy="28" r="2" fill="black" />
          {/* Legs pulled in hanging style */}
          <path d="M13 40 L8 52 L14 62" stroke="var(--color-marvel-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M27 40 L32 52 L26 62" stroke="var(--color-marvel-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Arms hanging holding line */}
          <path d="M15 22 L11 12 L19 4" stroke="var(--color-marvel-red)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M25 22 L29 12 L21 4" stroke="var(--color-marvel-red)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-cinema-black)', overflowX: 'hidden' }}>
      
      {/* 1. HERO HERO SECTION */}
      <section style={{ 
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '6rem 2rem 2rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.02)',
        overflow: 'hidden'
      }}>
        {/* User-uploaded Spiderman Hero Swing Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${spideyHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.22, // Set opacity to beautifully blend moon and spidey with text
          zIndex: 0,
          mixBlendMode: 'screen', // Blend nicely with dark theme
          pointerEvents: 'none'
        }} />

        {/* Dynamic Vector overlays */}
        {renderWebSpinner()}
        {renderSwingingSpiderman()}

        {/* Content Box */}
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center', 
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.2rem'
        }}>
          
          <h1 style={{ 
            fontSize: '4.8rem', 
            fontWeight: 900, 
            lineHeight: '1.0', 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-display)',
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            BE <span style={{ color: 'var(--color-marvel-red)' }}>GREATER.</span><br />
            TOGETHER.
          </h1>
          
          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={onEnterPortal}
              className="cinema-button-red"
              style={{ padding: '1rem 2.5rem', fontSize: '0.78rem' }}
            >
              ENTER PORTAL
            </button>
            <button 
              onClick={onEnterPortal}
              style={{
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                fontWeight: 800,
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              className="watch-trailer-btn"
            >
              WATCH TELEMETRY
            </button>
          </div>

          {/* Bouncing arrow indicator */}
          <div style={{ marginTop: '4.5rem', animation: 'bounceArrow 2s infinite' }}>
            <ArrowDown size={28} color="var(--color-marvel-red)" />
          </div>

        </div>
      </section>

      {/* 2. A NEW THREAT EMERGES SECTION */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-cinema-dark)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4rem', alignItems: 'center' }} className="threat-columns">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: '1rem' }}>
              <div style={{ width: '4px', backgroundColor: 'var(--color-marvel-red)' }} />
              <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0, fontWeight: 900 }}>
                A NEW CHALLENGE EMERGES
              </h2>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light-gray)', lineHeight: '1.7' }}>
              With Peter Parker struggling to balance his responsibilities, a mysterious force begins to unravel the very fabric of New York City. 'Brand New Day' marks a return to the character's core agility and grit, forcing hackers to confront programming anomalies old and new.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <span style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--color-text-muted)',
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '1px',
                padding: '0.4rem 0.8rem',
                textTransform: 'uppercase'
              }}>
                CITTIC EXPO JAN 2026
              </span>
              <span style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--color-text-muted)',
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '1px',
                padding: '0.4rem 0.8rem',
                textTransform: 'uppercase'
              }}>
                HACKATHON ACTIVE
              </span>
            </div>
          </div>

          {/* Graphic on Right (Red Corner Frame) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '450px', 
              height: '300px',
              backgroundColor: '#121212',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.02)',
              overflow: 'hidden'
            }}>
              {/* Local Spiderman moving GIF */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url(${spideyBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.05,
                zIndex: 0,
                mixBlendMode: 'luminosity',
                pointerEvents: 'none'
              }} />

              {/* Red Corners layout */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '12px', borderTop: '2px solid var(--color-marvel-red)', borderLeft: '2px solid var(--color-marvel-red)', zIndex: 1 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '2px solid var(--color-marvel-red)', borderRight: '2px solid var(--color-marvel-red)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--color-marvel-red)', borderLeft: '2px solid var(--color-marvel-red)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--color-marvel-red)', borderRight: '2px solid var(--color-marvel-red)', zIndex: 1 }} />
              
              {/* Radar scanner graphics */}
              <svg width="80%" height="80%" viewBox="0 0 100 100" style={{ opacity: 0.15, zIndex: 1 }}>
                <path d="M50 15 C30 30, 30 70, 50 85 C70 70, 70 30, 50 15 Z" stroke="white" strokeWidth="1" fill="none" />
                <path d="M50 30 C40 40, 40 60, 50 70 C60 60, 60 40, 50 30 Z" stroke="white" strokeWidth="0.8" fill="none" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
              </svg>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'var(--color-marvel-red)', zIndex: 2 }}>
                <ShieldAlert size={40} style={{ opacity: 0.7 }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '2px', color: 'white', fontWeight: 800 }}>ORCHESTRATION SHIELD</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE ENSEMBLE SECTION */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, color: 'white', letterSpacing: '1px' }}>
              THE ENSEMBLE
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-marvel-red)', margin: '0.5rem auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="ensemble-grid">
            
            {/* Card 1 */}
            <div className="framed-image-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '220px', backgroundColor: 'var(--bg-cinema-dark)', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1px' }}>SPECTACULAR LANDING</span>
                <h3 style={{ fontSize: '1rem', color: 'white', margin: '0.2rem 0', fontWeight: 800 }}>PETER PARKER</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>THE SPECTACULAR SPIDER-MAN</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="framed-image-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '220px', backgroundColor: 'var(--bg-cinema-dark)', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1px' }}>SPECTACULAR LANDING</span>
                <h3 style={{ fontSize: '1rem', color: 'white', margin: '0.2rem 0', fontWeight: 800 }}>BLACK CAT</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>FELICIA HARDY</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="framed-image-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '220px', backgroundColor: 'var(--bg-cinema-dark)', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1px' }}>SPECTACULAR LANDING</span>
                <h3 style={{ fontSize: '1rem', color: 'white', margin: '0.2rem 0', fontWeight: 800 }}>MR. NEGATIVE</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>THE CORRUPTOR</span>
              </div>
            </div>

            {/* Card 4 (Full Width below) */}
            <div className="framed-image-container" style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', minHeight: '200px', backgroundColor: 'var(--bg-cinema-dark)', border: '1px solid rgba(255,255,255,0.02)' }} className="ensemble-fullwidth">
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1px' }}>SPECTACULAR LANDING</span>
                <h3 style={{ fontSize: '1.1rem', color: 'white', margin: '0.2rem 0', fontWeight: 800 }}>NEW YORK CITY</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>THE CANVAS OF CHAOS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. JOIN THE SQUAD SECTION */}
      <section style={{ backgroundColor: 'var(--color-marvel-red)', padding: '4.5rem 2rem', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-display)', margin: 0 }}>
            JOIN THE SQUAD
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: 0, lineHeight: '1.6' }}>
            Set exclusive trailers, behind-the-scenes content, and early ticket access delivered directly to your inbox.
          </p>
          <div style={{ display: 'flex', width: '100%', maxWidth: '450px', border: '1px solid rgba(255,255,255,0.3)', marginTop: '0.5rem' }}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              style={{
                flexGrow: 1,
                backgroundColor: 'rgba(0,0,0,0.15)',
                border: 'none',
                padding: '0.75rem 1rem',
                color: 'white',
                fontSize: '0.8rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600
              }}
            />
            <button 
              onClick={onEnterPortal}
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '0 1.5rem',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0a0a0a', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }} className="footer-columns">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'white' }}>MARVEL</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>© 2026 MARVEL. ALL RIGHTS RESERVED.</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.72rem' }}>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Privacy Policy</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Terms of Service</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Newsletter Sign-Up</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Contact</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes webSpin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes spideySwing {
          0% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .watch-trailer-btn:hover {
          background-color: rgba(255,255,255,0.03) !important;
          border-color: white !important;
        }
        @media (max-width: 768px) {
          .threat-columns, .ensemble-grid, .footer-columns {
            grid-template-columns: 1fr !important;
          }
          .ensemble-fullwidth {
            grid-column: span 1 !important;
          }
        }
      `}} />
    </div>
  );
}
