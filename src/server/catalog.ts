import { database, checked } from './database.ts';

export const CATALOG_PAGE_SIZE = 500;
export async function readCatalogPage(page: number, db = database()) {
  const result = await db.from('catalog').select('kind,id,data', { count: 'exact' })
    .order('kind').order('id')
    .range(page * CATALOG_PAGE_SIZE, (page + 1) * CATALOG_PAGE_SIZE - 1);
  const rows = checked(result);
  return { rows, totalRecords: result.count ?? rows.length };
}

// PostgREST limits each response. Stable ordering prevents missing/duplicated rows
// when reading a catalog larger than the project's maximum row count.
export async function readCatalog(kinds?: string[], db = database()) {
  const rows: { kind: string; id: string; data: any }[] = [];
  const pageSize = 500;
  for (let offset = 0; ; offset += pageSize) {
    let query = db.from('catalog').select('kind,id,data').order('kind').order('id');
    if (kinds?.length) query = query.in('kind', kinds);
    const page = checked(await query.range(offset, offset + pageSize - 1));
    rows.push(...page);
    if (page.length < pageSize) return rows;
  }
}
