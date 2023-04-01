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
  let gt=(c,n,n1,n2)=>g(c)[n].innerText=ad[n1][n2]
  gt('athlete-name',s-1,a,0)
  g('athlete-image-'+s)[0].src=ad[a][2]
  gt('sport-'+s,0,a,1)
  gt('sport-'+s,1,a,1)
  for(let l=3;l<ad[a].length;l++){
    gt('c-'+l+'-'+s,0,a,l)
    gt('c-'+l+'-'+s,1,a,l)
  }
}
let s1=0,s2=1
i(1,s1);i(2,s2)
const el=(c,cn,e,f)=>g(c)[cn].addEventListener(e,f,{passive: false})
el('body',0,'touchstart',(e)=>e.preventDefault())
const e=(ev,s,is)=>{
  do {
    ev=='a'?s+=1:s-=1
    s=s>=ad.length?0:s
    s=s<=-1?ad.length-1:s
  } while (is==1?ad[s][1]!='MMA':ad[s][1]=='MMA')
  i(is,s)
  return s
}
el('left-1',0,'click',()=>s1=e('s',s1,1))
el('right-1',0,'click',()=>s1=e('a',s1,1))
el('left-2',0,'click',()=>s2=e('s',s2,2))
el('right-2',0,'click',()=>s2=e('a',s2,2))
el('left-1',0,'touchstart',()=>s1=e('s',s1,1))
el('right-1',0,'touchstart',()=>s1=e('a',s1,1))
el('left-2',0,'touchstart',()=>s2=e('s',s2,2))
el('right-2',0,'touchstart',()=>s2=e('a',s2,2))
{let sX,eX
{const tS=(e)=>{
  e.preventDefault()
  sX=e.touches[0].screenX
}
el('vs-column',0,'touchstart',(e)=>tS(e))
el('vs-column',1,'touchstart',(e)=>tS(e))}
{const tE=(ev,s)=>{
  ev.preventDefault()
  eX=ev.changedTouches[0].screenX
  eX-=sX
  eX>25?(s==1?s1=e('s',s1,1):s2=e('s',s2,2)):(eX<-25?(s==1?s1=e('a',s1,1):s2=e('a',s2,2)):null)
}
el('vs-column',0,'touchend',(e)=>tE(e,1))
el('vs-column',1,'touchend',(e)=>tE(e,2))}}
window.onload = () => {
  for(let l=1;l<ad.length;l++){
    let i = document.createElement("img");
    i.src=ad[l][2]
    i.style.display="none"
    g('l')[0].append(i);
  }
}
console.clear()}
