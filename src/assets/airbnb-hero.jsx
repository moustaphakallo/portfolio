import { useState } from "react";

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export default function AirbnbHero() {
  const [activeTab, setActiveTab] = useState("homes");
  const [focusedField, setFocusedField] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Circular+Std:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #0f0f0f;
        }

        /* Background imagery */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,90,70,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(255,180,120,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 20% 70%, rgba(255,60,80,0.06) 0%, transparent 50%);
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
          background-size: cover;
          background-position: center 40%;
          opacity: 0.35;
          filter: saturate(0.8);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15,15,15,0.55) 0%,
            rgba(15,15,15,0.2) 40%,
            rgba(15,15,15,0.75) 100%
          );
        }

        /* Navbar */
        .navbar {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 48px;
          animation: fadeDown 0.6s ease both;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .logo-mark {
          color: #ff385c;
          font-size: 28px;
          line-height: 1;
        }

        .logo-text {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          letter-spacing: -0.3px;
        }

        .menu-center {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          padding: 4px;
          backdrop-filter: blur(12px);
        }

        .menu-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          background: transparent;
        }

        .menu-tab:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .menu-tab.active {
          background: rgba(255,255,255,0.15);
          color: #fff;
          backdrop-filter: blur(8px);
        }

        .menu-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .become-host {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          padding: 10px 16px;
          border-radius: 50px;
          transition: background 0.2s;
          border: none;
          background: transparent;
        }

        .become-host:hover {
          background: rgba(255,255,255,0.1);
        }

        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
        }

        .icon-btn:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        /* Hero content */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 60px 24px 48px;
          animation: fadeUp 0.7s 0.1s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff385c;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }

        .hero-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }

        .hero-headline em {
          font-style: italic;
          color: #ff6b6b;
        }

        .hero-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          letter-spacing: 0.01em;
        }

        /* Search bar */
        .search-bar-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          padding: 0 24px;
          animation: fadeUp 0.7s 0.25s ease both;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.97);
          border-radius: 60px;
          width: 100%;
          max-width: 780px;
          box-shadow:
            0 8px 40px rgba(0,0,0,0.35),
            0 2px 8px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.9);
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .search-bar:hover {
          box-shadow:
            0 12px 50px rgba(0,0,0,0.4),
            0 4px 12px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .search-item {
          flex: 1;
          padding: 16px 24px;
          cursor: pointer;
          border-radius: 60px;
          transition: background 0.2s ease;
          position: relative;
        }

        .search-item:hover,
        .search-item.focused {
          background: #f5f5f5;
        }

        .search-item p {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #222;
          margin-bottom: 3px;
        }

        .search-item span {
          font-size: 14px;
          color: #717171;
          font-weight: 400;
          white-space: nowrap;
        }

        .search-divider {
          width: 1px;
          height: 28px;
          background: #e0e0e0;
          flex-shrink: 0;
        }

        .search-btn {
          margin: 6px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff385c 0%, #e31c5f 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(255,56,92,0.4);
        }

        .search-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 6px 20px rgba(255,56,92,0.5);
          background: linear-gradient(135deg, #ff4f6d 0%, #f01d65 100%);
        }

        .search-btn:active {
          transform: scale(0.98);
        }

        /* Stats strip */
        .stats-strip {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          gap: 48px;
          padding: 52px 24px 0;
          animation: fadeUp 0.7s 0.4s ease both;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        .stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.12);
          align-self: stretch;
        }

        /* Floating card */
        .floating-card {
          position: absolute;
          bottom: 60px;
          right: 80px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 16px 20px;
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: floatUp 0.8s 0.5s ease both;
          z-index: 10;
        }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff385c, #f7b733);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .card-text p {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 2px;
        }

        .card-text span {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        .card-badge {
          background: rgba(255,56,92,0.2);
          border: 1px solid rgba(255,56,92,0.35);
          color: #ff6b6b;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-image" />
        <div className="hero-overlay" />

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-mark">✦</span>
            <span className="logo-text">airbnb</span>
          </div>

          <div className="menu-center">
            {[
              { id: "homes", label: "Homes", icon: "🏠" },
              { id: "experiences", label: "Experiences", icon: "🎈" },
              { id: "services", label: "Services", icon: "🛎" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`menu-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="menu-right">
            <button className="become-host">Become a host</button>
            <button className="icon-btn"><GlobeIcon /></button>
            <button className="icon-btn"><MenuIcon /></button>
          </div>
        </nav>

        {/* Hero headline */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Over 7 million listings worldwide
          </div>
          <h1 className="hero-headline">
            Find your next<br /><em>extraordinary</em> stay
          </h1>
          <p className="hero-sub">Discover unique homes and experiences around the world</p>
        </div>

        {/* Search bar */}
        <div className="search-bar-wrapper">
          <div className="search-bar">
            <div
              className={`search-item ${focusedField === "where" ? "focused" : ""}`}
              onClick={() => setFocusedField("where")}
            >
              <p>Where</p>
              <span>Search destinations</span>
            </div>

            <div className="search-divider" />

            <div
              className={`search-item ${focusedField === "when" ? "focused" : ""}`}
              onClick={() => setFocusedField("when")}
            >
              <p>When</p>
              <span>Add dates</span>
            </div>

            <div className="search-divider" />

            <div
              className={`search-item ${focusedField === "who" ? "focused" : ""}`}
              onClick={() => setFocusedField("who")}
            >
              <p>Who</p>
              <span>Add guests</span>
            </div>

            <button className="search-btn" onClick={() => setFocusedField(null)}>
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-strip">
          {[
            { number: "7M+", label: "Active listings" },
            null,
            { number: "220+", label: "Countries & regions" },
            null,
            { number: "1.5B+", label: "Guest arrivals" },
          ].map((item, i) =>
            item === null ? (
              <div key={i} className="stat-divider" />
            ) : (
              <div key={i} className="stat">
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            )
          )}
        </div>

        {/* Floating card */}
        <div className="floating-card">
          <div className="card-avatar">🏡</div>
          <div className="card-text">
            <p>Amalfi Coast Villa</p>
            <span>Italy · Just booked</span>
          </div>
          <div className="card-badge">⭐ 4.98</div>
        </div>
      </section>
    </>
  );
}
