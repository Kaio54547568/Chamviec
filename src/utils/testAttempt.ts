type AttemptStorage = Pick<Storage, 'getItem' | 'setItem'>;
const KEY = 'cham_viec_test_idem_key';

export function getTestAttemptKey(answers: Record<string, { rating: number; hasTried: boolean }>, storage: AttemptStorage = sessionStorage): string {
  const fingerprint = JSON.stringify(Object.keys(answers).sort().map(id => [id, answers[id].rating, answers[id].hasTried]));
  try {
    const previous = JSON.parse(storage.getItem(KEY) || 'null');
    if (previous?.fingerprint === fingerprint && typeof previous.key === 'string') return previous.key;
  } catch { /* Old keys were plain strings. Replace them on the next submission. */ }
  const key = `CV-TEST-${crypto.randomUUID()}`;
  storage.setItem(KEY, JSON.stringify({ fingerprint, key }));
  return key;
}
