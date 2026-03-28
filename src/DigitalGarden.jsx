import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const NOTES = {
  welcome: {
    id: "welcome", title: "Welcome", icon: "✦", section: null,
    content: `# Welcome to my second brain.

I'm **Maxx Yung** — builder, researcher, writer. I think a lot about neuroscience, venture, and the compounding nature of everything.

This is my digital garden. Not a polished blog — a living, interconnected map of everything I'm learning and thinking about.

---

## Explore

→ [[advice]] — Principles I've collected from mentors, books, and mistakes
→ [[email]] — How to write emails that get replies
→ [[books]] — Books that rewired my thinking
→ [[school_rec]] — My #1 recommendation for school
→ [[best_classes]] — The classes actually worth taking
→ [[school_lessons]] — Lessons from the classroom and beyond
→ [[school_takeaways]] — Key takeaways from my education
→ [[work]] — My work experience and what I've learned
→ [[ai]] — Thoughts on artificial intelligence
→ [[life]] — Reflections on life in general

---

> The best time to plant a tree was 20 years ago. The second best time is now.

Click any golden link to jump between ideas.`,
    connections: ["advice", "email", "books", "school_rec", "best_classes", "school_lessons", "school_takeaways", "work", "ai", "life"],
  },
  advice: {
    id: "advice", title: "Advice", icon: "◇", section: "lists",
    content: `# List of Advice

A running collection of principles from mentors, books, mistakes, and quiet observation.

---

## On Compounding

Compounding growth is said to be the 8th wonder of the world. Find and leverage compound interest patterns everywhere.

Compounding activities so far: Reading — one hour can change the direction of your life. Writing on the internet. Altruistically helping others. Exercising, even 15 minutes a day. Sleeping for at least 7 hours.

See [[books]] for what sharpened these ideas.

---

## On Generalism vs. Specialism

As problems grow in complexity, generality matters more than specialty. Problems now exist at the intersection of multiple fields.

My advice: aim to be the best at one field (top 5%). Then be good (top 10%) at several others. The combinations are where the magic happens.

---

## On Luck Surface Area

Writing online expands your luck potential. But there are many paths: take risks, help others, talk with professionals, travel for conferences, do hackathons, connect people. Practice being charismatic. Follow up.

Don't confine your luck potential to a recruiter taking interest in your 4.0. Build surface area, then capitalize on it. Be competent. Be serious about something. Go deep.

---

## On Saying No

If it's not a fuck yeah, it's a no. Be open for hard, life-changing opportunities rather than filling time with easier, smaller ones.

The hardest days define you — not the easy or ordinary ones. Do things not because they are easy, but because they are hard.

---

## On Advice Itself

Sometimes conflicting advice tells you that advice is only useful with lived experience and certain priors about the world. But you should still consider my advice seriously!

---

*This page is a living document. I add to it whenever something clicks.*`,
    connections: ["welcome", "books", "work", "life"],
  },
  email: {
    id: "email", title: "Email Advice", icon: "▣", section: "lists",
    content: `# List of Email Advice

How to write emails that actually get replies.

---

## Core Principles

Frame your questions so the responder only needs a "Yes or no." Reduce friction for the person replying.

Don't ask: "I'm lost, where do I begin!"
Instead ask: "Here's what I've brainstormed as a solution — is this the right path?"

---

## Workflow

Batch check your emails. Check once an hour and process urgent ones ASAP. Delegate everything else to a set time later.

Any email you've written twice to answer someone should be a blog post.

---

*More email wisdom incoming.*`,
    connections: ["welcome", "advice"],
  },
  books: {
    id: "books", title: "Book Shelf", icon: "▢", section: "lists",
    content: `# Book Shelf

Books that rewired my thinking. I don't list books I didn't finish or enjoy — life's too short.

---

## How I Read

I try to read 30 minutes before sleep and 2–3 hours of blogs and essays online. The best books change what you *do*, not just what you *think*.

---

## Favorites

[Add your full book list and notes from brain.maxxyung.com here]

Each book can be its own note — link with [[wikilinks]] for individual reviews and takeaways.

See [[advice]] for how reading compounds.

---

*This shelf grows. Check back.*`,
    connections: ["welcome", "advice", "life"],
  },
  school_rec: {
    id: "school_rec", title: "My #1 Recommendation", icon: "★", section: "school",
    content: `# My #1 Recommendation to Do at School

[Write your single most important recommendation for students here]

---

This is the one thing I wish someone told me on day one.

See [[school_lessons]] and [[best_classes]] for more.

---

*Your top advice for anyone starting school.*`,
    connections: ["welcome", "best_classes", "school_lessons", "school_takeaways"],
  },
  best_classes: {
    id: "best_classes", title: "Best Classes", icon: "◈", section: "school",
    content: `# Best Classes

The classes that were actually worth waking up for.

---

## Criteria

I rate classes on three things: the professor, how interesting the topic is, and how much it changed how I think.

---

## The List

[Add your best classes here — name, professor, and why it mattered]

---

See [[school_lessons]] for what I learned beyond the curriculum.

*I'll keep adding as I take more.*`,
    connections: ["welcome", "school_rec", "school_lessons", "school_takeaways"],
  },
  school_lessons: {
    id: "school_lessons", title: "Lessons", icon: "◇", section: "school",
    content: `# Lessons from School

What school actually taught me — and what it didn't.

---

## The Real Education

The textbooks are fine. The case studies are useful. But the real education is the people. You learn more from a 30-minute conversation with a classmate who built a company than from a semester of theory.

---

## What They Don't Teach

Resilience. Taste. When to quit. How to manage your own psychology. How to sit with ambiguity. The soft stuff is the hard stuff.

---

## On GPA

Spend as little time as needed to get ~3.6 GPA and spend the rest of your time on research or independent projects. Blog. Make videos. Program random things.

See [[advice]] for more on this.

---

*More lessons as I reflect on the experience.*`,
    connections: ["welcome", "school_rec", "best_classes", "school_takeaways", "advice"],
  },
  school_takeaways: {
    id: "school_takeaways", title: "Key Takeaways", icon: "△", section: "school",
    content: `# Key Takeaways

The distilled, most important things from my time in school.

---

## Top Takeaways

[Add your key takeaways here — the things you'd tell your younger self]

---

See [[school_rec]] for the #1 thing, and [[school_lessons]] for the full story.

*Condensed wisdom. No fluff.*`,
    connections: ["welcome", "school_rec", "best_classes", "school_lessons"],
  },
  work: {
    id: "work", title: "Work Experience", icon: "⬡", section: "work",
    content: `# Work Experience

What I've built, where I've worked, and what I learned along the way.

---

## Current

[Your current role and what you're working on]

---

## Previous

[Previous roles — what you shipped, built, or led]

---

## Lessons from Work

The real world doesn't grade on a curve.

Speed wins. A fast 80% solution beats a slow 100% one. Perfectionism is procrastination in a nice outfit.

Communication is the meta-skill. The best idea in the room means nothing if you can't articulate it.

Ownership changes everything. The moment you stop thinking "that's not my job" is the moment you start growing.

See [[advice]] for more principles.

---

*I update this when something meaningful happens.*`,
    connections: ["welcome", "advice", "ai", "life"],
  },
  ai: {
    id: "ai", title: "AI", icon: "◆", section: "ai",
    content: `# AI

My thoughts on artificial intelligence — where it's going, what matters, and what I'm paying attention to.

---

## What I'm Thinking About

[Add your AI thoughts, essays, and observations here]

---

## Resources

[Links, papers, tools, and people worth following in AI]

---

See [[work]] for how AI connects to what I'm building, and [[books]] for related reading.

*This section will grow fast.*`,
    connections: ["welcome", "work", "books", "life"],
  },
  life: {
    id: "life", title: "Life", icon: "☉", section: "life",
    content: `# Life

Reflections on living — the stuff that doesn't fit neatly into a category.

---

## On Purpose

[Your thoughts on purpose, meaning, and direction]

---

## On Relationships

[What you've learned about people]

---

## On Health

[Physical and mental health reflections]

---

## On Time

[How you think about time, priorities, and what matters]

---

See [[advice]] for collected principles, and [[books]] for what shaped these ideas.

*The most important section. Updated whenever something clicks.*`,
    connections: ["welcome", "advice", "books", "work"],
  },
};

// ── Helpers ──
function extractHeadings(content) {
  return content.split("\n").filter(l => l.startsWith("## ")).map((l, i) => ({
    id: `h-${i}`, text: l.replace(/^## /, "").replace(/\*\*/g, ""),
  }));
}

// ── Markdown Renderer ──
function renderContent(text, onNavigate) {
  let h2Count = 0;
  return text.split("\n").map((line, i) => {
    const parse = (str) => {
      const parts = []; let last = 0; const reg = /\[\[(\w+)\]\]/g; let m;
      while ((m = reg.exec(str)) !== null) { if (m.index > last) parts.push(inl(str.slice(last, m.index))); const id = m[1], note = NOTES[id];
        parts.push(<a key={`${i}-${m.index}`} onClick={() => onNavigate(id)} className="wiki-link">{note ? note.title : id}</a>); last = reg.lastIndex; }
      if (last < str.length) parts.push(inl(str.slice(last))); return parts; };
    const inl = (s) => { const p = []; let r = s, k = 0; while (r.length > 0) { const b = r.match(/\*\*(.+?)\*\*/), it = r.match(/\*(.+?)\*/);
        let f = null, idx = r.length; if (b && b.index < idx) { f = "b"; idx = b.index; } if (it && it.index < idx) { f = "i"; idx = it.index; }
        if (!f) { p.push(r); break; } if (idx > 0) p.push(r.slice(0, idx));
        if (f === "b") { p.push(<strong key={k++}>{b[1]}</strong>); r = r.slice(idx + b[0].length); } else { p.push(<em key={k++}>{it[1]}</em>); r = r.slice(idx + it[0].length); } } return p; };
    if (line.startsWith("# ")) return <h1 key={i} className="md-h1">{parse(line.slice(2))}</h1>;
    if (line.startsWith("## ")) { const hid = `h-${h2Count++}`; return <h2 key={i} className="md-h2" id={hid}>{parse(line.slice(3))}</h2>; }
    if (line.startsWith("### ")) return <h3 key={i} className="md-h3">{parse(line.slice(4))}</h3>;
    if (line.startsWith("> ")) return <blockquote key={i} className="md-quote">{parse(line.slice(2))}</blockquote>;
    if (line.startsWith("---")) return <hr key={i} className="md-hr" />;
    if (line.startsWith("- ")) return <div key={i} className="md-li">{parse(line.slice(2))}</div>;
    if (line.startsWith("→ ")) return <div key={i} className="md-arrow">{parse(line.slice(2))}</div>;
    if (line.trim() === "") return <div key={i} className="md-spacer" />;
    return <p key={i} className="md-p">{parse(line)}</p>;
  });
}

// ── Newsletter + Contact Footer ──
function PageFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="page-footer">
      <div className="newsletter">
        <div className="newsletter-badge">✦ Newsletter</div>
        <h3 className="newsletter-title">Stay in the loop</h3>
        <p className="newsletter-desc">I send occasional emails about what I'm learning, building, and thinking about. No spam, unsubscribe anytime.</p>
        {subscribed ? (
          <div className="newsletter-success">
            <span className="newsletter-check">✓</span> You're in! Check your inbox to confirm.
          </div>
        ) : (
          <div className="newsletter-form">
            <input className="newsletter-input" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="newsletter-btn" onClick={() => { if (email.includes("@")) setSubscribed(true); }}>Subscribe</button>
          </div>
        )}
      </div>

      <div className="contact">
        <div className="contact-line" />
        <h3 className="contact-title">Contact Me</h3>
        <p className="contact-desc">Want to chat, collaborate, or just say hi?</p>
        <div className="contact-links">
          <a className="contact-link" href="https://twitter.com/maxxyung" target="_blank" rel="noopener noreferrer">𝕏 Twitter</a>
          <a className="contact-link" href="https://linkedin.com/in/maxxyung" target="_blank" rel="noopener noreferrer">in LinkedIn</a>
          <a className="contact-link" href="mailto:hello@maxxyung.com">✉ Email</a>
        </div>
      </div>
    </div>
  );
}

// ── Main ──
export default function DigitalGarden() {
  const [currentNote, setCurrentNote] = useState("welcome");
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [history, setHistory] = useState(["welcome"]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [expandedSections, setExpandedSections] = useState({ lists: true, school: true, work: true, ai: true, life: true });
  const contentRef = useRef(null);

  const navigate = useCallback((id) => {
    if (!NOTES[id] || id === currentNote) return;
    setTransitioning(true);
    setTimeout(() => {
      const nh = [...history.slice(0, historyIdx + 1), id];
      setHistory(nh); setHistoryIdx(nh.length - 1); setCurrentNote(id);
      contentRef.current?.scrollTo(0, 0);
      setTimeout(() => setTransitioning(false), 20);
    }, 180);
  }, [currentNote, history, historyIdx]);

  const goBack = () => { if (historyIdx > 0) { const ni = historyIdx - 1; setTransitioning(true); setTimeout(() => { setHistoryIdx(ni); setCurrentNote(history[ni]); setTimeout(() => setTransitioning(false), 20); }, 180); } };
  const goForward = () => { if (historyIdx < history.length - 1) { const ni = historyIdx + 1; setTransitioning(true); setTimeout(() => { setHistoryIdx(ni); setCurrentNote(history[ni]); setTimeout(() => setTransitioning(false), 20); }, 180); } };

  const toggleSection = (key) => setExpandedSections(p => ({ ...p, [key]: !p[key] }));

  const note = NOTES[currentNote];
  const backlinks = Object.values(NOTES).filter(n => n.connections.includes(currentNote) && n.id !== currentNote);
  const headings = extractHeadings(note.content);

  const sidebarSections = [
    { key: "lists", label: "Lists", items: [
      { id: "advice", icon: "◇", title: "Advice" },
      { id: "email", icon: "▣", title: "Email Advice" },
      { id: "books", icon: "▢", title: "Book Shelf" },
    ]},
    { key: "school", label: "School", items: [
      { id: "school_rec", icon: "★", title: "My #1 Recommendation" },
      { id: "best_classes", icon: "◈", title: "Best Classes" },
      { id: "school_lessons", icon: "◇", title: "Lessons" },
      { id: "school_takeaways", icon: "△", title: "Key Takeaways" },
    ]},
    { key: "work", label: "Work", items: [
      { id: "work", icon: "⬡", title: "Work Experience" },
    ]},
    { key: "ai", label: "AI", items: [
      { id: "ai", icon: "◆", title: "AI" },
    ]},
    { key: "life", label: "Life", items: [
      { id: "life", icon: "☉", title: "Life" },
    ]},
  ];

  return (
    <div className={`garden ${dark ? "theme-dark" : "theme-light"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        :root { --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1); }
        .theme-dark {
          --bg-primary:#18181b; --bg-secondary:#111113; --bg-hover:#252528; --bg-elevated:#1e1e22;
          --text-primary:#e8e4db; --text-secondary:#a8a29e; --text-muted:#57534e;
          --accent:#d4a853; --accent-soft:rgba(212,168,83,0.15); --accent-mid:rgba(212,168,83,0.3); --accent-glow:rgba(212,168,83,0.06);
          --border:#2a2a2e; --border-subtle:#222225; --shadow:rgba(0,0,0,0.5);
          --quote-bg:rgba(212,168,83,0.04); --link-line:rgba(212,168,83,0.25);
          --grain:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          --newsletter-bg:#1e1e22; --success-color:#6ec87a;
        }
        .theme-light {
          --bg-primary:#faf9f6; --bg-secondary:#f2f0eb; --bg-hover:#e9e7e1; --bg-elevated:#fff;
          --text-primary:#1c1917; --text-secondary:#57534e; --text-muted:#a8a29e;
          --accent:#a07830; --accent-soft:rgba(160,120,48,0.1); --accent-mid:rgba(160,120,48,0.2); --accent-glow:rgba(160,120,48,0.04);
          --border:#e2dfd8; --border-subtle:#ebe8e2; --shadow:rgba(0,0,0,0.06);
          --quote-bg:rgba(160,120,48,0.04); --link-line:rgba(160,120,48,0.25);
          --grain:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");
          --newsletter-bg:#f5f3ee; --success-color:#4a9e56;
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        .garden { display:flex; height:100vh; background:var(--bg-primary); color:var(--text-primary); font-family:'Source Serif 4',Georgia,serif; overflow:hidden; }
        .garden::after { content:""; position:fixed; inset:0; background:var(--grain); pointer-events:none; z-index:9999; }

        /* ── Sidebar ── */
        .sidebar { width:272px; min-width:272px; background:var(--bg-secondary); border-right:1px solid var(--border); display:flex; flex-direction:column; transition:transform 0.4s var(--ease-out-expo); z-index:10; }
        .sidebar.collapsed { transform:translateX(-272px); }

        .sidebar-profile { padding:28px 22px 20px; border-bottom:1px solid var(--border); display:flex; flex-direction:column; align-items:center; text-align:center; }
        .profile-pic { width:72px; height:72px; border-radius:50%; background:var(--accent-mid); border:2.5px solid var(--accent); display:flex; align-items:center; justify-content:center; font-family:'Playfair Display',serif; font-size:28px; font-weight:800; color:var(--accent); margin-bottom:12px; overflow:hidden; }
        .profile-pic img { width:100%; height:100%; object-fit:cover; }
        .profile-name { font-family:'Playfair Display',serif; font-size:18px; font-weight:700; color:var(--text-primary); letter-spacing:-0.02em; }
        .profile-tag { font-family:'JetBrains Mono',monospace; font-size:10.5px; color:var(--text-muted); letter-spacing:0.03em; margin-top:4px; }

        .nav-area { flex:1; overflow-y:auto; padding:6px 10px; }
        .nav-section-row { display:flex; align-items:center; cursor:pointer; padding:10px 12px 4px; transition:color 0.15s; }
        .nav-section-row:hover .nav-group { color:var(--text-secondary); }
        .nav-group { font-family:'JetBrains Mono',monospace; font-size:9.5px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--text-muted); flex:1; transition:color 0.15s; }
        .nav-chevron { font-size:9px; color:var(--text-muted); transition:transform 0.2s; }
        .nav-chevron.open { transform:rotate(90deg); }
        .nav-items { overflow:hidden; transition:max-height 0.3s var(--ease-out-expo); }
        .nav-btn { display:flex; align-items:center; gap:10px; padding:7px 12px; border-radius:7px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--text-secondary); transition:all 0.15s; border:none; background:none; width:100%; text-align:left; }
        .nav-btn:hover { background:var(--bg-hover); color:var(--text-primary); }
        .nav-btn.active { background:var(--accent-soft); color:var(--accent); }
        .nav-icon { font-size:12px; opacity:0.5; width:16px; text-align:center; }
        .nav-btn.active .nav-icon { opacity:1; }

        .home-btn { margin:4px 10px 2px; }

        .sidebar-foot { padding:10px; border-top:1px solid var(--border); display:flex; gap:4px; }
        .foot-btn { flex:1; display:flex; align-items:center; justify-content:center; gap:5px; padding:8px; border-radius:7px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:10.5px; color:var(--text-muted); background:none; border:1px solid transparent; transition:all 0.2s; }
        .foot-btn:hover { background:var(--bg-hover); color:var(--text-primary); border-color:var(--border); }

        /* ── Main ── */
        .main { flex:1; display:flex; flex-direction:column; min-width:0; }
        .topbar { display:flex; align-items:center; padding:0 24px; height:50px; border-bottom:1px solid var(--border); flex-shrink:0; background:var(--bg-secondary); }
        .topbar-left { display:flex; align-items:center; gap:6px; }
        .tb { width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:6px; cursor:pointer; color:var(--text-muted); background:none; border:none; font-size:15px; transition:all 0.15s; }
        .tb:hover { background:var(--bg-hover); color:var(--text-primary); }
        .tb:disabled { opacity:0.2; cursor:default; } .tb:disabled:hover { background:none; }
        .crumb { font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--text-muted); margin-left:8px; }
        .crumb span { color:var(--text-secondary); }

        .content-layout { flex:1; display:flex; overflow:hidden; }
        .content-area { flex:1; overflow-y:auto; scroll-behavior:smooth; }
        .content-transition { transition:opacity 0.18s ease, transform 0.18s ease; }
        .content-transition.out { opacity:0; transform:translateY(8px); }
        .content-transition.in { opacity:1; transform:translateY(0); }
        .content-inner { max-width:720px; margin:0 auto; padding:48px 44px 40px; }

        /* ── TOC ── */
        .toc-panel { width:200px; min-width:200px; padding:24px 16px 24px 0; overflow-y:auto; border-left:1px solid var(--border); }
        .toc-title { font-family:'JetBrains Mono',monospace; font-size:9.5px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); padding:0 12px 10px; }
        .toc-item { display:block; padding:5px 12px; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-muted); cursor:pointer; border:none; background:none; width:100%; text-align:left; border-radius:4px; transition:all 0.15s; line-height:1.4; }
        .toc-item:hover { color:var(--accent); background:var(--accent-glow); }

        /* ── Typography ── */
        .md-h1 { font-family:'Playfair Display',serif; font-size:36px; font-weight:800; line-height:1.15; margin-bottom:10px; letter-spacing:-0.03em; color:var(--text-primary); }
        .md-h2 { font-family:'Playfair Display',serif; font-size:23px; font-weight:700; margin-top:36px; margin-bottom:10px; color:var(--text-primary); letter-spacing:-0.02em; }
        .md-h3 { font-family:'Playfair Display',serif; font-size:17px; font-weight:600; margin-top:24px; margin-bottom:6px; color:var(--text-primary); }
        .md-p { font-size:16.5px; line-height:1.78; color:var(--text-secondary); margin-bottom:2px; }
        .md-quote { border-left:3px solid var(--accent); padding:14px 22px; margin:20px 0; background:var(--quote-bg); border-radius:0 8px 8px 0; font-style:italic; color:var(--text-secondary); line-height:1.7; font-size:16px; }
        .md-hr { border:none; height:1px; background:var(--border); margin:32px 0; }
        .md-li { font-size:16.5px; line-height:1.78; color:var(--text-secondary); padding-left:22px; position:relative; margin-bottom:3px; }
        .md-li::before { content:""; position:absolute; left:7px; top:12px; width:5px; height:5px; border-radius:50%; background:var(--accent); opacity:0.6; }
        .md-arrow { font-size:16.5px; line-height:1.78; color:var(--text-secondary); padding-left:4px; margin-bottom:3px; }
        .md-spacer { height:8px; }
        .wiki-link { color:var(--accent); cursor:pointer; text-decoration:none; border-bottom:1.5px solid var(--link-line); transition:all 0.2s; font-weight:600; }
        .wiki-link:hover { border-bottom-color:var(--accent); }

        /* ── Backlinks ── */
        .backlinks { margin-top:48px; padding-top:24px; border-top:1px solid var(--border); }
        .backlinks-label { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px; }
        .backlink { display:inline-flex; align-items:center; gap:6px; padding:6px 14px; border-radius:6px; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--accent); background:var(--accent-soft); border:none; margin:0 6px 6px 0; transition:all 0.2s; }
        .backlink:hover { background:var(--accent-mid); }

        /* ── Newsletter ── */
        .page-footer { max-width:720px; margin:0 auto; padding:0 44px 80px; }
        .newsletter { background:var(--newsletter-bg); border:1px solid var(--border); border-radius:14px; padding:32px; margin-top:48px; text-align:center; }
        .newsletter-badge { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); margin-bottom:14px; }
        .newsletter-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--text-primary); margin-bottom:8px; }
        .newsletter-desc { font-size:14.5px; color:var(--text-muted); line-height:1.6; margin-bottom:20px; max-width:400px; margin-left:auto; margin-right:auto; }
        .newsletter-form { display:flex; gap:8px; max-width:380px; margin:0 auto; }
        .newsletter-input { flex:1; padding:10px 14px; border-radius:8px; border:1px solid var(--border); background:var(--bg-primary); font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text-primary); outline:none; transition:border-color 0.2s; }
        .newsletter-input:focus { border-color:var(--accent); }
        .newsletter-input::placeholder { color:var(--text-muted); }
        .newsletter-btn { padding:10px 22px; border-radius:8px; border:none; background:var(--accent); color:var(--bg-primary); font-family:'JetBrains Mono',monospace; font-size:12.5px; font-weight:600; cursor:pointer; transition:all 0.2s; white-space:nowrap; }
        .newsletter-btn:hover { opacity:0.9; transform:translateY(-1px); }
        .newsletter-success { font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--success-color); display:flex; align-items:center; justify-content:center; gap:8px; padding:12px; }
        .newsletter-check { font-size:18px; }

        /* ── Contact ── */
        .contact { text-align:center; margin-top:36px; }
        .contact-line { height:1px; background:var(--border); margin-bottom:28px; }
        .contact-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:var(--text-primary); margin-bottom:6px; }
        .contact-desc { font-size:14px; color:var(--text-muted); margin-bottom:16px; }
        .contact-links { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .contact-link { font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent); text-decoration:none; padding:8px 16px; border-radius:7px; border:1px solid var(--accent-mid); background:var(--accent-soft); transition:all 0.2s; }
        .contact-link:hover { background:var(--accent-mid); transform:translateY(-1px); }

        @media (max-width:900px) { .toc-panel { display:none; } }
        @media (max-width:768px) { .sidebar { position:absolute; height:100%; box-shadow:8px 0 32px var(--shadow); } .sidebar.collapsed { transform:translateX(-272px); } .content-inner { padding:28px 20px 40px; } .page-footer { padding:0 20px 60px; } .md-h1 { font-size:28px; } .newsletter-form { flex-direction:column; } }
      `}</style>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-profile">
          <div className="profile-pic">M</div>
          <div className="profile-name">Maxx Yung</div>
          <div className="profile-tag">builder · researcher · writer</div>
        </div>
        <nav className="nav-area">
          <div className="home-btn">
            <button className={`nav-btn ${currentNote === "welcome" ? "active" : ""}`} onClick={() => navigate("welcome")}><span className="nav-icon">✦</span> Welcome</button>
          </div>
          {sidebarSections.map(sec => (
            <div key={sec.key}>
              <div className="nav-section-row" onClick={() => toggleSection(sec.key)}>
                <div className="nav-group">{sec.label}</div>
                <span className={`nav-chevron ${expandedSections[sec.key] ? "open" : ""}`}>▶</span>
              </div>
              <div className="nav-items" style={{ maxHeight: expandedSections[sec.key] ? `${sec.items.length * 40}px` : 0 }}>
                {sec.items.map(item => (
                  <button key={item.id} className={`nav-btn ${currentNote === item.id ? "active" : ""}`} onClick={() => navigate(item.id)}>
                    <span className="nav-icon">{item.icon}</span> {item.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="sidebar-foot">
          <button className="foot-btn" onClick={() => setDark(!dark)}>{dark ? "☀ Light" : "☾ Dark"}</button>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <div className="topbar-left">
            <button className="tb" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
            <button className="tb" onClick={goBack} disabled={historyIdx <= 0}>←</button>
            <button className="tb" onClick={goForward} disabled={historyIdx >= history.length - 1}>→</button>
            <div className="crumb">{note.section && <><span>{note.section}</span> / </>}{note.title}</div>
          </div>
        </div>
        <div className="content-layout">
          <div className="content-area" ref={contentRef}>
            <div className={`content-inner content-transition ${transitioning ? "out" : "in"}`}>
              {renderContent(note.content, navigate)}
              {backlinks.length > 0 && (
                <div className="backlinks">
                  <div className="backlinks-label">Linked to this note</div>
                  {backlinks.map(bl => <button key={bl.id} className="backlink" onClick={() => navigate(bl.id)}>{bl.icon} {bl.title}</button>)}
                </div>
              )}
            </div>
            <PageFooter />
          </div>
          {headings.length > 2 && (
            <div className="toc-panel">
              <div className="toc-title">On this page</div>
              {headings.map(h => (
                <button key={h.id} className="toc-item" onClick={() => { document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>{h.text}</button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
