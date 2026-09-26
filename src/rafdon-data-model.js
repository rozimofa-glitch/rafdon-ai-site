export const RAFDON_METRICS = [
  'followers','views','likes','comments','shares','saves','engagement_rate',
  'watch_time_seconds','completion_rate','followers_gained','profile_visits',
  'clicks','orders','revenue'
];

export const RAFDON_PIPELINE = [
  'ingest','validate','snapshot','baseline','analyze','experiment','learn','recommend'
];

export function safeMetric(value) {
  return value === null || value === undefined ? null : Number(value);
}

export function metricStatus(value) {
  return value === null || value === undefined ? 'not_available' : 'available';
}
