import './styles.css';

const TIKTOK_AUTH = 'https://hkplxjugmhbrcafimkvl.supabase.co/functions/v1/rafdon-tiktok-auth/authorize';
const accounts = [
  { platform: 'TikTok', handle: '@rafdon19', role: 'Primary growth + affiliate', id: '23202e30-c24f-478d-a97f-06cd7e21e029' },
  { platform: 'TikTok', handle: '@mofaizor', role: 'Personal brand', id: 'a0a4e6c9-8229-4ee9-8c54-b4166fe6b74a' },
  { platform: 'TikTok', handle: '@kepala.miring99', role: 'Viral experiment', id: '2c3b0f0c-ccfb-4223-a70c-6ef0b88e257c' },
  { platform: 'Instagram', handle: '@mofarozi', role: 'Distribution + personal brand' },
  { platform: 'Facebook', handle: 'mofaizor', role: 'Distribution' },
];

const accountCard = (a) => {
  const connect = a.platform === 'TikTok'
    ? `<a class="button" href="${TIKTOK_AUTH}?account_id=${encodeURIComponent(a.id)}">Connect TikTok</a>`
    : `<button disabled>Coming after TikTok foundation</button>`;
  return `<div class="account-row"><div><b>${a.handle}</b><span>${a.platform} · ${a.role}</span></div>${connect}</div>`;
};

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <header class="topbar">
      <div><span class="eyebrow">RAFDON AI</span><h1>Creator Revenue OS</h1><p>One command center for content, audience, LIVE and affiliate growth.</p></div>
      <div class="status"><span></span> Foundation online</div>
    </header>
    <section class="hero-grid">
      <article class="hero"><span class="label">MASTER AGENT</span><h2>Observe → Analyze → Experiment → Learn</h2><p>Official platform data flows into one measurement and decision layer. Tokens stay server-side and are never exposed to the browser.</p></article>
      <article class="card"><h3>Your accounts</h3>${accounts.map(accountCard).join('')}</article>
    </section>
    <section class="metrics">
      ${[['Views','—'],['Followers','—'],['Engagement','—'],['Affiliate revenue','—']].map(([k,v])=>`<article class="metric"><span>${k}</span><strong>${v}</strong><small>Waiting for authorized platform sync</small></article>`).join('')}
    </section>
    <section class="grid">
      <article class="card"><h3>Content Intelligence</h3><p>Winning hooks, retention patterns, saves, shares, comments, follows and experiment results.</p><button disabled>Awaiting data</button></article>
      <article class="card"><h3>Affiliate Engine</h3><p>Products → clicks → orders → commission → revenue attribution.</p><button disabled>Awaiting data</button></article>
      <article class="card"><h3>LIVE Copilot</h3><p>Live-ready product priorities, audience questions and host recommendations where permitted data is available.</p><button disabled>Awaiting data</button></article>
      <article class="card"><h3>AI Memory</h3><p>Store what worked, what failed, why it worked and which account or audience it applied to.</p><button disabled>Awaiting data</button></article>
    </section>
    <footer><a href="/terms-of-service.html">Terms</a><a href="/privacy-policy.html">Privacy</a><span>© 2026 RAFDON AI</span></footer>
  </main>`;
