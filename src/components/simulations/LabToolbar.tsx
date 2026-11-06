import { useEffect, useState, useRef } from 'react';
import { Aperture, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { LabQuality } from './labStudio';
import './labs.css';

export function LabToolbar({ name, onClose }: { name: string; onClose?: () => void }) {
  const { language } = useLanguage();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose); closeRef.current = onClose;
  const [quality, setQuality] = useState<LabQuality>(() => {
    try { return (localStorage.getItem('cham_lab_quality') as LabQuality) || 'balanced'; } catch { return 'balanced'; }
  });
  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const previous = document.activeElement as HTMLElement | null;
    const dialog = toolbarRef.current?.closest('[role=dialog]') as HTMLElement | null;
    const focusables = () => dialog ? [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled),select,input,textarea,[href]')].filter(node => node.getClientRects().length > 0) : [];
    focusables()[0]?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeRef.current?.();
      if (event.key === 'Tab') {
        const items = focusables(), first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = old; window.removeEventListener('keydown', escape); previous?.focus(); };
  }, []);
  return <div ref={toolbarRef} className="lab-toolbar">
    <span className="lab-toolbar-name"><span className="lab-live-dot" /><strong>CHẠM STUDIO</strong><span className="lab-toolbar-divider" />{name}</span>
    <span className="lab-navigation-hint"><MousePointer2 size={13} />{language === 'vi' ? 'Kéo để xoay · Cuộn để thu phóng' : 'Drag to orbit · Scroll to zoom'}</span>
    <label className="lab-quality"><Aperture size={14} /><span className="sr-only">{language === 'vi' ? 'Chất lượng hình ảnh' : 'Visual quality'}</span>
      <select value={quality} onChange={event => {
        const value = event.target.value as LabQuality; setQuality(value);
        try { localStorage.setItem('cham_lab_quality', value); } catch {}
        window.dispatchEvent(new CustomEvent('cham-lab-quality', { detail: value }));
      }}>
        <option value="balanced">{language === 'vi' ? 'Cân bằng' : 'Balanced'}</option>
        <option value="cinematic">{language === 'vi' ? 'Điện ảnh' : 'Cinematic'}</option>
        <option value="battery">{language === 'vi' ? 'Tiết kiệm pin' : 'Battery saver'}</option>
      </select>
    </label>
  </div>;
}
