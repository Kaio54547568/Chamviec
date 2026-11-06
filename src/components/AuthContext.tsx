import React,{createContext,useContext,useEffect,useState} from 'react';
import {authFetch,currentSession,setSession} from '../utils/authSession';
const Context=createContext<{user:any;ready:boolean;requireLogin:()=>boolean;logout:()=>void}>({user:null,ready:false,requireLogin:()=>false,logout:()=>{}});
export const useAuth=()=>useContext(Context);
export function AuthProvider({children}:{children:React.ReactNode}){
 const [user,setUser]=useState<any>(null),[ready,setReady]=useState(false),[open,setOpen]=useState(false),[signup,setSignup]=useState(false);
 const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
 async function load(){try{if(currentSession()){const r=await authFetch('/api/account');const d=await r.json();if(r.ok)setUser(d.user);else setSession(null);}}finally{setReady(true);}}
 useEffect(()=>{load();},[]);
 function logout(){setSession(null);setUser(null);}
 async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setMessage('');try{
 const r=await fetch(`/api/account?action=${signup?'signup':'login'}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});const d=await r.json();
 if(!r.ok)throw new Error(d.message);if(d.session){setSession(d.session);await load();setOpen(false);setPassword('');}else setMessage(d.message||'Kiểm tra email xác nhận tài khoản.');
 }catch(e:any){setMessage(e.message||'Không thể kết nối.');}finally{setBusy(false);}}
 return <Context.Provider value={{user,ready,requireLogin:()=>{if(user)return true;setOpen(true);return false;},logout}}>
 <div className="bg-white px-4 py-2 border-b flex justify-end items-center gap-3 text-sm">
 {user?<><span>{user.email}{user.role==='admin'?' · Quản trị viên':''}</span><button onClick={logout} className="underline">Đăng xuất</button></>:<button disabled={!ready} onClick={()=>setOpen(true)} className="font-bold text-teal-800">Đăng nhập / Đăng ký</button>}
 </div>{children}
 {open&&<div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="auth-title">
 <form onSubmit={submit} className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4"><div className="flex justify-between"><h2 id="auth-title" className="font-bold text-xl">{signup?'Đăng ký tài khoản':'Đăng nhập'}</h2><button type="button" aria-label="Đóng" onClick={()=>setOpen(false)}>✕</button></div>
 <p className="text-sm text-slate-600">Bạn có thể xem nội dung tự do. Đăng nhập để khảo sát, lưu hồ sơ và đăng ký trải nghiệm.</p>
 <label className="block">Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" className="border rounded-lg p-2 w-full"/></label>
 <label className="block">Mật khẩu<input type="password" minLength={8} required value={password} onChange={e=>setPassword(e.target.value)} autoComplete={signup?'new-password':'current-password'} className="border rounded-lg p-2 w-full"/></label>
 {message&&<p role="alert" className="text-sm text-rose-700">{message}</p>}
 <button disabled={busy} className="bg-teal-700 text-white rounded-lg p-3 w-full disabled:opacity-50">{busy?'Đang xử lý…':signup?'Tạo tài khoản':'Đăng nhập'}</button>
 <button type="button" onClick={()=>{setSignup(!signup);setMessage('');}} className="text-teal-800 underline">{signup?'Đã có tài khoản? Đăng nhập':'Chưa có tài khoản? Đăng ký'}</button>
 </form></div>}
 </Context.Provider>;
}
