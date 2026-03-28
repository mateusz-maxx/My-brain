import { useState, useEffect, useRef, useCallback } from "react";

const NOTES = {
  welcome: {
    id: "welcome",
    title: "Welcome",
    icon: "✦",
    section: null,
    content: `# Welcome!

Hello! Welcome to my digital garden. I write on Obsidian and sometimes publish them here.

## Lists

Here's all the lists I have, but here are the most useful ones:
→ [[advice]] — Advice I've collected
→ [[apps]] — Productivity apps I recommend
→ [[email]] — Email advice
→ [[books]] — Books I track and recommend

## Venture

My company memos for Contrary Research.
→ [[venture]] — I write about venture sometimes

## Blog

I mostly write random personal blogs though.
→ [[blog]] — Personal essays and thoughts

I read a lot of books, which I track in [[books]]. Here are my favorite books there.`,
    connections: ["advice", "apps", "email", "books", "venture", "blog"],
  },
  advice: {
    id: "advice",
    title: "List of Advice",
    icon: "◇",
    section: "lists",
    content: `# List of Advice

[Paste your full advice content from brain.maxxyung.com/lists/advice here]

## Placeholder sections to replace:

### On Compounding
Compounding growth is said to be the 8th wonder of the world. Find and leverage compound interest patterns everywhere.

Compounding activities: Reading, Writing on the internet, Altruistically helping others, Exercising, Sleeping for at least 7 hours.

### On Generalism vs. Specialism
As problems in the world grow in complexity, generality is more important than specialty. Aim to be the best at a field (top 5%). At that point, diminishing returns kick in, and focus on being good (top 10%) at several other fields.

### On Luck Surface Area
Writing online is one way to expand your luck potential. Take risks. Do what you're afraid of. Help others. Talk with professionals. Travel for conferences. Do hackathons. Connect people with other people.

### On Saying No
If anything isn't a fuck yeah, it's a no. Be open for a hard life-changing opportunity rather than filling your time with easier and smaller ones.

### On University
Spend as little time to get ~3.6 GPA and spend the rest of your time in research or independent projects. Blog. Make videos. Program random things.

### On Networking
Real networks are built from genuine, non-networking intentions. AKA, make friends.

### On the Hard Path
Do things not because they are easy, but because they are hard. When you look back, it is the hardest days that define you, not the easy or ordinary days.

---

*Replace this with the full content from the original site.*`,
    connections: ["welcome", "books", "blog", "venture"],
  },
  apps: {
    id: "apps",
    title: "List of Productivity Apps",
    icon: "⬡",
    section: "lists",
    content: `# List of Productivity Apps

[Paste your full apps list from brain.maxxyung.com/lists/apps here]

## Placeholder — apps mentioned on the original site:

- **Raindrop** — Bookmarks, references, and cool websites
- **DeepL** — Better translations than Google
- **AltTab** — Windows-style alt-tabbing for MacOS
- **BatFi** — Limit MacOS battery to 80% for longevity
- **Draw.io** — Free collaborative diagramming software
- **PDFGear** — All-in-one PDF tool
- **Latest** — Keeps all your apps updated
- **SoulSeekQT** — P2P hi-res music downloads
- **Grammarly** — Grammar and spell checker
- **HandBrake** — Video format conversion
- **AppCleaner** — Thorough app uninstaller
- **MacWhisper** — Audio transcription
- **Command X** — Cut and paste files on Mac like Windows

---

*Replace this with the full content from the original site.*`,
    connections: ["welcome", "advice"],
  },
  email: {
    id: "email",
    title: "List of Email Advice",
    icon: "▣",
    section: "lists",
    content: `# List of Email Advice

[Paste your full email advice from brain.maxxyung.com/lists/email here]

## Placeholder — key points from the original:

- Frame questions so the responder only needs a "Yes or no"
- Reduce friction for the person replying
- Batch check your emails — once an hour for urgent, set time for the rest
- Any email you've written twice to answer someone should be a blog post

---

*Replace this with the full content from the original site.*`,
    connections: ["welcome", "advice"],
  },
  books: {
    id: "books",
    title: "Book Shelf",
    icon: "▢",
    section: "lists",
    content: `# Book Shelf

[Paste your full book list and reviews from brain.maxxyung.com here]

I read a lot of books and track them here. Below are my favorites.

## How to use this page
List your books with short takes on each one, organized by category. The original site links to individual book notes — you can add those as wiki-links like [[bookname]] once you create separate note pages for them.

---

*Replace this with the full content from the original site.*`,
    connections: ["welcome", "advice", "blog"],
  },
  venture: {
    id: "venture",
    title: "Venture Writing",
    icon: "◈",
    section: "venture",
    content: `# Venture Writing

Company memos for Contrary Research and other venture thoughts.

## Company Memos
[Paste links/content for your Contrary Research memos here]

Written about: Cerebras Systems, Lightmatter, Varda, Groq, PsiQuantum, SpaceX, and a deep-dive on Intel (featured on the Arena Magazine and the TBPN podcast).

## Venture Essays
[Add your venture blog posts here — each one can be its own note page linked with [[wikilinks]]]

---

*Replace this with the full content from the original site.*`,
    connections: ["welcome", "blog"],
  },
  blog: {
    id: "blog",
    title: "Personal Blog",
    icon: "◆",
    section: "blog",
    content: `# Personal Blog

Random personal blogs and essays.

## Posts
→ [[countersignaling]] — On status signaling, Dyson, Hermès, and consumer psychology
→ [Add more blog posts as separate notes]

---

*Add your blog post index here. Each post can be its own note linked with [[wikilinks]].*`,
    connections: ["welcome", "advice", "venture", "countersignaling"],
  },
  countersignaling: {
    id: "countersignaling",
    title: "Countersignaling",
    icon: "◇",
    section: "blog",
    content: `# Countersignaling

[Paste your full Countersignaling essay from brain.maxxyung.com/blog/personal/countersignaling here]

## Placeholder summary:

This essay explores consumer psychology, status signaling vs. countersignaling, and why brands like Dyson and Hermès succeed despite seemingly irrational consumer behavior.

Key ideas:
- Humans are innately status hoarders and observers
- "Luxury" brands have scaled themselves out of true scarcity
- Depending on the person, one tends to either signal or countersignal their status
- The biggest skill in consumer startups is good taste

---

*Replace this with the full essay from the original site.*`,
    connections: ["blog", "advice"],
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
      return { id: k, x: cx + (k === "welcome" ? 0 : Math.cos(angle) * r), y: cy + (k === "welcome" ? 0 : Math.sin(angle) * r), label: notes[k].title };
    });
  }, [notes]);

  useEffect(() => { nodesRef.current = initNodes(); }, [initNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 600 * dpr; canvas.height = 400 * dpr; ctx.scale(dpr, dpr);
    const edges = [];
    Object.values(notes).forEach(n => { n.connections.forEach(c => { const pair = [n.id, c].sort().join("-"); if (!edges.find(e => e.pair === pair)) edges.push({ pair, from: n.id, to: c }); }); });
    let time = 0;
    const draw = () => {
      time += 0.008;
      const nodes = nodesRef.current;
      const s = getComputedStyle(document.documentElement);
      const bg = s.getPropertyValue("--bg-primary").trim(), textCol = s.getPropertyValue("--text-primary").trim(), mutedCol = s.getPropertyValue("--text-muted").trim(), accentCol = s.getPropertyValue("--accent").trim();
      ctx.clearRect(0, 0, 600, 400); ctx.fillStyle = bg; ctx.fillRect(0, 0, 600, 400);
      edges.forEach(e => {
        const a = nodes.find(n => n.id === e.from), b = nodes.find(n => n.id === e.to);
        if (!a || !b) return;
        const isActive = currentNote === e.from || currentNote === e.to;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = isActive ? accentCol : mutedCol; ctx.globalAlpha = isActive ? 0.6 : 0.15; ctx.lineWidth = isActive ? 1.5 : 1; ctx.stroke(); ctx.globalAlpha = 1;
      });
      nodes.forEach(node => {
        const isCurrent = node.id === currentNote, isHov = node.id === hovered, isConnected = notes[currentNote]?.connections.includes(node.id);
        const baseR = node.id === "welcome" ? 8 : 5, pulse = isCurrent ? Math.sin(time * 3) * 2 : 0, r = baseR + pulse + (isHov ? 3 : 0);
        ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        if (isCurrent) { ctx.fillStyle = accentCol; ctx.shadowColor = accentCol; ctx.shadowBlur = 12; }
        else if (isConnected) { ctx.fillStyle = accentCol; ctx.globalAlpha = 0.7; ctx.shadowBlur = 0; }
        else { ctx.fillStyle = mutedCol; ctx.globalAlpha = 0.4; ctx.shadowBlur = 0; }
        ctx.fill(); ctx.globalAlpha = 1; ctx.shadowBlur = 0;
        ctx.font = `${isCurrent || isHov ? "600" : "400"} 11px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = isCurrent || isConnected ? textCol : mutedCol;
        ctx.globalAlpha = isCurrent || isConnected || isHov ? 1 : 0.5;
        ctx.textAlign = "center"; ctx.fillText(node.label, node.x, node.y + r + 14); ctx.globalAlpha = 1;
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [notes, currentNote, hovered]);

  const getNode = (e) => { const rect = canvasRef.current.getBoundingClientRect(); const x = (e.clientX - rect.left) * (600 / rect.width), y = (e.clientY - rect.top) * (400 / rect.height); return nodesRef.current.find(n => Math.hypot(n.x - x, n.y - y) < 20); };

  return <canvas ref={canvasRef} onClick={e => { const n = getNode(e); if (n) onNavigate(n.id); }} onMouseMove={e => { const n = getNode(e); setHovered(n?.id || null); canvasRef.current.style.cursor = n ? "pointer" : "default"; }} style={{ width: "100%", maxWidth: 600, height: "auto", aspectRatio: "3/2", borderRadius: 8, border: "1px solid var(--border)" }} />;
}

// ── Markdown Renderer ──
function renderContent(text, onNavigate) {
  return text.split("\n").map((line, i) => {
    const parseLine = (str) => {
      const parts = []; let last = 0; const reg = /\[\[(\w+)\]\]/g; let m;
      while ((m = reg.exec(str)) !== null) {
        if (m.index > last) parts.push(renderInline(str.slice(last, m.index)));
        const id = m[1], note = NOTES[id];
        parts.push(<a key={`${i}-${m.index}`} onClick={() => onNavigate(id)} className="wiki-link">{note ? note.title : id}</a>);
        last = reg.lastIndex;
      }
      if (last < str.length) parts.push(renderInline(str.slice(last)));
      return parts;
    };
    const renderInline = (s) => {
      const parts = []; let r = s, k = 0;
      while (r.length > 0) {
        const b = r.match(/\*\*(.+?)\*\*/), it = r.match(/\*(.+?)\*/), c = r.match(/`(.+?)`/);
        let first = null, idx = r.length;
        if (b && b.index < idx) { first = "b"; idx = b.index; }
        if (it && it.index < idx) { first = "i"; idx = it.index; }
        if (c && c.index < idx) { first = "c"; idx = c.index; }
        if (!first) { parts.push(r); break; }
        if (idx > 0) parts.push(r.slice(0, idx));
        if (first === "b") { parts.push(<strong key={k++}>{b[1]}</strong>); r = r.slice(idx + b[0].length); }
        else if (first === "i") { parts.push(<em key={k++}>{it[1]}</em>); r = r.slice(idx + it[0].length); }
        else { parts.push(<code key={k++} className="inline-code">{c[1]}</code>); r = r.slice(idx + c[0].length); }
      }
      return parts;
    };
    if (line.startsWith("# ")) return <h1 key={i} className="md-h1">{parseLine(line.slice(2))}</h1>;
    if (line.startsWith("## ")) return <h2 key={i} className="md-h2">{parseLine(line.slice(3))}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} className="md-h3">{parseLine(line.slice(4))}</h3>;
    if (line.startsWith("> ")) return <blockquote key={i} className="md-quote">{parseLine(line.slice(2))}</blockquote>;
    if (line.startsWith("---")) return <hr key={i} className="md-hr" />;
    if (line.startsWith("- ")) return <div key={i} className="md-li">{parseLine(line.slice(2))}</div>;
    if (line.startsWith("→ ")) return <div key={i} className="md-arrow">{parseLine(line.slice(2))}</div>;
    if (line.trim() === "") return <div key={i} className="md-spacer" />;
    return <p key={i} className="md-p">{parseLine(line)}</p>;
  });
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
    const nh = [...history.slice(0, historyIdx + 1), id];
    setHistory(nh); setHistoryIdx(nh.length - 1); setCurrentNote(id);
    contentRef.current?.scrollTo(0, 0);
  };
  const goBack = () => { if (historyIdx > 0) { setHistoryIdx(historyIdx - 1); setCurrentNote(history[historyIdx - 1]); } };
  const goForward = () => { if (historyIdx < history.length - 1) { setHistoryIdx(historyIdx + 1); setCurrentNote(history[historyIdx + 1]); } };

  const note = NOTES[currentNote];
  const backlinks = Object.values(NOTES).filter(n => n.connections.includes(currentNote) && n.id !== currentNote);

  return (
    <div className={`garden ${dark ? "theme-dark" : "theme-light"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap');
        .theme-dark { --bg-primary:#1a1a1e; --bg-secondary:#141416; --bg-hover:#252529; --text-primary:#dcd7cd; --text-secondary:#a09a8e; --text-muted:#5a564e; --accent:#c4a882; --accent-dim:rgba(196,168,130,0.12); --border:#2a2a2e; --shadow:rgba(0,0,0,0.4); --quote-bg:rgba(196,168,130,0.05); --link-decoration:rgba(196,168,130,0.3); }
        .theme-light { --bg-primary:#faf8f5; --bg-secondary:#f0ede8; --bg-hover:#e8e5df; --text-primary:#2a2520; --text-secondary:#6b6358; --text-muted:#a09888; --accent:#8b6f4e; --accent-dim:rgba(139,111,78,0.1); --border:#ddd8d0; --shadow:rgba(0,0,0,0.08); --quote-bg:rgba(139,111,78,0.05); --link-decoration:rgba(139,111,78,0.3); }
        * { margin:0; padding:0; box-sizing:border-box; }
        .garden { display:flex; height:100vh; background:var(--bg-primary); color:var(--text-primary); font-family:'Source Serif 4',Georgia,serif; transition:background 0.3s,color 0.3s; overflow:hidden; }
        .sidebar { width:260px; min-width:260px; background:var(--bg-secondary); border-right:1px solid var(--border); display:flex; flex-direction:column; transition:margin-left 0.3s ease,opacity 0.3s ease; z-index:10; }
        .sidebar.collapsed { margin-left:-260px; opacity:0; pointer-events:none; }
        .sidebar-header { padding:24px 20px 16px; border-bottom:1px solid var(--border); }
        .site-name { font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent); margin-bottom:4px; }
        .site-tagline { font-size:12px; color:var(--text-muted); font-family:'IBM Plex Mono',monospace; }
        .nav-section { padding:12px 10px; flex:1; overflow-y:auto; }
        .nav-label { font-family:'IBM Plex Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); padding:8px 10px 6px; }
        .nav-item { display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:13px; color:var(--text-secondary); transition:all 0.15s; border:none; background:none; width:100%; text-align:left; }
        .nav-item:hover { background:var(--bg-hover); color:var(--text-primary); }
        .nav-item.active { background:var(--accent-dim); color:var(--accent); }
        .nav-item .icon { font-size:14px; opacity:0.6; width:18px; text-align:center; }
        .nav-item.active .icon { opacity:1; }
        .sidebar-footer { padding:12px 10px; border-top:1px solid var(--border); display:flex; gap:4px; }
        .footer-btn { flex:1; display:flex; align-items:center; justify-content:center; gap:6px; padding:8px; border-radius:6px; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-muted); background:none; border:1px solid transparent; transition:all 0.15s; }
        .footer-btn:hover { background:var(--bg-hover); color:var(--text-primary); border-color:var(--border); }
        .footer-btn.active { background:var(--accent-dim); color:var(--accent); border-color:var(--accent); }
        .main { flex:1; display:flex; flex-direction:column; min-width:0; }
        .topbar { display:flex; align-items:center; justify-content:space-between; padding:0 24px; height:48px; border-bottom:1px solid var(--border); flex-shrink:0; }
        .topbar-left { display:flex; align-items:center; gap:8px; }
        .top-btn { width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:6px; cursor:pointer; color:var(--text-muted); background:none; border:none; font-size:16px; transition:all 0.15s; }
        .top-btn:hover { background:var(--bg-hover); color:var(--text-primary); }
        .top-btn:disabled { opacity:0.25; cursor:default; }
        .top-btn:disabled:hover { background:none; color:var(--text-muted); }
        .breadcrumb { font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--text-muted); margin-left:8px; }
        .breadcrumb span { color:var(--text-secondary); }
        .content-area { flex:1; overflow-y:auto; scroll-behavior:smooth; }
        .content-inner { max-width:720px; margin:0 auto; padding:48px 40px 120px; }
        .md-h1 { font-size:32px; font-weight:700; line-height:1.25; margin-bottom:8px; letter-spacing:-0.02em; color:var(--text-primary); }
        .md-h2 { font-size:22px; font-weight:600; margin-top:32px; margin-bottom:8px; color:var(--text-primary); }
        .md-h3 { font-size:17px; font-weight:600; margin-top:24px; margin-bottom:6px; color:var(--text-primary); }
        .md-p { font-size:16px; line-height:1.75; color:var(--text-secondary); margin-bottom:2px; }
        .md-quote { border-left:2px solid var(--accent); padding:12px 20px; margin:16px 0; background:var(--quote-bg); border-radius:0 6px 6px 0; font-style:italic; color:var(--text-secondary); line-height:1.7; }
        .md-hr { border:none; height:1px; background:var(--border); margin:28px 0; }
        .md-li { font-size:16px; line-height:1.75; color:var(--text-secondary); padding-left:20px; position:relative; margin-bottom:2px; }
        .md-li::before { content:"·"; position:absolute; left:6px; color:var(--accent); font-weight:bold; }
        .md-arrow { font-size:16px; line-height:1.75; color:var(--text-secondary); padding-left:4px; margin-bottom:2px; }
        .md-spacer { height:8px; }
        .wiki-link { color:var(--accent); cursor:pointer; text-decoration:none; border-bottom:1px solid var(--link-decoration); transition:all 0.15s; font-weight:500; }
        .wiki-link:hover { border-bottom-color:var(--accent); }
        .inline-code { font-family:'IBM Plex Mono',monospace; font-size:14px; background:var(--accent-dim); padding:2px 6px; border-radius:3px; color:var(--accent); }
        .backlinks { margin-top:56px; padding-top:24px; border-top:1px solid var(--border); }
        .backlinks-title { font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px; }
        .backlink-item { display:inline-flex; align-items:center; gap:6px; padding:5px 12px; border-radius:5px; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--accent); background:var(--accent-dim); border:none; margin:0 6px 6px 0; transition:all 0.15s; }
        .backlink-item:hover { background:var(--bg-hover); }
        .graph-panel { padding:24px; border-top:1px solid var(--border); background:var(--bg-secondary); }
        .graph-title { font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:16px; }
        @media (max-width:768px) { .sidebar { position:absolute; height:100%; box-shadow:4px 0 24px var(--shadow); } .sidebar.collapsed { margin-left:-260px; } .content-inner { padding:32px 20px 100px; } .md-h1 { font-size:26px; } }
      `}</style>

      <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-header">
          <div className="site-name">✦ Maxx Yung</div>
          <div className="site-tagline">digital garden</div>
        </div>
        <nav className="nav-section">
          <div className="nav-label">Home</div>
          <button className={`nav-item ${currentNote === "welcome" ? "active" : ""}`} onClick={() => navigate("welcome")}><span className="icon">✦</span> Welcome</button>

          <div className="nav-label">Lists</div>
          {["advice","apps","email","books"].map(id => (
            <button key={id} className={`nav-item ${currentNote === id ? "active" : ""}`} onClick={() => navigate(id)}>
              <span className="icon">{NOTES[id].icon}</span> {NOTES[id].title}
            </button>
          ))}

          <div className="nav-label">Venture</div>
          <button className={`nav-item ${currentNote === "venture" ? "active" : ""}`} onClick={() => navigate("venture")}><span className="icon">◈</span> Venture Writing</button>

          <div className="nav-label">Blog</div>
          {["blog","countersignaling"].map(id => (
            <button key={id} className={`nav-item ${currentNote === id ? "active" : ""}`} onClick={() => navigate(id)}>
              <span className="icon">{NOTES[id].icon}</span> {NOTES[id].title}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className={`footer-btn ${showGraph ? "active" : ""}`} onClick={() => setShowGraph(!showGraph)}>{showGraph ? "◉" : "○"} Graph</button>
          <button className="footer-btn" onClick={() => setDark(!dark)}>{dark ? "☀" : "☾"} {dark ? "Light" : "Dark"}</button>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="topbar-left">
            <button className="top-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
            <button className="top-btn" onClick={goBack} disabled={historyIdx <= 0}>←</button>
            <button className="top-btn" onClick={goForward} disabled={historyIdx >= history.length - 1}>→</button>
            <div className="breadcrumb">
              {note.section && <><span>{note.section}</span> / </>}{note.title}
            </div>
          </div>
        </div>
        <div className="content-area" ref={contentRef}>
          <div className="content-inner">
            {renderContent(note.content, navigate)}
            {backlinks.length > 0 && (
              <div className="backlinks">
                <div className="backlinks-title">Linked to this note</div>
                {backlinks.map(bl => <button key={bl.id} className="backlink-item" onClick={() => navigate(bl.id)}>{bl.icon} {bl.title}</button>)}
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
