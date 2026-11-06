const KEY='cham_viec_session';
let session:any=null;
try {session=JSON.parse(localStorage.getItem(KEY)||'null');}catch{}
export function currentSession(){return session;}
export function setSession(value:any){session=value;if(value)localStorage.setItem(KEY,JSON.stringify(value));else localStorage.removeItem(KEY);}
let refreshing:Promise<void>|null=null;
export async function authFetch(input:RequestInfo|URL,init:RequestInit={}) {
 if(session?.expires_at && session.expires_at*1000<Date.now()+30000){
  if(!refreshing)refreshing=(async()=>{const r=await fetch('/api/account?action=refresh',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({refreshToken:session.refresh_token})});const d=await r.json();setSession(d.session||null);})().finally(()=>{refreshing=null;});
  await refreshing;
 }
 const headers=new Headers(init.headers);if(session?.access_token)headers.set('Authorization',`Bearer ${session.access_token}`);
 return fetch(input,{...init,headers});
}
