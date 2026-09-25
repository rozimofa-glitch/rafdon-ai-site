export const onRequestGet: PagesFunction = async () => {
  return new Response(JSON.stringify({
    ok: true,
    service: 'rafdon-ai',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
};
