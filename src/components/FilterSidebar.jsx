import React from 'react';
import { Filter, Search, RotateCcw, AlertTriangle } from 'lucide-react';
import { sponsorPrizes } from '../data/projects';

export default function FilterSidebar({ 
  searchQuery, 
  setSearchQuery, 
  selectedPrizes, 
  setSelectedPrizes, 
  sortOption, 
  setSortOption 
}) {

  const handlePrizeChange = (prize) => {
    if (selectedPrizes.includes(prize)) {
      setSelectedPrizes(selectedPrizes.filter(p => p !== prize));
    } else {
      setSelectedPrizes([...selectedPrizes, prize]);
    }
  };

  const clearFilters = () => {
    setSelectedPrizes([]);
    setSearchQuery('');
    setSortOption('newest');
  };

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Search Input Box */}
      <div style={{ backgroundColor: 'var(--bg-sidebar)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.25rem' }}>
        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-spidey-blue)', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Search size={14} /> Scanner
        </h4>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search Spider-Tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#0c0f1a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '0.6rem 0.8rem',
              color: 'white',
              fontSize: '0.85rem',
              outline: 'none',
              transition: 'var(--transition-smooth)'
            }}
            className="search-input"
          />
        </div>
      </div>

      {/* Sort Options */}
      <div style={{ backgroundColor: 'var(--bg-sidebar)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.25rem' }}>
        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-text-gray)', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
          Sorting Order
        </h4>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: '#0c0f1a',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            padding: '0.6rem 0.8rem',
            color: 'white',
            fontSize: '0.85rem',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="newest">Recent Sightings</option>
          <option value="likes">Highest Telemetry (Likes)</option>
          <option value="alpha">Designation (A-Z)</option>
        </select>
      </div>

      {/* Prize Filters */}
      <div style={{ backgroundColor: 'var(--bg-sidebar)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--color-spidey-red)', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
            <Filter size={14} /> Filter Challenges
          </h4>
          {(selectedPrizes.length > 0 || searchQuery || sortOption !== 'newest') && (
            <button 
              onClick={clearFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-spidey-blue)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                padding: '0.2rem'
              }}
            >
              <RotateCcw size={10} /> Reset
            </button>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.3rem' }} className="checkbox-scroll">
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
                  color: isChecked ? '#fff' : 'var(--color-text-gray)', 
                  cursor: 'pointer',
                  padding: '0.25rem 0',
                  lineHeight: '1.3'
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handlePrizeChange(prize)}
                  style={{
                    marginTop: '0.15rem',
                    accentColor: 'var(--color-spidey-red)',
                    cursor: 'pointer'
                  }}
                />
                <span>{prize}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Spider-Threat Decoy Panel */}
      <div style={{ backgroundColor: 'rgba(255, 0, 60, 0.05)', border: '1px solid rgba(255,0,60,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
        <h5 style={{ fontSize: '0.8rem', color: 'var(--color-spidey-red)', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
          <AlertTriangle size={14} /> Threat Level Alert
        </h5>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-gray)', lineHeight: '1.4' }}>
          Multiple Oscorp drone footprints detected near Midtown. Keep suit diagnostics active. Secure node encryption.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .search-input:focus {
          border-color: var(--color-spidey-blue) !important;
          box-shadow: 0 0 8px rgba(0, 210, 255, 0.2);
        }
        .checkbox-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .checkbox-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
        }
        .checkbox-scroll::-webkit-scrollbar-thumb:hover {
          background: var(--color-spidey-red);
        }
      `}} />
    </aside>
  );
}
