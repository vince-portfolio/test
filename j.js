{let ad=[];{let t='',w=false,d=[]
for(let l=0;l<at.length;l++){
  if(at[l]!='\n'){
    if(at[l]=='\"'){
      w=!w
    }else{
      if(at[l]!=','||w){
        t+=at[l]
      }else{
        d.push(t)
        t=''
      }
    }
  }else{
    d.push(t)
    t=''
    ad.push(d)
    d=[]
  }
}ad.shift()}
const g=(c)=>document.getElementsByClassName(c)
const i=(s,a)=>{
  const gt=(c,n,n1,n2)=>g(c)[n].innerText=ad[n1][n2]
  gt('athlete-name',s-1,a,0)
  g('athlete-image-'+s)[0].src=ad[a][2]
  gt('sport-'+s,0,a,1)
  gt('sport-'+s,1,a,1)
  for(let l=3;l<ad[a].length;l++){
    gt('c-'+l+'-'+s,0,a,l)
    gt('c-'+l+'-'+s,1,a,l)
  }
}
let s1=-1,s2=-1
const el=(c,cn,e,f)=>g(c)[cn].addEventListener(e,f,{passive: false})
const t='touchstart'
el('body',0,t,(e)=>e.preventDefault())
const e=(ev,s,is,r)=>{
  do {
    ev=='a'?s+=1:s-=1
    s=s>=ad.length?0:s
    s=s<=-1?ad.length-1:s
  } while (is==1?ad[s][1]!='MMA':ad[s][1]=='MMA')
  r?i(is,s):null
  return s
}
s1=e('a',s1,1,1)
s2=e('a',s2,2,1)
const c='click'
el('left-1',0,c,()=>s1=e('s',s1,1,1))
el('right-1',0,c,()=>s1=e('a',s1,1,1))
el('left-2',0,c,()=>s2=e('s',s2,2,1))
el('right-2',0,c,()=>s2=e('a',s2,2,1))
el('left-1',0,t,()=>s1=e('s',s1,1,1))
el('right-1',0,t,()=>s1=e('a',s1,1,1))
el('left-2',0,t,()=>s2=e('s',s2,2,1))
el('right-2',0,t,()=>s2=e('a',s2,2,1))
{let sX,eX
const vs='vs-column'
{const tS=(e)=>sX=e.touches[0].screenX
el(vs,0,t,(e)=>tS(e))
el(vs,1,t,(e)=>tS(e))}
{const tE=(ev,s)=>{
  eX=ev.changedTouches[0].screenX
  eX-=sX
  eX>25?(s==1?s1=e('s',s1,1,1):s2=e('s',s2,2,1)):(eX<-25?(s==1?s1=e('a',s1,1,1):s2=e('a',s2,2,1)):null)
}
el(vs,0,'touchend',(e)=>tE(e,1))
el(vs,1,'touchend',(e)=>tE(e,2))}}
window.onload = () => {
  const ii=(l)=>{
    let i = document.createElement("img");
      i.src=ad[l][2]
      i.style.display="none"
      g('l')[0].append(i)
  }
  let r1=-1,l1=ad.length,r2=-1,l2=ad.length
  while (r1<l1&&r2<l2) {
    r2=e('a',r2,2,0)
    r2<l2?ii(r2):null
    l2=e('s',l2,2,0)
    r2<l2?ii(l2):null
    r1=e('a',r1,1,0)
    r1<l1?ii(r1):null
    l1=e('s',l1,1,0)
    r1<l1?ii(l1):null
  }
}
console.clear()}