import React, { useState } from 'react';
import { Plus, Award, Terminal, Code, Cpu, Sparkles } from 'lucide-react';
import { sponsorPrizes } from '../data/projects';

export default function SubmitForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPrizes, setSelectedPrizes] = useState([]);
  const [techTags, setTechTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePrizeToggle = (prize) => {
    if (selectedPrizes.includes(prize)) {
      setSelectedPrizes(selectedPrizes.filter(p => p !== prize));
    } else {
      setSelectedPrizes([...selectedPrizes, prize]);
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !techTags.includes(currentTag.trim())) {
      setTechTags([...techTags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTechTags(techTags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !tagline.trim() || !description.trim()) return;

    const newProject = {
      id: `sp-user-${Date.now().toString().slice(-4)}`,
      title: title.trim(),
      tagline: tagline.trim(),
      description: description.trim(),
      isWinner: false,
      winnerBadge: "",
      likes: 0,
      prizes: selectedPrizes.length > 0 ? selectedPrizes : ["General Hack Category"],
      members: [
        { 
          name: "Friendly Developer", 
          role: "Spider-Innovator", 
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
        }
      ],
      comments: [],
      readme: `# ${title.trim()}

${description.trim()}

### Tech Stack / Diagnostics
${techTags.length > 0 ? techTags.map(tag => `- ${tag}`).join('\n') : '- React\n- Spider Telemetry Node'}

### Target Challenge Category
${selectedPrizes.length > 0 ? selectedPrizes.map(p => `- ${p}`).join('\n') : '- General Hack Category'}

### Calibration & Verification
* Core code built and optimized for Stark HUD overlay deployment.
* Suit latency metrics cleared at < 0.5ms.`
    };

    onSubmit(newProject);
    setSubmitted(true);
    
    // Reset form fields
    setTitle('');
    setTagline('');
    setDescription('');
    setSelectedPrizes([]);
    setTechTags([]);
  };

  if (submitted) {
    return (
      <div style={{
        maxWidth: '650px',
        margin: '3rem auto',
        backgroundColor: 'var(--bg-sidebar)',
        border: '1px solid rgba(0, 210, 255, 0.2)',
        boxShadow: 'var(--border-glow-blue), var(--card-shadow)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        textAlign: 'center',
        animation: 'webSling 0.5s ease'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 210, 255, 0.1)', width: '64px', height: '64px', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <Sparkles size={32} color="var(--color-spidey-blue)" />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', marginBottom: '0.8rem', color: '#fff' }}>
          Transmission Successful!
        </h2>
        <p style={{ color: 'var(--color-text-gray)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Your technology prototype has been registered into the Spider-Telemetry grid. Midtown network nodes are compiling your build.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="glow-button glow-button-blue"
        >
          Submit Another Hack
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '750px',
      margin: '0 auto',
      backgroundColor: 'var(--bg-sidebar)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      boxShadow: 'var(--card-shadow)',
      padding: '2.5rem',
      animation: 'modalSlideIn 0.4s ease'
    }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#fff', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <Plus color="var(--color-spidey-red)" /> Register New Hack
        </h2>
        <p style={{ color: 'var(--color-text-gray)', fontSize: '0.85rem' }}>
          Deploy your system blueprints to the friendly neighborhood hackathon database.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Project Name */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Cpu size={14} color="var(--color-spidey-red)" /> Project Designation (Name)
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Oscorp Sensor Array Override"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#0c0f1a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              color: 'white',
              fontSize: '0.9rem',
              outline: 'none'
            }}
            className="form-control"
          />
        </div>

        {/* Tagline */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="var(--color-spidey-blue)" /> Project Tagline
          </label>
          <input
            type="text"
            required
            placeholder="A single sentence explaining the hack target..."
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#0c0f1a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              color: 'white',
              fontSize: '0.9rem',
              outline: 'none'
            }}
            className="form-control"
          />
        </div>

        {/* Description */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={14} color="var(--color-text-gray)" /> Detailed Specifications (Description)
          </label>
          <textarea
            required
            rows={4}
            placeholder="Explain how this device or service assists the neighborhood or solves hackathon problem domains..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#0c0f1a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              color: 'white',
              fontSize: '0.9rem',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'var(--font-sans)'
            }}
            className="form-control"
          />
        </div>

        {/* Tech Stack Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Code size={14} color="var(--color-spidey-blue)" /> Tech Stack / Languages
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <input
              type="text"
              placeholder="e.g., React, Python, WebAssembly"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              style={{
                flexGrow: 1,
                backgroundColor: '#0c0f1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '0.6rem 0.8rem',
                color: 'white',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button 
              onClick={handleAddTag}
              style={{
                backgroundColor: 'rgba(0, 210, 255, 0.1)',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                color: 'var(--color-spidey-blue)',
                padding: '0 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              Add
            </button>
          </div>
          {techTags.length > 0 && (
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {techTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '4px', 
                    padding: '0.2rem 0.5rem', 
                    fontSize: '0.72rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.3rem',
                    color: 'white'
                  }}
                >
                  {tag}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveTag(tag)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-spidey-red)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold' }}
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Prize Targets Checklist */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Award size={14} color="var(--color-spidey-red)" /> Target Sponsor Prizes
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.6rem',
            backgroundColor: '#0c0f1a',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '8px',
            padding: '1rem',
            maxHeight: '180px',
            overflowY: 'auto'
          }} className="prizes-selector">
            {sponsorPrizes.map((prize, idx) => {
              const isChecked = selectedPrizes.includes(prize);
              return (
                <label 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.5rem', 
                    fontSize: '0.78rem', 
                    color: isChecked ? 'white' : 'var(--color-text-gray)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handlePrizeToggle(prize)}
                    style={{ marginTop: '0.1rem', accentColor: 'var(--color-spidey-red)' }}
                  />
                  <span>{prize}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Submit Action */}
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            type="submit" 
            className="glow-button"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Deploy Blueprint to Grid
          </button>
        </div>

      </form>

      <style dangerouslySetInnerHTML={{__html: `
        .form-control:focus {
          border-color: var(--color-spidey-red) !important;
          box-shadow: 0 0 8px rgba(255, 0, 60, 0.2);
        }
        .prizes-selector::-webkit-scrollbar {
          width: 6px;
        }
        .prizes-selector::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
      `}} />
    </div>
  );
}
