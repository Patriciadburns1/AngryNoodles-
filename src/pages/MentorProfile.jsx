import { useState } from "react";

// ── Data ─────────────────────────────────────────────────────
const mentor = {
  emoji: "🌺",
  name: "Amara Koné",
  role: "Senior Engineering Manager · Monzo",
  location: "London",
  linkedin: "Verified · Monzo, Deliveroo, Google",
  bio: [
    "Three years at Google wondering if I belonged. Turns out the room was wrong, not me. Now I run a team of 18 and help other women figure that out faster than I did.",
    "I'll be straight with you, I'll push back when you're underselling yourself, and I won't give you a pep talk when what you need is a plan.",
  ],
  quote: "The men around me weren't waiting to feel ready. I stopped waiting too.",
  tags: [
    { label: '"I got passed over — again"',           style: "clay" },
    { label: '"I\'m the only one who looks like me"', style: "plain" },
    { label: '"I said yes before I was ready"',       style: "sage" },
    { label: '"My manager takes credit for my work"', style: "plain" },
    { label: '"I\'m scared to ask for more money"',   style: "clay" },
    { label: '"Stay or quit — I genuinely don\'t know"', style: "plain" },
    { label: '"Everyone else seems fine. I\'m not."', style: "sage" },
    { label: '"I freeze up in meetings"',             style: "plain" },
    { label: '"My visa is tied to this job"',         style: "clay" },
    { label: '"I cried at work and I can\'t let it go"', style: "plain" },
    { label: '"I work twice as hard and get half the credit"', style: "plain" },
    { label: '"I want to lead but nobody sees it yet"', style: "sage" },
  ],
  trust: [
    { icon: "shield",   text: "Women-only space" },
    { icon: "eye",      text: "No algorithms. Amara reads this herself." },
    { icon: "lock",     text: "Conversations stay private" },
  ],
};

// ── Icons ─────────────────────────────────────────────────────
function Icon({ name }) {
  const icons = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    eye:    <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    lock:   <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
    back: <><polyline points="15 18 9 12 15 6"/></>,
  };
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

// ── Tag styles ────────────────────────────────────────────────
const tagStyles = {
  plain: { background: "#fff",     color: "#4A3428", border: "1px solid #E4D4C8" },
  clay:  { background: "#FDF0EB", color: "#8B3A20", border: "1px solid #F0BBA8" },
  sage:  { background: "#DDF0DD", color: "#2E5E32", border: "1px solid #B5CEAA" },
};

// ── Google Fonts injection ────────────────────────────────────
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');`;

// ── Component ─────────────────────────────────────────────────
export default function MentorProfile() {
  const [msg, setMsg]   = useState("");
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!msg.trim()) return;
    setSent(true);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAF6EF", color: "#1F1610", minHeight: "100vh" }}>

      {/* Fonts + global resets */}
      <style>{`
        ${FONTS}
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .f1{animation:fadeUp .55s .00s ease both;}
        .f2{animation:fadeUp .55s .10s ease both;}
        .f3{animation:fadeUp .55s .20s ease both;}
        .f4{animation:fadeUp .55s .30s ease both;}
        textarea:focus { outline:none; border-color: #C46E50 !important; }
        textarea::placeholder { color: rgba(255,255,255,.25); }
        .tag:hover { transform:translateY(-2px); box-shadow:0 4px 14px rgba(59,42,31,.1); }
        .send-btn:hover { background: #D98060 !important; }
        .back-btn:hover { color: #C46E50 !important; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        padding: "1.1rem 3rem", display: "flex", alignItems: "center",
        justifyContent: "space-between", borderBottom: "1px solid #F0E9DC",
        background: "#FAF6EF", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#C46E50", letterSpacing: ".01em" }}>
          her<em style={{ fontStyle: "italic", fontWeight: 400 }}>story</em>
        </div>
        <button className="back-btn" style={{ background: "none", border: "none", color: "#8A7060", fontSize: 13, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 5, transition: "color .2s" }}>
          <Icon name="back" /> Community
        </button>
      </nav>

      {/* ── PAGE GRID ── */}
      <div style={{
        maxWidth: 1060, margin: "0 auto", padding: "0 2.5rem 6rem",
        display: "grid", gridTemplateColumns: "1fr 290px", gap: "4rem", alignItems: "start",
      }}>

        {/* ── MAIN COLUMN ── */}
        <div style={{ minWidth: 0 }}>

          {/* HERO */}
          <div className="f1" style={{
            display: "flex", alignItems: "flex-end", gap: "1.8rem",
            padding: "3rem 0 2.8rem",
            borderBottom: "1px solid #F0E9DC", marginBottom: "2.8rem",
          }}>
            <div style={{
              width: 88, height: 88, borderRadius: 22, flexShrink: 0,
              background: "linear-gradient(135deg, #F2CABB 0%, #C46E50 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2.6rem", boxShadow: "0 6px 24px rgba(196,110,80,.22)",
            }}>
              {mentor.emoji}
            </div>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "#C46E50", marginBottom: 6 }}>
                Mentor &nbsp;·&nbsp; {mentor.location}
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.05, marginBottom: 6, color: "#1F1610" }}>
                {mentor.name}
              </h1>
              <p style={{ fontSize: 14, color: "#8A7060", marginBottom: 12 }}>{mentor.role}</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EBF3FB", borderRadius: 8, padding: "5px 11px", fontSize: 11.5, fontWeight: 500, color: "#0A66C2" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                {mentor.linkedin}
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div className="f2" style={{ marginBottom: "2.8rem" }}>
            <SectionLabel>About</SectionLabel>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A3428" }}>{mentor.bio[0]}</p>
            {/* Pull quote */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: "1.25rem", color: "#3B2A1F", lineHeight: 1.55,
              padding: "1.2rem 1.4rem 1.2rem 3rem",
              background: "#F0E9DC", borderRadius: 14, margin: "1.4rem 0",
              position: "relative",
            }}>
              <span style={{ position: "absolute", top: 6, left: 14, fontSize: "3rem", lineHeight: .8, color: "#C46E50", opacity: .4, fontFamily: "'Cormorant Garamond', serif", userSelect: "none" }}>"</span>
              {mentor.quote}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A3428" }}>{mentor.bio[1]}</p>
          </div>

          {/* TAGS */}
          <div className="f3">
            <SectionLabel>Things I've lived through</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {mentor.tags.map((t, i) => (
                <span key={i} className="tag" style={{
                  ...tagStyles[t.style],
                  borderRadius: 10, padding: "8px 15px",
                  fontSize: 13, fontWeight: 400, cursor: "default",
                  transition: "all .18s", lineHeight: 1.3,
                }}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ── SIDEBAR ── */}
        <div className="f4" style={{ position: "sticky", top: 72 }}>
          <div style={{
            background: "#3B2A1F", borderRadius: 20, padding: "1.7rem",
            position: "relative", overflow: "hidden",
          }}>
            {/* decorative glow */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, #C46E50 0%, transparent 70%)", opacity: .18, pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              <p style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "#E8A080", marginBottom: 6 }}>Let's talk</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#fff", marginBottom: 6, lineHeight: 1.2 }}>
                What's going on?
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                Tell me where you're at. No need to have it figured out.
              </p>

              {!sent ? (
                <>
                  <textarea
                    rows={5}
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    placeholder="Hi Amara — I just got offered a management role and I honestly don't know if I'm ready…"
                    style={{
                      width: "100%", background: "rgba(255,255,255,.07)",
                      border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: 12, padding: "12px 14px",
                      color: "#fff", fontFamily: "inherit", fontSize: 13.5,
                      resize: "none", lineHeight: 1.65, transition: "border-color .2s",
                    }}
                  />
                  <button className="send-btn" onClick={send} style={{
                    width: "100%", marginTop: 10,
                    background: "#C46E50", color: "#fff", border: "none",
                    borderRadius: 100, padding: 11,
                    fontFamily: "inherit", fontSize: 13.5, fontWeight: 500,
                    cursor: "pointer", transition: "background .2s",
                  }}>
                    Send request
                  </button>
                  <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,.22)", marginTop: 9 }}>
                    ● Usually replies within 24 hrs
                  </p>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "1.2rem 0" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>🌺</div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#FAF6EF", lineHeight: 1.5 }}>
                    Sent. She'll read this and reply personally.
                  </p>
                </div>
              )}

              {/* Trust strip */}
              <div style={{ marginTop: "1.2rem", borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: "1.2rem", display: "flex", flexDirection: "column", gap: 8 }}>
                {mentor.trust.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,.35)" }}>
                    <Icon name={t.icon} />
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Section label with trailing rule ─────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      fontSize: 10.5, fontWeight: 500, letterSpacing: ".14em",
      textTransform: "uppercase", color: "#8A7060", marginBottom: "1rem",
    }}>
      {children}
      <span style={{ flex: 1, height: 1, background: "#F0E9DC", display: "block" }} />
    </div>
  );
}
