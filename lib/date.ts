export const localDate=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
export const fromLocal=(s:string)=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)}
export const addDays=(s:string,n:number)=>{const d=fromLocal(s);d.setDate(d.getDate()+n);return localDate(d)}
export const dayDiff=(a:string,b:string)=>Math.round((fromLocal(b).getTime()-fromLocal(a).getTime())/86400000)
export const dayNumber=(start:string,date:string)=>dayDiff(start,date)+1
export const pretty=(s:string)=>fromLocal(s).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})
export const weekStart=(s:string)=>{const d=fromLocal(s);const n=(d.getDay()+6)%7;d.setDate(d.getDate()-n);return localDate(d)}
