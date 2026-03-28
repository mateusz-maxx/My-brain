import { useState, useEffect, useRef, useCallback } from "react";

const NOTES = {
  welcome: {
    id: "welcome",
    title: "Welcome",
    icon: "✦",
    section: null,
    content: `# Welcome to My Digital Garden

Hello! Welcome to my corner of the internet — a place where I plant seeds of thought and let them grow.

This isn't a polished blog. It's a living document — my **second brain**. I write here to think, to remember, and to share what I've learned along the way.

## What You'll Find Here

→ [[advice]] — Opinions, principles, and hard-won wisdom  
→ [[wharton]] — What business school actually teaches you  
→ [[work]] — Lessons from building things in the real world  
→ [[books]] — Books that changed how I think  
→ [[accomplishments]] — A living record of milestones  

I write on topics I care about: **self-improvement**, **career building**, and the **mindset shifts** that compound over time.

Browse around. Click the links. Explore the [[graph]] if you want to see how everything connects.

> "The best time to plant a tree was 20 years ago. The second best time is now."

Happy exploring.`,
    connections: ["advice", "wharton", "work", "books", "accomplishments"],
  },
  advice: {
    id: "advice",
    title: "Advice",
    icon: "◇",
    section: "advice",
    content: `# Advice & Opinions

A running collection of principles I've picked up — from mentors, books, mistakes, and quiet observation. These aren't rules. They're lenses.

---

## On Compounding

Most people overestimate what they can do in a day and underestimate what they can do in a decade. The things worth doing are the ones that **compound**: reading, writing, building relationships, getting reps.

Related: [[books]] — many of these ideas were sharpened by what I've read.

---

## On Saying No

If it's not a clear yes, it's a no. Your time is the only non-renewable resource you have. Protect it like your life depends on it — because it does.

---

## On Learning in Public

Writing forces clarity. Publishing forces courage. The combination builds a reputation you can't buy. Start before you're ready. See [[wharton]] for how this played out for me.

---

## On Taking the Harder Path

The easy path is crowded. The hard path is lonely but interesting. When you look back, the hard days are the ones that defined you — not the comfortable ones.

See also: [[work]] — where I learned this the hard way.

---

## On Generalism vs. Specialism

The most interesting problems live at the intersection of fields. Be excellent at one thing (top 5%), then be good (top 10%) at several others. The combinations are where the magic happens.

---

*This page is a living document. I add to it whenever something clicks.*`,
    connections: ["welcome", "books", "wharton", "work"],
  },
  wharton: {
    id: "wharton",
    title: "Wharton Lessons",
    icon: "◈",
    section: "wharton",
    content: `# Wharton Lessons

What business school actually taught me — and what it didn't. These are the lessons that stuck.

---

## The Curriculum vs. The People

The textbooks are fine. The case studies are useful. But the real education is **the people**. You learn more from a 30-minute conversation with a classmate who built a company than from a semester of theory.

---

## Frameworks Are Maps, Not Territory

MBA programs hand you dozens of frameworks — Porter's Five Forces, BCG Matrix, SWOT. They're useful as thinking tools, but dangerous when mistaken for reality. The map is not the territory.

---

## Network Effects Are Real (And Personal)

The Wharton network isn't just a talking point. It's a compounding asset. But it only works if you invest in it genuinely — help first, ask second. See [[advice]] on compounding.

---

## The Confidence Gap

Half the people in the room are faking it. The other half are too busy worrying about themselves to notice. This was liberating to realize.

---

## What They Don't Teach

Resilience. Taste. When to quit. How to manage your own psychology. How to sit with ambiguity. The soft stuff is the hard stuff.

Related: [[work]] — where the soft stuff matters most.

---

*More lessons incoming as I reflect on the experience.*`,
    connections: ["welcome", "advice", "work"],
  },
  work: {
    id: "work",
    title: "Lessons from Work",
    icon: "⬡",
    section: "work",
    content: `# Lessons from Work

The real world doesn't grade on a curve. Here's what I've learned from building, shipping, and occasionally failing.

---

## Speed Wins

In most situations, a fast 80% solution beats a slow 100% one. Perfectionism is procrastination in a nice outfit. Ship it, learn, iterate.

---

## Communication Is the Meta-Skill

The best idea in the room means nothing if you can't articulate it. Writing clearly, presenting confidently, and listening actively — these aren't soft skills. They're the skill.

See [[wharton]] — where I first understood this.

---

## Your Manager Matters More Than Your Company

A great manager at a mediocre company will teach you more than a bad manager at a prestigious one. Optimize for who you'll learn from, not the logo on your resume.

---

## Ownership Changes Everything

The moment you stop thinking "that's not my job" is the moment you start growing. Take ownership of problems nobody asked you to solve. That's how careers accelerate.

Related: [[advice]] — on taking the harder path.

---

## Politics Are Inevitable, But Optional to Play

Every organization has politics. You don't have to play the game, but you need to understand it. Naiveté isn't virtue — it's a liability.

---

## Rest Is Productive

Burnout doesn't make you a hero. The best work comes from rested minds. Protect your recovery like you protect your deadlines.

See [[books]] for books that shaped my thinking on this.

---

*I'll keep adding to this as I accumulate more scar tissue.*`,
    connections: ["welcome", "wharton", "advice", "books"],
  },
  books: {
    id: "books",
    title: "Book Shelf",
    icon: "▢",
    section: "books",
    content: `# Book Shelf

Books that rewired my thinking. I don't list books I didn't finish or didn't enjoy — life's too short. These earned their place.

---

## Currently Reading
- *Thinking in Systems* — Donella Meadows
- *Working Backwards* — Colin Bryar & Bill Carr

---

## Favorites (All-Time)

**Mindset & Self-Improvement**
- *Atomic Habits* — James Clear → The compounding chapter alone is worth the read. See [[advice]].
- *Meditations* — Marcus Aurelius → Timeless. I re-read sections monthly.
- *The Almanack of Naval Ravikant* — Eric Jorgenson → Distilled wisdom on wealth and happiness.

**Business & Career**
- *Zero to One* — Peter Thiel → Changed how I think about competition.
- *The Hard Thing About Hard Things* — Ben Horowitz → The most honest book about leadership. See [[work]].
- *High Output Management* — Andy Grove → A masterclass in operating.

**Thinking & Writing**
- *On Writing Well* — William Zinsser → Made me a better writer overnight.
- *Poor Charlie's Almanack* — Charles Munger → Mental models for everything.
- *Range* — David Epstein → The case for being a generalist. Connects to [[advice]] on generalism.

---

## How I Read

I read ~30 minutes before bed every night. I take notes in Obsidian and try to connect ideas across books. The best books are the ones that change what you *do*, not just what you *think*.

---

*This shelf grows. Check back.*`,
    connections: ["welcome", "advice", "work"],
  },
  accomplishments: {
    id: "accomplishments",
    title: "Accomplishments",
    icon: "△",
    section: "accomplishments",
    content: `# Accomplishments

A living resume. Not to brag — but to track, reflect, and remember what I've built.

---

## Education
- **Wharton School, University of Pennsylvania** — MBA
  - Key coursework: Strategy, Operations, Entrepreneurship
  - See [[wharton]] for what I actually learned

---

## Career Highlights
- [Your current/recent role and key achievements]
- [Previous role — what you shipped, built, or led]
- [Earlier career — foundational experiences]

See [[work]] for the lessons behind these milestones.

---

## Projects & Side Quests
- **This Digital Garden** — Built from scratch. You're looking at it.
- [Side project #1 — what it is and what you learned]
- [Side project #2]

---

## Writing & Ideas
- Published thoughts on self-improvement and career strategy
- See [[advice]] for my collected principles

---

## What's Next
- [Goals you're working toward]
- [Skills you're developing]
- [Things you're exploring]

---

*I update this whenever something meaningful happens. No padding, no fluff.*`,
    connections: ["welcome", "wharton", "work", "advice"],
  },
};

// ── Graph View Component ──
function GraphView({ notes, currentNote, onNavigate }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const [hovered, setHovered] = useState(null);

  const initNodes = useCallback(() => {
    const keys = Object.keys(notes);
    const cx = 300, cy = 200;
    return keys.map((k, i) => {
      const angle = (i / keys.length) * Math.PI * 2 - Math.PI / 2;
      const r = k === "welcome" ? 0 : 120 + Math.random() * 40;
      return {
        id: k,
        x: cx + (k === "welcome" ? 0 : Math.cos(angle) * r),
        y: cy + (k === "welcome" ? 0 : Math.sin(angle) * r),
        vx: 0,
        vy: 0,
        label: notes[k].title,
      };
    });
  }, [notes]);

  useEffect(() => {
    nodesRef.current = initNodes();
  }, [initNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 600 * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    const edges = [];
    Object.values(notes).forEach((n) => {
      n.connections.forEach((c) => {
        const pair = [n.id, c].sort().join("-");
        if (!edges.find((e) => e.pair === pair)) {
          edges.push({ pair, from: n.id, to: c });
        }
      });
    });

    let time = 0;
    const draw = () => {
      time += 0.008;
      const nodes = nodesRef.current;
      const style = getComputedStyle(document.documentElement);
      const bg = style.getPropertyValue("--bg-primary").trim();
      const textCol = style.getPropertyValue("--text-primary").trim();
      const mutedCol = style.getPropertyValue("--text-muted").trim();
      const accentCol = style.getPropertyValue("--accent").trim();

      ctx.clearRect(0, 0, 600, 400);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 600, 400);

      edges.forEach((e) => {
        const a = nodes.find((n) => n.id === e.from);
        const b = nodes.find((n) => n.id === e.to);
        if (!a || !b) return;
        const isActive = currentNote === e.from || currentNote === e.to;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = isActive ? accentCol : mutedCol;
        ctx.globalAlpha = isActive ? 0.6 : 0.15;
        ctx.lineWidth = isActive ? 1.5 : 1;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      nodes.forEach((node) => {
        const isCurrent = node.id === currentNote;
        const isHov = node.id === hovered;
        const isConnected = notes[currentNote]?.connections.includes(node.id);
        const baseR = node.id === "welcome" ? 8 : 5;
        const pulse = isCurrent ? Math.sin(time * 3) * 2 : 0;
        const r = baseR + pulse + (isHov ? 3 : 0);

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        if (isCurrent) {
          ctx.fillStyle = accentCol;
          ctx.shadowColor = accentCol;
          ctx.shadowBlur = 12;
        } else if (isConnected) {
          ctx.fillStyle = accentCol;
          ctx.globalAlpha = 0.7;
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = mutedCol;
          ctx.globalAlpha = 0.4;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        ctx.font = `${isCurrent || isHov ? "600" : "400"} 11px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = isCurrent || isConnected ? textCol : mutedCol;
        ctx.globalAlpha = isCurrent || isConnected || isHov ? 1 : 0.5;
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + r + 14);
        ctx.globalAlpha = 1;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [notes, currentNote, hovered]);

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (600 / rect.width);
    const y = (e.clientY - rect.top) * (400 / rect.height);
    const clicked = nodesRef.current.find((n) => Math.hypot(n.x - x, n.y - y) < 20);
    if (clicked) onNavigate(clicked.id);
  };

  const handleMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (600 / rect.width);
    const y = (e.clientY - rect.top) * (400 / rect.height);
    const h = nodesRef.current.find((n) => Math.hypot(n.x - x, n.y - y) < 20);
    setHovered(h ? h.id : null);
    canvasRef.current.style.cursor = h ? "pointer" : "default";
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      onMouseMove={handleMove}
      style={{ width: "100%", maxWidth: 600, height: "auto", aspectRatio: "3/2", borderRadius: 8, border: "1px solid var(--border)" }}
    />
  );
}

// ── Markdown-ish Renderer ──
function renderContent(text, onNavigate) {
  const lines = text.split("\n");
  const elements = [];

  lines.forEach((line, i) => {
    const parseLine = (str) => {
      const parts = [];
      let last = 0;
      const reg = /\[\[(\w+)\]\]/g;
      let m;
      while ((m = reg.exec(str)) !== null) {
        if (m.index > last) parts.push(renderInline(str.slice(last, m.index)));
        const id = m[1];
        const note = NOTES[id];
        parts.push(
          <a key={`${i}-${m.index}`} onClick={() => onNavigate(id)} className="wiki-link">
            {note ? note.title : id}
          </a>
        );
        last = reg.lastIndex;
      }
      if (last < str.length) parts.push(renderInline(str.slice(last)));
      return parts;
    };

    const renderInline = (s) => {
      const parts = [];
      let remaining = s;
      let key = 0;
      while (remaining.length > 0) {
        const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
        const italicMatch = remaining.match(/\*(.+?)\*/);
        const codeMatch = remaining.match(/`(.+?)`/);

        let first = null;
        let firstIdx = remaining.length;

        if (boldMatch && boldMatch.index < firstIdx) { first = "bold"; firstIdx = boldMatch.index; }
        if (italicMatch && italicMatch.index < firstIdx) { first = "italic"; firstIdx = italicMatch.index; }
        if (codeMatch && codeMatch.index < firstIdx) { first = "code"; firstIdx = codeMatch.index; }

        if (!first) { parts.push(remaining); break; }

        if (firstIdx > 0) parts.push(remaining.slice(0, firstIdx));

        if (first === "bold") {
          parts.push(<strong key={key++}>{boldMatch[1]}</strong>);
          remaining = remaining.slice(firstIdx + boldMatch[0].length);
        } else if (first === "italic") {
          parts.push(<em key={key++}>{italicMatch[1]}</em>);
          remaining = remaining.slice(firstIdx + italicMatch[0].length);
        } else if (first === "code") {
          parts.push(<code key={key++} className="inline-code">{codeMatch[1]}</code>);
          remaining = remaining.slice(firstIdx + codeMatch[0].length);
        }
      }
      return parts;
    };

    if (line.startsWith("# ")) {
      elements.push(<h1 key={i} className="md-h1">{parseLine(line.slice(2))}</h1>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="md-h2">{parseLine(line.slice(3))}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="md-h3">{parseLine(line.slice(4))}</h3>);
    } else if (line.startsWith("> ")) {
      elements.push(<blockquote key={i} className="md-quote">{parseLine(line.slice(2))}</blockquote>);
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="md-hr" />);
    } else if (line.startsWith("- ")) {
      elements.push(<div key={i} className="md-li">{parseLine(line.slice(2))}</div>);
    } else if (line.startsWith("→ ")) {
      elements.push(<div key={i} className="md-arrow">{parseLine(line.slice(2))}</div>);
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="md-spacer" />);
    } else {
      elements.push(<p key={i} className="md-p">{parseLine(line)}</p>);
    }
  });

  return elements;
}

// ── Main App ──
export default function DigitalGarden() {
  const [currentNote, setCurrentNote] = useState("welcome");
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showGraph, setShowGraph] = useState(false);
  const [history, setHistory] = useState(["welcome"]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const contentRef = useRef(null);

  const navigate = (id) => {
    if (!NOTES[id]) return;
    const newHistory = [...history.slice(0, historyIdx + 1), id];
    setHistory(newHistory);
    setHistoryIdx(newHistory.length - 1);
    setCurrentNote(id);
    contentRef.current?.scrollTo(0, 0);
  };

  const goBack = () => {
    if (historyIdx > 0) {
      setHistoryIdx(historyIdx - 1);
      setCurrentNote(history[historyIdx - 1]);
    }
  };

  const goForward = () => {
    if (historyIdx < history.length - 1) {
      setHistoryIdx(historyIdx + 1);
      setCurrentNote(history[historyIdx + 1]);
    }
  };

  const note = NOTES[currentNote];
  const backlinks = Object.values(NOTES).filter((n) => n.connections.includes(currentNote) && n.id !== currentNote);

  const themeClass = dark ? "theme-dark" : "theme-light";

  return (
    <div className={`garden ${themeClass}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap');

        .theme-dark {
          --bg-primary: #1a1a1e;
          --bg-secondary: #141416;
          --bg-hover: #252529;
          --bg-active: #2a2a30;
          --text-primary: #dcd7cd;
          --text-secondary: #a09a8e;
          --text-muted: #5a564e;
          --accent: #c4a882;
          --accent-dim: rgba(196,168,130,0.12);
          --border: #2a2a2e;
          --border-light: #222226;
          --shadow: rgba(0,0,0,0.4);
          --quote-bg: rgba(196,168,130,0.05);
          --link-decoration: rgba(196,168,130,0.3);
        }

        .theme-light {
          --bg-primary: #faf8f5;
          --bg-secondary: #f0ede8;
          --bg-hover: #e8e5df;
          --bg-active: #e0ddd6;
          --text-primary: #2a2520;
          --text-secondary: #6b6358;
          --text-muted: #a09888;
          --accent: #8b6f4e;
          --accent-dim: rgba(139,111,78,0.1);
          --border: #ddd8d0;
          --border-light: #e8e4dc;
          --shadow: rgba(0,0,0,0.08);
          --quote-bg: rgba(139,111,78,0.05);
          --link-decoration: rgba(139,111,78,0.3);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .garden {
          display: flex;
          height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Source Serif 4', Georgia, serif;
          transition: background 0.3s, color 0.3s;
          overflow: hidden;
        }

        /* ── Sidebar ── */
        .sidebar {
          width: 260px;
          min-width: 260px;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          transition: margin-left 0.3s ease, opacity 0.3s ease;
          z-index: 10;
        }

        .sidebar.collapsed {
          margin-left: -260px;
          opacity: 0;
          pointer-events: none;
        }

        .sidebar-header {
          padding: 24px 20px 16px;
          border-bottom: 1px solid var(--border);
        }

        .site-name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .site-tagline {
          font-size: 12px;
          color: var(--text-muted);
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 400;
        }

        .nav-section {
          padding: 12px 10px;
          flex: 1;
          overflow-y: auto;
        }

        .nav-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 8px 10px 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--text-secondary);
          transition: all 0.15s;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover { background: var(--bg-hover); color: var(--text-primary); }
        .nav-item.active { background: var(--accent-dim); color: var(--accent); }
        .nav-item .icon { font-size: 14px; opacity: 0.6; width: 18px; text-align: center; }
        .nav-item.active .icon { opacity: 1; }

        .sidebar-footer {
          padding: 12px 10px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 4px;
        }

        .footer-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: var(--text-muted);
          background: none;
          border: 1px solid transparent;
          transition: all 0.15s;
        }

        .footer-btn:hover { background: var(--bg-hover); color: var(--text-primary); border-color: var(--border); }
        .footer-btn.active { background: var(--accent-dim); color: var(--accent); border-color: var(--accent); }

        /* ── Main Content ── */
        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          height: 48px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }

        .topbar-left { display: flex; align-items: center; gap: 8px; }

        .top-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
          color: var(--text-muted);
          background: none;
          border: none;
          font-size: 16px;
          transition: all 0.15s;
        }

        .top-btn:hover { background: var(--bg-hover); color: var(--text-primary); }
        .top-btn:disabled { opacity: 0.25; cursor: default; }
        .top-btn:disabled:hover { background: none; color: var(--text-muted); }

        .breadcrumb {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          margin-left: 8px;
        }

        .breadcrumb span { color: var(--text-secondary); }

        .content-area {
          flex: 1;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .content-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: 48px 40px 120px;
        }

        /* ── Markdown Styles ── */
        .md-h1 {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .md-h2 {
          font-size: 22px;
          font-weight: 600;
          margin-top: 32px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .md-h3 {
          font-size: 17px;
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 6px;
          color: var(--text-primary);
        }

        .md-p {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 2px;
        }

        .md-quote {
          border-left: 2px solid var(--accent);
          padding: 12px 20px;
          margin: 16px 0;
          background: var(--quote-bg);
          border-radius: 0 6px 6px 0;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .md-hr {
          border: none;
          height: 1px;
          background: var(--border);
          margin: 28px 0;
        }

        .md-li {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-secondary);
          padding-left: 20px;
          position: relative;
          margin-bottom: 2px;
        }

        .md-li::before {
          content: "·";
          position: absolute;
          left: 6px;
          color: var(--accent);
          font-weight: bold;
        }

        .md-arrow {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-secondary);
          padding-left: 4px;
          margin-bottom: 2px;
        }

        .md-spacer { height: 8px; }

        .wiki-link {
          color: var(--accent);
          cursor: pointer;
          text-decoration: none;
          border-bottom: 1px solid var(--link-decoration);
          transition: all 0.15s;
          font-weight: 500;
        }

        .wiki-link:hover {
          border-bottom-color: var(--accent);
        }

        .inline-code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          background: var(--accent-dim);
          padding: 2px 6px;
          border-radius: 3px;
          color: var(--accent);
        }

        /* ── Backlinks ── */
        .backlinks {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .backlinks-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .backlink-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 5px;
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          background: var(--accent-dim);
          border: none;
          margin: 0 6px 6px 0;
          transition: all 0.15s;
        }

        .backlink-item:hover { background: var(--bg-hover); }

        /* ── Graph Panel ── */
        .graph-panel {
          padding: 24px;
          border-top: 1px solid var(--border);
          background: var(--bg-secondary);
        }

        .graph-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .sidebar { position: absolute; height: 100%; box-shadow: 4px 0 24px var(--shadow); }
          .sidebar.collapsed { margin-left: -260px; }
          .content-inner { padding: 32px 20px 100px; }
          .md-h1 { font-size: 26px; }
        }
      `}</style>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-header">
          <div className="site-name">✦ Your Name</div>
          <div className="site-tagline">digital garden</div>
        </div>
        <nav className="nav-section">
          <div className="nav-label">Pages</div>
          {Object.values(NOTES).map((n) => (
            <button key={n.id} className={`nav-item ${currentNote === n.id ? "active" : ""}`} onClick={() => navigate(n.id)}>
              <span className="icon">{n.icon}</span>
              {n.title}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className={`footer-btn ${showGraph ? "active" : ""}`} onClick={() => setShowGraph(!showGraph)}>
            {showGraph ? "◉" : "○"} Graph
          </button>
          <button className="footer-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀" : "☾"} {dark ? "Light" : "Dark"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <div className="topbar-left">
            <button className="top-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <button className="top-btn" onClick={goBack} disabled={historyIdx <= 0}>←</button>
            <button className="top-btn" onClick={goForward} disabled={historyIdx >= history.length - 1}>→</button>
            <div className="breadcrumb">
              {note.section && <><span>garden</span> / </>}
              {note.title}
            </div>
          </div>
        </div>

        <div className="content-area" ref={contentRef}>
          <div className="content-inner">
            {renderContent(note.content, navigate)}

            {backlinks.length > 0 && (
              <div className="backlinks">
                <div className="backlinks-title">Linked to this note</div>
                {backlinks.map((bl) => (
                  <button key={bl.id} className="backlink-item" onClick={() => navigate(bl.id)}>
                    {bl.icon} {bl.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {showGraph && (
            <div className="graph-panel">
              <div className="graph-title">Graph View</div>
              <GraphView notes={NOTES} currentNote={currentNote} onNavigate={navigate} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
