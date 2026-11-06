import 'dotenv/config';
import {database,checked} from '../src/server/database.ts';
const email=process.argv[2];
if(!email)throw new Error('Usage: npm run db:admin -- admin@example.com');
const db=database();
let target;
for(let page=1;page<=100;page++){
 const {data,error}=await db.auth.admin.listUsers({page,perPage:100});if(error)throw new Error('Cannot list users.');
 target=data.users.find(u=>u.email?.toLowerCase()===email.toLowerCase());if(target||data.users.length<100)break;
}
if(!target)throw new Error('Register this email first, then run the command again.');
checked(await db.from('user_roles').upsert({user_id:target.id,role:'admin'}));
console.log('Administrator role granted to the specified account.');
