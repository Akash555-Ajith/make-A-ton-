import React, { useState } from 'react';
import { X, Send, Heart, Award, Cpu, MapPin } from 'lucide-react';

export default function ProjectModal({ project, onClose, onLike, onAddComment }) {
  const [commentText, setCommentText] = useState('');
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      onLike(project.id);
      setHasLiked(true);
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(project.id, {
      author: "Friendly Neighbor",
      text: commentText.trim(),
      date: "Just now"
    });
    setCommentText('');
  };

  const renderReadme = (text) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('# ')) {
        return <h2 key={idx} style={{ color: 'var(--color-marvel-red)', fontSize: '1.3rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.4rem', marginTop: '1.5rem', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{line.replace('# ', '')}</h2>;
      }
      if (line.startsWith('## ')) {
        return <h3 key={idx} style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.25rem', marginBottom: '0.6rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{line.replace('## ', '')}</h3>;
      }
      if (line.startsWith('* ') || line.startsWith('- ')) {
        return <li key={idx} style={{ color: 'var(--color-text-light-gray)', fontSize: '0.82rem', marginLeft: '1.25rem', marginBottom: '0.4rem', lineHeight: '1.5' }}>{line.substring(2)}</li>;
      }
      if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
        return <li key={idx} style={{ color: 'var(--color-text-light-gray)', fontSize: '0.82rem', marginLeft: '1.25rem', marginBottom: '0.4rem', listStyleType: 'decimal', lineHeight: '1.5' }}>{line.substring(3)}</li>;
      }
      if (line.trim() === '') {
        return <div key={idx} style={{ height: '0.5rem' }} />;
      }
      return <p key={idx} style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.6rem' }}>{line}</p>;
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1.5rem'
    }} onClick={onClose}>
      
      {/* Modal Box */}
      <div 
        style={{
          backgroundColor: 'var(--bg-cinema-dark)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          borderRadius: '0px', /* Sharp corners to match tickets button */
          border: '1px solid var(--color-marvel-red)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: 'white',
            borderRadius: '0%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{ padding: '2rem 2.5rem 1.25rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: '#121212' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
            {project.isWinner && (
              <span className="spider-badge" style={{ borderRadius: '0px', backgroundColor: 'var(--color-marvel-red)', border: 'none', color: '#fff' }}>
                🏆 WINNER: {project.winnerBadge}
              </span>
            )}
            <span className="spider-badge spider-badge-blue" style={{ borderRadius: '0px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
              ID: {project.id}
            </span>
          </div>
          
          <h1 style={{ fontSize: '1.6rem', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '0.4rem', fontWeight: 900 }}>
            {project.title}
          </h1>
          <p style={{ color: 'var(--color-marvel-red)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
            {project.tagline}
          </p>
        </div>

        {/* Modal Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', flexGrow: 1, overflowY: 'auto' }} className="modal-columns">
          
          {/* Main Content Info */}
          <div style={{ padding: '2rem 2.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ marginBottom: '2rem' }}>
              {renderReadme(project.readme)}
            </div>
            
            {/* Comment Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '1rem', fontWeight: 800 }}>
                FEEDBACK DATA STREAM ({project.comments.length})
              </h3>
              
              <form onSubmit={handleSubmitComment} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Transmit feedback to the grid..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  style={{
                    flexGrow: 1,
                    backgroundColor: '#121212',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0px',
                    padding: '0.6rem 0.8rem',
                    color: 'white',
                    fontSize: '0.8rem',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit" 
                  style={{
                    backgroundColor: 'var(--color-marvel-red)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0px',
                    width: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Send size={14} />
                </button>
              </form>

              {/* Comments Feed list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.comments.map((comment, idx) => (
                  <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.01)', padding: '0.75rem 1rem', borderRadius: '0px', borderLeft: '2px solid var(--color-marvel-red)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 'bold', color: 'white' }}>{comment.author}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>{comment.date}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light-gray)', lineHeight: '1.4' }}>{comment.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Sidebar specs */}
          <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#151515' }}>
            
            {/* Creators list */}
            <div>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '1px', marginBottom: '0.8rem' }}>
                CREATIVE TEAM
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {project.members.map((member, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>{member.name}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Category list */}
            <div>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '1px', marginBottom: '0.6rem' }}>
                CHALLENGE CATEGORIES
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.prizes.map((prize, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', fontSize: '0.7rem', color: 'var(--color-text-light-gray)', lineHeight: '1.3' }}>
                    <span style={{ color: 'var(--color-marvel-red)' }}>▪</span>
                    <span>{prize}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Likes:</span>
                <button 
                  onClick={handleLike}
                  style={{
                    backgroundColor: hasLiked ? 'var(--color-marvel-red)' : 'rgba(255,255,255,0.05)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '0px',
                    padding: '0.3rem 0.6rem',
                    fontSize: '0.72rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <Heart size={12} fill={hasLiked ? "white" : "none"} />
                  {project.likes}
                </button>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                <MapPin size={12} color="var(--color-marvel-red)" />
                <span>Sector: <strong>Queens Midtown</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
