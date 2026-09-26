export function buildContentBrief({ topic, product, audience, goal }) {
  return {
    topic: topic ?? null,
    product: product ?? null,
    audience: audience ?? null,
    goal: goal ?? 'growth',
    outputs: ['hook', 'caption', 'hashtags', 'cta'],
    evidenceRequired: true,
  };
}

export function scoreFromBaseline(value, baseline) {
  if (value == null || baseline == null || baseline === 0) return null;
  return Number((value / baseline).toFixed(4));
}

export function classifyPerformance(ratio) {
  if (ratio == null) return 'not_available';
  if (ratio >= 2) return 'rising';
  if (ratio >= 1.2) return 'above_baseline';
  if (ratio <= 0.7) return 'below_baseline';
  return 'baseline';
}
