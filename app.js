window.QBANK=window.QBANK||[];
(function(){
const $=id=>document.getElementById(id);
let allQ=window.QBANK;
let list=[],idx=0,answers={},flags={};
let mode='practice',activeWeeks=new Set([1,2,3,4,5,6,7,8,9,10,11,12]);
let mockList=[],mIdx=0,mockTimer=null,mockLeft=7200;
const L=letters=>['A','B','C','D'][letters];
function save(){try{localStorage.setItem('iiot-v4-ans',JSON.stringify(answers));localStorage.setItem('iiot-v4-flags',JSON.stringify(flags));localStorage.setItem('iiot-v4-day',new Date().toDateString());}catch(e){}}
function load(){try{answers=JSON.parse(localStorage.getItem('iiot-v4-ans')||localStorage.getItem('nptel-ans-v3')||'{}');flags=JSON.parse(localStorage.getItem('iiot-v4-flags')||localStorage.getItem('nptel-flags-v3')||'{}');}catch(e){}}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function instantOn(){return $('opt-instant').checked;}
// views
const titles={dashboard:['Dashboard','Exam-ready in days, not weeks'],practice:['Practice','Instant why-explanations'],mock:['Mock Exam','100-mark simulation'],hitlist:['Hitlist','Numbers · companies · traps']};
document.querySelectorAll('[data-view],[data-goto]').forEach(b=>b.onclick=()=>show(b.dataset.view||b.dataset.goto));
function show(v){document.querySelectorAll('.view').forEach(s=>s.classList.remove('active'));$('view-'+v).classList.add('active');document.querySelectorAll('.nav,.mnav button').forEach(n=>n.classList.toggle('active',n.dataset.view===v));$('view-title').textContent=titles[v][0];$('view-sub').textContent=titles[v][1];window.scrollTo({top:0});if(v==='dashboard')renderDash();}
// dashboard
function acc(){const d=Object.keys(answers).length,o=Object.values(answers).filter(a=>a.ok).length;return{d,o,p:d?Math.round(o/d*100):0};}
function renderDash(){
  const{d,o,p}=acc();
  $('st-total').textContent=allQ.length;$('st-done').textContent=d;$('st-acc').textContent=d?p+'%':'–';
  $('prog-fill-top').style.width=(d/allQ.length*100)+'%';$('prog-label').textContent=`${d} / ${allQ.length} attempted`;
  $('ring-txt').textContent=p+'%';$('ring').style.background=`conic-gradient(var(--acc) ${p}%,#e5e9f5 ${p}%)`;
  $('c-wrong').textContent=Object.values(answers).filter(a=>!a.ok).length;
  $('c-flag').textContent=Object.keys(flags).length;
  $('c-new').textContent=allQ.length-d;
  const sc=$('stat-cards');sc.innerHTML='';
  [['📚 Total',allQ.length,'PDF + PYQ bank'],['✅ Correct',o,'keep it green'],['❌ Wrong',d-o,'revise these'],['🎯 Target','70+','to pass safe']].forEach(([t,v,s])=>{const d2=document.createElement('div');d2.className='scard';d2.innerHTML=`<b>${v}</b><span>${t} · ${s}</span>`;sc.appendChild(d2);});
  const wg=$('weeks-grid');wg.innerHTML='';
  for(let w=1;w<=12;w++){const qs=allQ.filter(q=>q.week===w),at=qs.filter(q=>answers[q.id]).length,ok=qs.filter(q=>answers[q.id]&&answers[q.id].ok).length,pc=at?Math.round(ok/at*100):0;
    const b=document.createElement('button');b.className='wcard';b.innerHTML=`<b>Week ${w}</b><small>${ok}/${at}/${qs.length} · ${at?pc+'%':'—'}</small><div class="bar"><div style="display:block;height:100%;width:${qs.length?at/qs.length*100:0}%;background:var(--acc)"></div></div><small>${w===1?'Sensors + 802.15.4':w===2?'4IR + Lean':w===3?'CPS + 5C':w===4?'Security + GE':w===5?'Business + IIRA':w===6?'Sensing + 5G':w===7?'LoRa + SCADA':w===8?'ML + Cloud':w===9?'Fog + SDN':w===10?'6TiSCH + STRIDE':w===11?'Health + RFID':'Oil + UAV'}</small>`;
    b.onclick=()=>{activeWeeks=new Set([w]);buildChips();applyFilters(true);show('practice');};wg.appendChild(b);}
}
$('qa-wrong').onclick=()=>{setWeekFilter(null);$('filter-state').value='wrong';applyFilters(true);show('practice');};
$('qa-flag').onclick=()=>{setWeekFilter(null);$('filter-state').value='flagged';applyFilters(true);show('practice');};
$('qa-unseen').onclick=()=>{setWeekFilter(null);$('filter-state').value='unseen';applyFilters(true);show('practice');};
function setWeekFilter(s){if(s)activeWeeks=new Set(s);buildChips();}
// practice
function buildChips(){const c=$('week-chips');c.innerHTML='';for(let w=1;w<=12;w++){const n=allQ.filter(q=>q.week===w).length;const b=document.createElement('button');b.className='chip'+(activeWeeks.has(w)?' active':' off');b.textContent=`W${w}·${n}`;b.onclick=()=>{activeWeeks.has(w)?activeWeeks.delete(w):activeWeeks.add(w);b.classList.toggle('active');b.classList.toggle('off');};c.appendChild(b);}}
function applyFilters(rs=true,keep=null){const q=$('search').value.trim().toLowerCase(),st=$('filter-state').value;let N=allQ.filter(x=>activeWeeks.has(x.week));if(q)N=N.filter(x=>(x.q+' '+x.options.join(' ')).toLowerCase().includes(q));if(st==='unseen')N=N.filter(x=>!answers[x.id]);if(st==='wrong')N=N.filter(x=>answers[x.id]&&!answers[x.id].ok);if(st==='correct')N=N.filter(x=>answers[x.id]&&answers[x.id].ok);if(st==='flagged')N=N.filter(x=>flags[x.id]);if($('opt-shuffle').checked&&rs)N=shuffle(N);list=N;$('list-count').textContent=`showing ${N.length}/${allQ.length}`;if(keep){const i=N.findIndex(x=>x.id===keep);idx=i>=0?i:0;}else idx=0;render();}
$('btn-start').onclick=()=>applyFilters(true);
let sT=null;$('search').addEventListener('input',()=>{clearTimeout(sT);const cur=list[idx]?.id;sT=setTimeout(()=>{if($('view-practice').classList.contains('active'))applyFilters(false,cur);},250);});
$('filter-state').onchange=()=>applyFilters(false);
function render(){const{d}=acc();$('st-done').textContent=d;
  if(!list.length){$('q-text').textContent='No match — enable weeks / clear search.';$('q-opts').innerHTML='';$('q-count').textContent='Q 0/0';$('qmap').innerHTML='';$('q-feedback').classList.add('hidden');return;}
  if(idx<0)idx=0;if(idx>=list.length)idx=list.length-1;const Q=list[idx];
  $('q-count').textContent=`Q ${idx+1}/${list.length}`;$('q-week').textContent='Week '+Q.week;$('q-id').textContent=Q.id;
  $('q-text').textContent=Q.q;const f=$('btn-flag');f.textContent=flags[Q.id]?'★':'☆';f.classList.toggle('on',!!flags[Q.id]);
  const st=answers[Q.id],box=$('q-opts');box.innerHTML='';
  Q.options.forEach((op,i)=>{const b=document.createElement('button');b.className='opt';b.type='button';b.innerHTML=`<span class="k">${L(i)}</span>`;const t=document.createElement('span');t.className='t';t.textContent=op;b.appendChild(t);
    if(st&&(instantOn())){if(i===Q.ans)b.classList.add('correct');if(st.pick===i&&!st.ok)b.classList.add('wrong');if(st.pick===i&&st.ok)b.classList.add('selected');}
    else if(st&&st.pick===i)b.classList.add('selected');
    b.onclick=()=>{answers[Q.id]={pick:i,ok:i===Q.ans};save();render();renderDash();};box.appendChild(b);});
  const fb=$('q-feedback');
  if(st&&instantOn()){fb.classList.remove('hidden');fb.className='feedback '+(st.ok?'good':'bad');fb.innerHTML='';const h=document.createElement('h4');h.textContent=st.ok?'✅ Correct!':'❌ Correct is '+L(Q.ans);const p=document.createElement('p');p.innerHTML='<b>'+L(Q.ans)+' — </b>';const s=document.createElement('span');s.textContent=Q.options[Q.ans];p.appendChild(s);const w=document.createElement('div');w.className='why';const wb=document.createElement('b');wb.textContent='Why: ';const ws=document.createElement('span');ws.textContent=Q.exp;w.appendChild(wb);w.appendChild(ws);fb.append(h,p,w);}
  else fb.classList.add('hidden');
  $('prog-fill').style.width=(list.filter(q=>answers[q.id]).length/list.length*100)+'%';
  const m=$('qmap');m.innerHTML='';$('pal-count').textContent=list.filter(q=>answers[q.id]).length+'/'+list.length;
  list.forEach((qq,i)=>{const e=document.createElement('button');e.className='dot'+(i===idx?' cur':'')+(answers[qq.id]?(answers[qq.id].ok?' ok':' no'):'')+(flags[qq.id]?' flagged':'');e.textContent=i+1;e.title=qq.id;e.onclick=()=>{idx=i;render();};m.appendChild(e);});
  const ws=$('week-stats');ws.innerHTML='';for(let w=1;w<=12;w++){const qs=allQ.filter(q=>q.week===w),at=qs.filter(q=>answers[q.id]).length,ok=qs.filter(q=>answers[q.id]&&answers[q.id].ok).length;const r=document.createElement('div');r.className='wrow';r.innerHTML=`<span>W${w} ${ok}/${at}</span><span>${at?Math.round(ok/at*100)+'%':'–'}</span>`;ws.appendChild(r);}
}
$('btn-prev').onclick=()=>{if(idx>0){idx--;render();}};
$('btn-next').onclick=()=>{if(idx<list.length-1){idx++;render();}};
$('btn-clear').onclick=()=>{const Q=list[idx];if(Q){delete answers[Q.id];save();render();renderDash();}};
$('btn-reveal').onclick=()=>{const Q=list[idx];if(Q){answers[Q.id]={pick:-1,ok:false};save();render();renderDash();}};
$('btn-flag').onclick=()=>{const Q=list[idx];if(!Q)return;flags[Q.id]?delete flags[Q.id]:flags[Q.id]=1;save();render();renderDash();};
$('btn-reset').onclick=()=>{if(confirm('Clear all?')){answers={};flags={};save();applyFilters(false);renderDash();}};
document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;if(!$('view-practice').classList.contains('active')||!list.length)return;const Q=list[idx];if(e.key>='1'&&e.key<='4'){answers[Q.id]={pick:+e.key-1,ok:+e.key-1===Q.ans};save();render();}else if(e.key==='ArrowRight'&&idx<list.length-1){idx++;render();}else if(e.key==='ArrowLeft'&&idx>0){idx--;render();}else if(e.key.toLowerCase()==='f')$('btn-flag').click();});
// mock
$('btn-mock-start').onclick=()=>{const n=+$('mock-n').value,mn=+$('mock-min').value;mockList=shuffle(allQ).slice(0,n);mockList.forEach(q=>delete answers[q.id]);save();mIdx=0;$('mock-setup').classList.add('hidden');$('mock-exam').classList.remove('hidden');$('mock-result').classList.add('hidden');mockLeft=mn*60;tick();clearInterval(mockTimer);mockTimer=setInterval(tick,1000);renderMock();};
function tick(){const h=String(Math.floor(mockLeft/3600)).padStart(2,'0'),m=String(Math.floor(mockLeft%3600/60)).padStart(2,'0'),s=String(mockLeft%60).padStart(2,'0');$('timer').textContent=`${h}:${m}:${s}`;if(mockLeft<=0)submitMock();else mockLeft--;}
function renderMock(){if(!mockList.length)return;const Q=mockList[mIdx];$('mock-count').textContent=`Q ${mIdx+1}/${mockList.length} · ${Q.id} · W${Q.week}`;$('m-qtext').textContent=Q.q;const box=$('m-opts');box.innerHTML='';const st=answers[Q.id];Q.options.forEach((op,i)=>{const b=document.createElement('button');b.className='opt'+(st&&st.pick===i?' selected':'');b.innerHTML=`<span class="k">${L(i)}</span>`;const t=document.createElement('span');t.className='t';t.textContent=op;b.appendChild(t);b.onclick=()=>{answers[Q.id]={pick:i,ok:i===Q.ans};save();renderMock();};box.appendChild(b);});const mp=$('m-map');mp.innerHTML='';mockList.forEach((qq,i)=>{const e=document.createElement('button');e.className='dot'+(i===mIdx?' cur':'')+(answers[qq.id]?' ok':'');e.textContent=i+1;e.onclick=()=>{mIdx=i;renderMock();};mp.appendChild(e);});}
$('m-prev').onclick=()=>{if(mIdx>0){mIdx--;renderMock();}};$('m-next').onclick=()=>{if(mIdx<mockList.length-1){mIdx++;renderMock();}};
$('btn-mock-submit').onclick=()=>{if(confirm('Submit exam?'))submitMock();};
function submitMock(){clearInterval(mockTimer);let ok=0,at=0;mockList.forEach(q=>{if(answers[q.id]&&answers[q.id].pick>=0){at++;if(answers[q.id].ok)ok++;}});$('mock-exam').classList.add('hidden');const r=$('mock-result');r.classList.remove('hidden');$('result-text').textContent=`Scored ${ok}/${mockList.length} (attempted ${at}). ${ok/mockList.length>=0.7?'Excellent — exam ready!':ok>=40||ok/mockList.length>=0.4?'Pass zone — push to 70+.':'Below pass — revise Hitlist + wrongs.'}`;const br=$('result-break');br.innerHTML='';mockList.forEach((q,i)=>{const a=answers[q.id];const d=document.createElement('div');d.className='wrow';const okc=a&&a.pick>=0&&a.ok;const txt=document.createElement('span');txt.textContent=`Q${i+1} [W${q.week}] ${q.q.slice(0,80)}… → ${L(q.ans)}: ${q.options[q.ans].slice(0,60)}`;const st2=document.createElement('b');st2.textContent=!a||a.pick<0?'skipped':okc?'✅':'❌';st2.style.color=okc?'var(--good)':'var(--bad)';d.append(txt,st2);br.appendChild(d);});save();renderDash();applyFilters(false);r.scrollIntoView({behavior:'smooth'});}
load();buildChips();allQ=window.QBANK;applyFilters(true);renderDash();show('dashboard');
})();
