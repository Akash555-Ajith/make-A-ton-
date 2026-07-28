import React, { useState } from 'react';
import { Heart, MessageSquare, Award } from 'lucide-react';

export default function ProjectCard({ project, onSelect, onLike }) {
  const [hasLiked, setHasLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (!hasLiked) {
      onLike(project.id);
      setHasLiked(true);
    }
  };

  // Render a clean cinematic SVG telemetry display as the project cover
  const renderCinematicCover = () => {
    return (
      <div style={{
        height: '180px',
        backgroundColor: '#0c0f1a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.03)'
      }}>
        {/* Spider Web Telemetry Lines */}
        <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.12 }}>
          <circle cx="50%" cy="50%" r="20" stroke="var(--color-marvel-red)" strokeWidth="1" fill="none" />
          <circle cx="50%" cy="50%" r="45" stroke="var(--color-marvel-red)" strokeWidth="1" strokeDasharray="3,3" fill="none" />
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="var(--color-marvel-red)" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="var(--color-marvel-red)" strokeWidth="0.5" />
        </svg>

        {/* Top telemetry parameters */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '0.58rem',
          color: 'var(--color-marvel-red)',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          NODE_SYS://{project.id}
        </div>

        {/* Coordinates */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '0.55rem',
          color: 'var(--color-text-muted)',
          fontFamily: 'monospace'
        }}>
          LAT: 40.73° N | LON: 73.99° W
        </div>

        {/* Large icon representing prototype */}
        <Award size={48} color={project.isWinner ? "var(--color-marvel-red)" : "white"} style={{ opacity: 0.3 }} />
      </div>
    );
  };

  return (
    <div 
      onClick={onSelect}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        cursor: 'pointer',
        transition: 'var(--transition-fast)'
      }}
      className="submission-grid-card"
    >
      
      {/* Cover Image */}
      <div className="framed-image-container" style={{ width: '100%' }}>
        {renderCinematicCover()}
        
        {/* Winner overlay badge */}
        {project.isWinner && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'var(--color-marvel-red)',
            color: 'white',
            padding: '0.15rem 0.4rem',
            fontSize: '0.58rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            WINNER
          </div>
        )}
      </div>

      {/* Description and Title */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <h3 style={{ 
          fontSize: '1rem', 
          color: 'white', 
          fontWeight: 800, 
          fontFamily: 'var(--font-display)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          margin: 0
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          fontSize: '0.8rem', 
          color: 'var(--color-text-muted)', 
          lineHeight: '1.5',
          margin: 0
        }}>
          {project.tagline}
        </p>
      </div>

      {/* Social likes and comment logs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderTop: '1px solid rgba(255,255,255,0.04)', 
        paddingTop: '0.6rem',
        marginTop: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {project.members.map((member, idx) => (
            <div 
              key={idx} 
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--bg-cinema-black)',
                marginLeft: idx > 0 ? '-6px' : '0',
                position: 'relative'
              }}
              title={`${member.name} (${member.role})`}
            >
              <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
          <span style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', marginLeft: '0.4rem' }}>
            {project.members.length} {project.members.length === 1 ? 'Hero' : 'Heroes'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={handleLikeClick}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              color: hasLiked ? 'var(--color-marvel-red)' : 'var(--color-text-muted)',
              cursor: 'pointer',
              fontSize: '0.75rem',
              transition: 'var(--transition-fast)'
            }}
            className="like-btn"
          >
            <Heart size={12} fill={hasLiked ? "var(--color-marvel-red)" : "none"} />
            {project.likes}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
            <MessageSquare size={12} />
            {project.comments.length}
          </div>
        </div>
      </div>

    </div>
  );
}
