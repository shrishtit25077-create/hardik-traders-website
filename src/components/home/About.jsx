import React from 'react';

const FEATURED_BRANDS = [
  // Bearings
  'SKF', 'NSK', 'NTN', 'FAG', 'TIMKEN', 'THK', 'NACHI',
  // Automation
  'Mitsubishi Electric', 'Yaskawa', 'Omron', 'Balluff',
  // Pneumatics
  'SMC', 'Festo', 'Parker', 'Airtac',
  // Lubricants
  'Shell', 'Castrol', 'Mobil', 'Servo'
];

export default function About() {
  return (
    <section id="about" className="section about-bg">
      <div className="si">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'start' }}>
          
          {/* LEFT COLUMN: Narrative & Why Choose Us List */}
          <div>
            <p className="s-tag">Direct B2B Sourcing Partner</p>
            <h2 className="s-title">India's Trusted Industrial <em>Procurement Partner</em></h2>
            
            <p className="s-desc" style={{ marginBottom: '1.5rem', fontWeight: 300, color: 'var(--text-muted)' }}>
              Hardik Traders has been a premier authorized distributor and trusted supply partner for Indian factories, manufacturing companies, OEMs, and contractors since 2001. We streamline your procurement pipeline with 100% genuine products sourced directly from the world’s leading engineering brands.
            </p>

            {/* Why Hardik Traders Bullets List */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Why Hardik Traders?
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '2.5rem' }}>
              {[
                { title: 'Direct Sourcing', desc: 'Direct supply lines from premium global manufacturers ensuring authentic pricing.' },
                { title: 'Genuine Products Only', desc: '100% genuine engineering components backed by official manufacturer warranties.' },
                { title: 'Technical Support Available', desc: 'Expert engineering support to help you select the exact component specifications.' },
                { title: 'Fast Pan-India Dispatch', desc: 'Robust logistics and regional warehousing for express B2B onsite delivery.' },
                { title: 'Corporate Procurement Solutions', desc: 'Flexible payment terms, scheduled supply contracts, and digitized workflows.' },
                { title: 'Volume Pricing Available', desc: 'Highly competitive volume discounts and custom tier-pricing for OEMs.' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--red)', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '-2px' }}>✓</span>
                  <div>
                    <strong style={{ color: 'var(--text)', fontSize: '0.85rem', display: 'block', fontWeight: 700 }}>{item.title}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', display: 'block', marginTop: '0.1rem', fontWeight: 300 }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Featured Brands Grid Showcase */}
          <div>
            <p className="s-tag">Authorized Linecard</p>
            <h3 className="s-title" style={{ fontSize: '1.8rem', marginBottom: '2.2rem' }}>Featured <em>Brands</em></h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, fontWeight: 300 }}>
              Hover over any brand block to preview original B2B supplied product ranges and authorized categories.
            </p>

            <div className="brands-showcase-grid">
              {FEATURED_BRANDS.map((brand) => (
                <div className="showcase-cell" key={brand}>
                  <div className="showcase-logo">{brand.split(' ')[0]}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                * Standard B2B supply lines fully active across all listed brand catalogs.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
