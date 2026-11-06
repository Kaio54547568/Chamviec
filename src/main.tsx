import { loadCatalog } from './utils/catalog';
import { AuthProvider } from './components/AuthContext';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';
import './index.css';

loadCatalog().catch(()=>console.warn('Danh mục database chưa sẵn sàng; đang dùng dữ liệu đi kèm ứng dụng.')).finally(()=>{
createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <AuthProvider><App /></AuthProvider>
  </LanguageProvider>
);

});
