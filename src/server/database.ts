import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

export function database() {
 const url=process.env.SUPABASE_URL, key=process.env.SUPABASE_SECRET_KEY;
 if(!url || !key) throw new Error('Chưa cấu hình Supabase trên máy chủ.');
 return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
}
export async function authenticatedUser(req:any, admin=false) {
 const token=String(req.headers?.authorization || '').replace(/^Bearer /,'');
 if(!token) throw Object.assign(new Error('Vui lòng đăng nhập để thao tác.'),{status:401});
 const db=database(); const {data,error}=await db.auth.getUser(token);
 if(error || !data.user) throw Object.assign(new Error('Phiên đăng nhập hết hạn.'),{status:401});
 const {data:role,error:roleError}=await db.from('user_roles').select('role').eq('user_id',data.user.id).maybeSingle();
 if(roleError) throw new Error('Database chưa sẵn sàng. Vui lòng chạy migration.');
 if(admin && role?.role!=='admin') throw Object.assign(new Error('Bạn không có quyền quản trị.'),{status:403});
 return {...data.user,role:role?.role || 'user'};
}
export function checked<T extends {error:any;data:any}>(result:T):any {
 if(result.error) { console.error('[database]', {code:result.error.code}); throw new Error('Không thể xử lý dữ liệu. Vui lòng kiểm tra cấu hình database.'); }
 return result.data;
}
export function endpoint(fn:(req:any,res:any)=>Promise<any>) {
 return async(req:any,res:any)=>{
  res.setHeader('Cache-Control','no-store');
  if(req.method==='OPTIONS') return res.status(204).end();
  try {return await fn(req,res);} catch(e:any){return res.status(e.status||500).json({success:false,message:e.status?e.message:'Không thể xử lý yêu cầu. Database có thể chưa được khởi tạo.'});}
 };
}
