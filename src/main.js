import './styles.css';

const accounts = [
  ['TikTok', '@rafdon19'],
  ['TikTok', '@mofaizor'],
  ['TikTok', '@kepala.miring99'],
  ['Instagram', '@mofarozi'],
  ['Facebook', 'mofaizor'],
];

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <header class="topbar">
      <div><span class="eyebrow">RAFDON AI</span><h1>Creator Revenue OS</h1><p>One command center for content, audience, LIVE and affiliate growth.</p></div>
      <div class="status"><span></span> Foundation online</div>
    </header>
    <section class="hero-grid">
      <article class="hero"><span class="label">MASTER AGENT</span><h2>Observe → Analyze → Experiment → Learn</h2><p>RAFDON AI will connect authorized platform data to a single measurement and decision layer. No vanity-only optimization.</p></article>
      <article class="card"><h3>Connected accounts</h3>${accounts.map(([p,a])=>`<div class="account"><b>${a}</b><span>${p}</span></div>`).join('')}</article>
    </section>
    <section class="metrics">
      ${[['Views','—'],['Followers','—'],['Engagement','—'],['Affiliate revenue','—']].map(([k,v])=>`<article class="metric"><span>${k}</span><strong>${v}</strong><small>Awaiting official platform sync</small></article>`).join('')}
    </section>
    <section class="grid">
      <article class="card"><h3>Content Intelligence</h3><p>Winning hooks, retention patterns, saves, shares, comments, follows and experiment results.</p><button disabled>Connect data first</button></article>
      <article class="card"><h3>Affiliate Engine</h3><p>Products → clicks → orders → commission → revenue attribution.</p><button disabled>Connect data first</button></article>
      <article class="card"><h3>LIVE Copilot</h3><p>Live-ready product priorities, audience questions and host recommendations where permitted data is available.</p><button disabled>Connect data first</button></article>
      <article class="card"><h3>AI Memory</h3><p>Store what worked, what failed, why it worked and which account or audience it applied to.</p><button disabled>Connect data first</button></article>
    </section>
    <footer><a href="/terms-of-service.html">Terms</a><a href="/privacy-policy.html">Privacy</a><span>© 2026 RAFDON AI</span></footer>
  </main>`;
