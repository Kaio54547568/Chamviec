import { loadCatalog, catalogState } from './utils/catalog';
import { loadAdmissionFallback } from './data/admissions';
import { AuthProvider } from './components/AuthContext';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';
import './index.css';

loadCatalog().catch(async()=>{
  console.warn('Không tải được danh mục database; thử bản lưu tham khảo có ghi ngày.');
  try { await loadAdmissionFallback(); catalogState.source='bundled'; }
  catch { catalogState.source='unavailable'; }
}).finally(()=>{
createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <AuthProvider><App /></AuthProvider>
  </LanguageProvider>
);

});
