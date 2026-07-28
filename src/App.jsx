import React, { useState, useMemo, useRef } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SubmitForm from './components/SubmitForm';
import { initialProjects, initialParticipants } from './data/projects';
import { Shield, Trophy, Users, Heart, Award, ArrowRight, Play, Eye } from 'lucide-react';

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [participants] = useState(initialParticipants);
  
  // Navigation & Modal triggers
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrizes, setSelectedPrizes] = useState([]);
  const [sortOption, setSortOption] = useState('newest');

  // Pagination State (3 projects per page matching screenshot grid)
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Refs for smooth scroll navigation
  const missionRef = useRef(null);
  const submissionsRef = useRef(null);
  const guildRef = useRef(null);

  // Handle tab clicks with smooth scrolling
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'overview' && missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'gallery' && submissionsRef.current) {
      submissionsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'participants' && guildRef.current) {
      guildRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'submit') {
      setShowSubmitModal(true);
    }
  };

  // Likes & Comments Handlers
  const handleLikeProject = (projectId) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, likes: p.likes + 1 } : p));
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(prev => ({ ...prev, likes: prev.likes + 1 }));
    }
  };

  const handleAddComment = (projectId, comment) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, comments: [comment, ...p.comments] } : p));
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject(prev => ({ ...prev, comments: [comment, ...prev.comments] }));
    }
  };

  const handleAddProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
    setShowSubmitModal(false);
    setActiveTab('gallery');
    setTimeout(() => {
      if (submissionsRef.current) {
        submissionsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Filtered & Sorted Projects computation
  const processedProjects = useMemo(() => {
    let result = [...projects];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    if (selectedPrizes.length > 0) {
      result = result.filter(p => 
        selectedPrizes.some(prize => p.prizes.includes(prize))
      );
    }

    if (sortOption === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'likes') {
      result.sort((a, b) => b.likes - a.likes);
    } else {
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [projects, searchQuery, selectedPrizes, sortOption]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    return processedProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [processedProjects, currentPage]);

  const totalPages = Math.ceil(processedProjects.length / projectsPerPage);

  return (
    <div style={{ backgroundColor: 'var(--bg-cinema-black)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Cinematic Header Nav */}
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* 1. HERO SECTION */}
      <section style={{ 
        minHeight: '85vh',
        background: 'radial-gradient(circle at 85% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%), linear-gradient(180deg, #181818 0%, var(--bg-cinema-black) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="hero-columns">
          
          {/* Left Text details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{ 
              fontSize: '0.72rem', 
              color: 'var(--color-marvel-red)', 
              fontWeight: 800, 
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>
              MARVEL STUDIOS & CITTIC PRESENTS
            </span>
            <h1 style={{ 
              fontSize: '4.2rem', 
              lineHeight: '0.95', 
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              color: '#fff'
            }}>
              EVERY HACKER<br />
              <span style={{ color: 'var(--color-marvel-red)' }}>HAS A CHOICE</span>
            </h1>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--color-text-muted)', 
              lineHeight: '1.6',
              maxWidth: '480px'
            }}>
              Peter Parker's world has been unmasked, his secrets laid bare. In a reality where code can no longer hide, the true weight of the prototype becomes heavier than ever. Deploy your web blueprints before the countdown runs out.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button 
                onClick={() => handleTabChange('submit')}
                className="cinema-button-red"
                style={{ padding: '0.9rem 2rem' }}
              >
                SUBMIT BLUEPRINT
              </button>
              <button 
                onClick={() => handleTabChange('gallery')}
                style={{ 
                  background: 'none', 
                  border: '2px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.9rem 2rem',
                  textTransform: 'uppercase',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                className="trailer-btn"
              >
                EXPLORE GALLERY
              </button>
            </div>
          </div>

          {/* Right Vector Graphics Display */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-graphic">
            <div style={{ 
              width: '100%', 
              maxWidth: '420px', 
              height: '280px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Radar Targets Overlay */}
              <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.15 }}>
                <circle cx="50%" cy="50%" r="30" stroke="var(--color-marvel-red)" strokeWidth="1" fill="none" />
                <circle cx="50%" cy="50%" r="60" stroke="var(--color-marvel-red)" strokeWidth="1.2" strokeDasharray="5,5" fill="none" />
                <circle cx="50%" cy="50%" r="90" stroke="var(--color-marvel-red)" strokeWidth="1" fill="none" />
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="var(--color-marvel-red)" strokeWidth="0.5" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="var(--color-marvel-red)" strokeWidth="0.5" />
              </svg>
              <div style={{ position: 'absolute', top: '15px', left: '15px', fontSize: '0.62rem', color: 'var(--color-marvel-red)', fontFamily: 'monospace', letterSpacing: '2px' }}>
                HACK: ACTIVE_PATROL
              </div>
              <div style={{ color: 'var(--color-marvel-red)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <Play size={48} style={{ opacity: 0.8 }} fill="currentColor" />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', fontWeight: 800 }}>Watch Telemetry Trailer</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE MISSION SECTION (matches THE STORY in screenshot) */}
      <section ref={missionRef} style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-cinema-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} className="story-columns">
          
          {/* Mission specs text on left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#fff' }}>
              THE <span className="outline-text">MISSION</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light-gray)', lineHeight: '1.7' }}>
              For the first time in the collegiate history of Cochin University (CUSAT), our friendly neighborhood developers are unmasked and no longer able to separate their normal engineering code from the high stakes of a 24-hour coding marathon.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Organized by CITTIC, Make-A-Ton represents the ultimate crucible. Developers are challenged to build software modules that optimize web-shooter aperture ratios, map Oscorp virus propagation anomalies, or secure Daily Bugle asset registries.
            </p>
          </div>

          {/* Framed Graphic on right (Offset border effect) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="framed-image-container" style={{ width: '100%', maxWidth: '480px' }}>
              <div className="framed-image" style={{ 
                height: '280px', 
                backgroundColor: '#121212',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.25rem',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: '#00e5ff',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ color: '#ff003c' }}>import</span> React, &#123; useState, useEffect &#125; <span style={{ color: '#ff003c' }}>from</span> <span style={{ color: '#ffb700' }}>'react'</span>;
                  <br />
                  <span style={{ color: '#ff003c' }}>const</span> SpideySuit = () =&gt; &#123;
                  <br />
                  &nbsp;&nbsp;const [fluid, setFluid] = useState(100);
                  <br />
                  &nbsp;&nbsp;const webSling = () =&gt; setFluid(f =&gt; f - 10);
                  <br />
                  &nbsp;&nbsp;return &lt;HUD fluid=&#123;fluid&#125; /&gt;
                  <br />
                  &#125;;
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.7rem' }}>
                  // Calibration check: MIDTOWN_NODE_ONLINE
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE SUBMISSIONS SO FAR (Interactive Grid) */}
      <section ref={submissionsRef} style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem' }}>
              THE SUBMISSIONS <span style={{ color: 'var(--color-marvel-red)' }}>SO FAR</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
              Inspect structural anomalies, tech integrations, and upvote prototypes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem' }} className="gallery-columns">
            {/* Filter controls */}
            <FilterSidebar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedPrizes={selectedPrizes}
              setSelectedPrizes={setSelectedPrizes}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />

            {/* Submissions Grid */}
            <div>
              {processedProjects.length === 0 ? (
                <div style={{
                  backgroundColor: 'var(--bg-cinema-dark)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  padding: '5rem 2rem',
                  textAlign: 'center'
                }}>
                  <p style={{ color: 'var(--color-text-muted)' }}>No signals match the current search filters.</p>
                </div>
              ) : (
                <>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                  }}>
                    {paginatedProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={() => setSelectedProject(project)}
                        onLike={handleLikeProject}
                      />
                    ))}
                  </div>

                  {/* Centered Pagination matching screenshot style */}
                  {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        const isCurrent = currentPage === pageNum;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => changePage(pageNum)}
                            style={{
                              backgroundColor: isCurrent ? 'var(--color-marvel-red)' : 'transparent',
                              color: isCurrent ? 'white' : 'var(--color-text-muted)',
                              border: isCurrent ? '1px solid var(--color-marvel-red)' : '1px solid rgba(255,255,255,0.1)',
                              width: '36px',
                              height: '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              fontWeight: 800,
                              fontSize: '0.8rem',
                              fontFamily: 'var(--font-display)',
                              transition: 'var(--transition-fast)'
                            }}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      <hr className="section-divider" />

      {/* 4. THE CAST & CREW SECTION (Guild & Sponsors) */}
      <section ref={guildRef} style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section Header with Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>
              THE <span style={{ color: 'var(--color-marvel-red)' }}>GUILD</span> & SPONSORS
            </h2>
            <div style={{ flexGrow: 1, height: '2px', backgroundColor: 'rgba(226, 32, 38, 0.4)' }} />
          </div>

          {/* Participant Cast Cards (4 Column Grid) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '4rem'
          }} className="cast-grid">
            {participants.slice(0, 4).map((person, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div className="framed-image-container">
                  <img 
                    src={person.avatar} 
                    alt={person.name} 
                    className="framed-image"
                    style={{ height: '260px', width: '100%' }}
                  />
                  {/* Small Overlay Label */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: '0.2rem 0.5rem',
                    fontSize: '0.62rem',
                    color: 'white',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderLeft: '2px solid var(--color-marvel-red)'
                  }}>
                    {person.logo}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
                    {person.role}
                  </h4>
                  <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: 800, marginTop: '0.1rem' }}>
                    {person.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsors Credits List (Crew) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap', 
            gap: '2rem', 
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '2.5rem',
            textAlign: 'center'
          }} className="crew-credits">
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1.5px' }}>ORGANIZED BY</span>
              <h4 style={{ fontSize: '1.1rem', color: 'white', marginTop: '0.25rem' }}>CITTIC & CUSAT</h4>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1.5px' }}>SPONSORED BY</span>
              <h4 style={{ fontSize: '1.1rem', color: 'white', marginTop: '0.25rem' }}>STARK INDUSTRIES & OSCORP</h4>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-marvel-red)', fontWeight: 800, letterSpacing: '1.5px' }}>POWERED BY</span>
              <h4 style={{ fontSize: '1.1rem', color: 'white', marginTop: '0.25rem' }}>DEVPOST PLATFORM</h4>
            </div>
          </div>

        </div>
      </section>

      {/* 5. NEWSLETTER ALERTS SIGN-UP BLOCK */}
      <section style={{ backgroundColor: 'var(--color-marvel-red)', padding: '4rem 2rem', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2.5rem' }} className="newsletter-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', lineHeight: '1.1', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
              BE THE FIRST TO KNOW<br />
              WHEN THE NEW ERA BEGINS.
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', maxWidth: '480px' }}>
              Get exclusive updates on telemetry logs, final project pitches, and CITTIC winner declarations.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '420px' }}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              style={{
                flexGrow: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                border: 'none',
                padding: '0.8rem 1.2rem',
                color: 'white',
                fontSize: '0.8rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600
              }}
            />
            <button 
              style={{
                backgroundColor: 'white',
                color: 'var(--color-marvel-red)',
                border: 'none',
                padding: '0 1.5rem',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
              className="signup-submit-btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0d0d0d', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }} className="footer-columns">
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', letterSpacing: '2px', color: '#fff' }}>
              MAKE-A-TON
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
              © 2026 CITTIC MARVEL. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.72rem' }} className="footer-links">
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Privacy Policy</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Terms of Service</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Help Desk</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }} className="foot-link">Contact</a>
          </div>

        </div>
      </footer>

      {/* OVERLAY MODAL: PROJECT DETAILS */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLike={handleLikeProject}
          onAddComment={handleAddComment}
        />
      )}

      {/* OVERLAY MODAL: SUBMIT NEW PROJECT */}
      {showSubmitModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(5, 7, 13, 0.9)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem',
          overflowY: 'auto'
        }} onClick={() => setShowSubmitModal(false)}>
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '750px',
              animation: 'modalSlideIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close trigger button */}
            <button 
              onClick={() => setShowSubmitModal(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: 'white',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              x
            </button>
            <SubmitForm onSubmit={handleAddProject} />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .trailer-btn:hover {
          background-color: rgba(255,255,255,0.05) !important;
          border-color: white !important;
        }
        .foot-link:hover {
          color: white !important;
        }
        .signup-submit-btn:hover {
          background-color: #f0f0f0 !important;
        }
        @media (max-width: 768px) {
          .hero-columns, .story-columns, .gallery-columns, .footer-columns, .newsletter-container {
            grid-template-columns: 1fr !important;
            flex-direction: column !important;
          }
          .hero-graphic {
            order: -1;
          }
        }
      `}} />
    </div>
  );
}
