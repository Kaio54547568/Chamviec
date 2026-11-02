import type { EnterpriseBatch } from '../types';

export function isEnterpriseBatchOpen(batch: EnterpriseBatch, now = new Date()): boolean {
  // Deadlines include the whole advertised day in Vietnam, independently of server timezone.
  const deadline = Date.parse(`${batch.deadlineDate}T23:59:59.999+07:00`);
  const eventEnd = Date.parse(`${batch.scheduleDate}T23:59:59.999+07:00`);
  return batch.status === 'DANG_MO'
    && batch.registeredSlots < batch.totalSlots
    && Number.isFinite(deadline) && Number.isFinite(eventEnd)
    && now.getTime() <= deadline && now.getTime() <= eventEnd;
}
