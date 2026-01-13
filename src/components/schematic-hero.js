import React from "react";

const SchematicHero = () => {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "3rem",
        display: "flex",
        justifyContent: "center",
        opacity: 0.9,
      }}
    >
      <svg
        width="100%"
        height="200"
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "600px" }}
      >
        <defs>
          <linearGradient id="fade-lines" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--grid-line)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--grid-line)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central Core (The "Brain" / Focus) */}
        <g transform="translate(300, 100)">
          {/* Inner Rings */}
          <circle cx="0" cy="0" r="25" stroke="var(--text-main)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="40" stroke="var(--text-muted)" strokeWidth="0.5" strokeDasharray="4 4" />
          
          {/* Initials */}
          <text 
            x="0" 
            y="0" 
            dy=".35em" 
            textAnchor="middle" 
            fontFamily="var(--font-mono)" 
            fontSize="20" 
            fontWeight="bold" 
            fill="var(--text-main)"
            letterSpacing="-1px"
          >
            SF
          </text>

          {/* Core Nodes */}
          <circle cx="0" cy="-25" r="2" fill="var(--accent)" />
          <circle cx="0" cy="25" r="2" fill="var(--accent)" />
          <circle cx="-25" cy="0" r="2" fill="var(--accent)" />
          <circle cx="25" cy="0" r="2" fill="var(--accent)" />
        </g>

        {/* Left Hemisphere Flow Lines */}
        <path
          d="M0 20 C 100 20, 200 60, 280 90"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 60 C 100 60, 200 80, 280 95"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 140 C 100 140, 200 120, 280 105"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 180 C 100 180, 200 140, 280 110"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />

        {/* Right Hemisphere Flow Lines (Mirrored) */}
        <path
          d="M600 20 C 500 20, 400 60, 320 90"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M600 60 C 500 60, 400 80, 320 95"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M600 140 C 500 140, 400 120, 320 105"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M600 180 C 500 180, 400 140, 320 110"
          stroke="url(#fade-lines)"
          strokeWidth="1"
          fill="none"
        />

        {/* Technical Markers */}
        <text x="290" y="160" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)" textAnchor="middle">
          FIG. 02-A // CORTEX
        </text>
        
        {/* Floating Data Nodes */}
        <circle cx="150" cy="50" r="1.5" fill="var(--text-muted)" />
        <circle cx="450" cy="150" r="1.5" fill="var(--text-muted)" />
        <line x1="150" y1="50" x2="170" y2="50" stroke="var(--grid-line)" strokeWidth="1" />
        <line x1="430" y1="150" x2="450" y2="150" stroke="var(--grid-line)" strokeWidth="1" />

      </svg>
    </div>
  );
};

export default SchematicHero;
