import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'overview', label: 'Mission' },
    { id: 'gallery', label: 'Submissions' },
    { id: 'participants', label: 'Guild' }
  ];

  return (
    <header style={{ 
      backgroundColor: 'rgba(18, 18, 18, 0.95)', 
      backdropFilter: 'blur(10px)',
      position: 'sticky', 
      top: 0, 
      width: '100%', 
      zIndex: 1000, 
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '1.25rem 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Brand/Logo on Left */}
        <div 
          onClick={() => setActiveTab('overview')} 
          style={{ 
            cursor: 'pointer',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff'
          }}
        >
          MAKE-A-TON: <span style={{ color: 'var(--color-marvel-red)' }}>BRAND NEW DAY</span>
        </div>

        {/* Navigation Links in Center */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Call to Action Controls on Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Disconnect Gateway Link */}
          <button
            onClick={() => setActiveTab('logout')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            className="disconnect-btn"
          >
            Disconnect
          </button>
          
          <button 
            onClick={() => setActiveTab('submit')}
            className="cinema-button-red"
            style={{ 
              fontWeight: 800,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              padding: '0.6rem 1.2rem'
            }}
          >
            Submit Hack
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .disconnect-btn:hover {
          color: var(--color-marvel-red) !important;
        }
      `}} />
    </header>
  );
}
