/* v11 shared LearningReader: progressive disclosure, navigation and local practice.
   Existing renderers remain authoritative; no data IDs or progress stores migrate. */
(() => {
 'use strict';
 const view=document.getElementById('view'), sidebar=document.getElementById('sidebar');
 if(!view||!sidebar||typeof MutationObserver==='undefined')return;
 const esc=dbEsc, data=JSON.parse(document.getElementById('study-data').textContent);
 const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[đĐ]/g,'d').toLowerCase();
 let lastHash='',mode='full',revealed=false,opener=null,observer;
 const drafts=new Map(), expanded=new Map();
 const course=()=>/^#\/(db|oop|dsa)(\/|$)/.exec(location.hash)?.[1]||'math';
 const home={math:'#/home',db:'#/db/home',oop:'#/oop/home',dsa:'#/dsa/home'};
 const mobile=()=>matchMedia('(max-width:900px)').matches;
 const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))||fallback;}catch{return fallback;}};
 function setDrawer(open,restore=true){
  if(mobile()){
   document.body.classList.toggle('drawer-open',open);
   document.getElementById('sidebar-backdrop').hidden=!open;
   document.querySelector('.right-panel').inert=open;
   sidebar.setAttribute('aria-modal',String(open));
   if(open){sidebar.setAttribute('role','dialog');opener=document.activeElement;document.getElementById('sidebar-close').focus();}
   else{sidebar.removeAttribute('role');sidebar.removeAttribute('aria-modal');if(restore&&opener?.isConnected)opener.focus();}
  }else document.body.classList.toggle('sidebar-collapsed',!open);
  document.getElementById('sidebar-toggle').setAttribute('aria-expanded',String(open));
 }
 function catalog(){
  const c=course(),rows=[],add=(group,title,url,done=false)=>rows.push({group,title,url,done});
  if(c==='math'){
   const progress=read('sui-study-lab-v3-progress',{}),done=mathProgress();
   MATH_KNOWLEDGE.forEach(k=>add(MATH_TOPICS.find(t=>t.id===k.topic)?.title||'Lý thuyết',k.title,'#/math/knowledge/'+k.id,done.includes(k.id)));
   data.samples.forEach(k=>add('Đề mẫu',k.title,'#/samples/'+k.id,(progress.s||[]).includes(k.id)));
   data.reviews.forEach(k=>add('Tự luyện',k.title,'#/practice/'+k.id,(progress.p||[]).includes(k.id)));
  }else if(c==='db'){
   const p=dbProgress();DB_KNOWLEDGE.forEach((k,i)=>add(DB_CHAPTERS.find(t=>t.id===k.chapter)?.title||'Kiến thức',k.title,'#/db/lesson/'+i,p.knowledge.includes(i)));
   DB_PROBLEMS.forEach(k=>add('Đề giữa kỳ',k.title,'#/db/samples/'+k.id,p.samples.includes(k.id)));
   DB_PRACTICE.forEach(k=>add('Tự luyện · Chủ đề '+k.chapter,k.title,'#/db/practice/'+k.id,p.practice.includes(k.id)));
  }else if(c==='oop'){
   const p=oopProgress();OOP_KNOWLEDGE.forEach(k=>add(OOP_TOPICS.find(t=>t.id===k.topic)?.title||'Kiến thức',k.title,'#/oop/lesson/'+k.id,p.knowledge.includes(k.id)));
   OOP_THEORY.forEach(k=>add('Tự luyện lý thuyết',k.title,'#/oop/theory/'+k.id,p.theory.includes(k.id)));
   OOP_LABS.forEach(k=>add('Lab '+k.lab,k.id+' · '+k.title,'#/oop/labs/'+k.id.replace('.','/'),p.labs.includes(k.id)));
  }else{
   const teacher=location.hash.split('/')[2],p=dsaReadProgress();
   for(const t of Object.keys(DSA_TEACHERS)){
    if(DSA_TEACHERS[teacher]&&teacher!==t)continue;
    const prefix=DSA_TEACHERS[teacher]?'':DSA_TEACHERS[t].name+' · ';
    DSA_LESSONS.filter(k=>k.teacher===t).forEach(k=>add(prefix+(DSA_GROUPS[k.group]||'Kiến thức'),k.title,dsaRoute(t,'knowledge',k.id),p[t].lessons.includes(k.id)));
    DSA_PROGRAMS.filter(k=>k.teacher===t).forEach(k=>add(prefix+'Mã & mô phỏng',k.title,dsaRoute(t,'simulations',k.id),p[t].programs.includes(k.id)));
    DSA_EXAMS.filter(k=>k.teacher===t).forEach(k=>add(prefix+'Ôn thi',k.title,dsaRoute(t,'exam',k.id),p[t].exam.includes(k.id)));
   }
  }return rows;
 }
 function updateTree(){
  const tree=document.getElementById('lesson-tree'),rows=catalog(),q=norm(document.getElementById('lesson-search').value),groups=[...new Set(rows.map(x=>x.group))];
  tree.querySelectorAll('details').forEach(d=>expanded.set(course()+':'+d.dataset.group,d.open));
  const shown=rows.filter(x=>norm(x.title+' '+x.group).includes(q));
  tree.innerHTML=groups.map(g=>{const items=shown.filter(x=>x.group===g);if(!items.length)return '';const active=items.some(x=>x.url===location.hash);return `<details class="lesson-group" data-group="${esc(g)}" ${q||active||expanded.get(course()+':'+g)?'open':''}><summary>${esc(g)}</summary>${items.map(x=>`<a href="${x.url}" ${x.url===location.hash?'aria-current="page"':''}>${esc(x.title)}${x.done?'<small>Đã nắm</small>':''}</a>`).join('')}</details>`;}).join('')||'<p class="muted-note">Không tìm thấy bài. Thử từ khóa khác.</p>';
  document.getElementById('lesson-search-status').textContent=q?shown.length+' bài phù hợp':'';
  document.getElementById('course-select').value=course();
 }
 function currentItem(){
  const a=location.hash.split('/'),c=course();
  if(c==='math'){
   if(a[1]==='math'&&a[2]==='knowledge')return MATH_KNOWLEDGE.find(x=>x.id===a[3]);
   if(['samples','practice'].includes(a[1]))return (a[1]==='samples'?data.samples:data.reviews).find(x=>String(x.id)===a[2]);
  }
  if(c==='db')return a[2]==='lesson'?DB_KNOWLEDGE[Number(a[3])]:(a[2]==='practice'?DB_PRACTICE:a[2]==='samples'?DB_PROBLEMS:[]).find(x=>String(x.id)===a[3]);
  if(c==='oop')return a[2]==='lesson'?OOP_KNOWLEDGE.find(x=>x.id===a[3]):a[2]==='labs'?OOP_LABS.find(x=>x.id===a[3]+'.'+a[4]):a[2]==='theory'?OOP_THEORY.find(x=>x.id===a[3]):null;
  if(c==='dsa')return (a[3]==='knowledge'?DSA_LESSONS:['code','simulations'].includes(a[3])?DSA_PROGRAMS:a[3]==='exam'?DSA_EXAMS:[]).find(x=>x.id===a[4]&&x.teacher===a[2]);
 }
 function setMode(next){
  mode=next;revealed=false;
  view.querySelectorAll('.reader-modes button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.readerMode===mode)));
  const original=view.querySelector('.reader-original'),practice=view.querySelector('.reader-practice');
  view.querySelectorAll('.page-description').forEach(x=>x.hidden=mode==='practice');
  if(original)original.hidden=mode==='practice';if(practice)practice.hidden=mode!=='practice';
  if(mode==='practice'&&currentItem()?.kind==='mc'){if(original)original.hidden=false;if(practice)practice.hidden=true;}
  view.querySelectorAll('.reader-quick').forEach(d=>d.open=mode!=='quick');
  view.querySelectorAll('.reader-lesson .db-disclosure:not(.db-selfcheck)').forEach(d=>d.open=mode==='full');
  const reveal=view.querySelector('[data-reader-reveal]');if(reveal){reveal.textContent='Xem đáp án và bài giải';reveal.setAttribute('aria-expanded','false');}
  if(mode==='practice'){if(typeof dsaPause==='function')dsaPause();ReaderSimulation.stop();}
 }
 function refresh(){
  observer.disconnect();
  try{
   const changed=lastHash!==location.hash;
   if(changed){lastHash=location.hash;mode='full';revealed=false;document.getElementById('lesson-search').value='';setDrawer(!mobile()&&!document.body.classList.contains('sidebar-collapsed'),false);}
   updateTree();
   if(view.querySelector('.reader-modes'))return;
   view.classList.add('learning-reader');view.classList.remove('reader-lesson');
   const k=currentItem();if(!k){ReaderSimulation.stop();return;}
   ReaderSimulation.mount(view,k);
   if(location.hash.startsWith('#/math/knowledge/')&&READER_MATH[k.id]){
    const formula=view.querySelector('.math-theory-equation');
    if(formula){const original=document.createElement('p');original.className='muted-note';original.textContent=k.formula;formula.before(original);formula.innerHTML=katex.renderToString(READER_MATH[k.id],{displayMode:true,throwOnError:true,output:'htmlAndMathml',strict:'ignore',trust:false});}
   }
   if(location.hash.includes('/lesson/')){
    view.classList.add('reader-lesson');const h=view.querySelector('h1');if(h)h.textContent=k.title;
    const desc=view.querySelector('.page-description');if(desc)desc.textContent='';
    document.getElementById('top-section').textContent=k.title;
    document.title=k.title+' | Sủi Study Lab v11';
    view.querySelectorAll('.db-disclosure').forEach(d=>{if(!d.classList.contains('db-selfcheck'))d.open=true;});
   }
   const toolbar=document.createElement('div');toolbar.className='reader-modes';toolbar.setAttribute('role','group');toolbar.setAttribute('aria-label','Cách học bài này');
   toolbar.innerHTML=[['full','Học đầy đủ'],['quick','Ôn nhanh'],['practice','Tự luyện']].map(([id,label])=>`<button type="button" data-reader-mode="${id}" aria-pressed="${mode===id}">${label}</button>`).join('');
   const original=document.createElement('div');original.className='reader-original';
   const intro=view.querySelector('.page-intro')||view.querySelector('.detail-heading');
   // Preserve nodes and attached handlers; no cloning of interactive components.
   [...view.childNodes].forEach(n=>{if(n!==intro)original.appendChild(n);});
   view.appendChild(toolbar);view.appendChild(original);
   original.querySelectorAll('section.reading-card').forEach(section=>{
    const h=section.querySelector('h2');if(!h||!/(Ví dụ và bảng|Giải thích các khối code|Mã nguồn đầy đủ|Đầu vào, đầu ra)/i.test(h.textContent))return;
    const detail=document.createElement('details');detail.className='reader-quick';detail.open=true;
    const summary=document.createElement('summary');summary.textContent=h.textContent;section.before(detail);detail.appendChild(summary);detail.appendChild(section);
   });
   const practice=document.createElement('section');practice.className='reader-practice';practice.hidden=true;
   const question=k.question||k.selfTest?.question||k.statement||k.prompt||'Tự trình bày định nghĩa, điều kiện áp dụng và một ví dụ cho “'+k.title+'”. Với thuật toán, giải thích một ca mẫu và độ phức tạp.';
   const hint=k.hint||k.recognize||'Xác định dữ kiện, điều kiện áp dụng và mục tiêu trước. Thử một ví dụ nhỏ, rồi kiểm tra trường hợp biên.';
   practice.innerHTML=`<h2>Tự làm trước khi đối chiếu</h2><p class="db-text">${esc(question)}</p>${!k.question&&!k.selfTest&&!k.statement&&!k.prompt?'<p class="reader-notice">Câu hỏi tự ôn bổ sung; không phải đề gốc của giảng viên.</p>':''}${k.code&&typeof k.code==='string'&&k.kind?`<pre class="oop-code"><code>${esc(k.code)}</code></pre>`:''}<details class="db-disclosure"><summary>Xem gợi ý</summary><div class="db-disclosure-body">${esc(hint)}</div></details><label for="reader-draft">Bài làm nháp</label><textarea id="reader-draft" placeholder="Viết cách hiểu hoặc lời giải của Sủi…"></textarea><p class="reader-notice">Nháp giữ trong phiên đang mở; không tự chấm và không gửi đi.</p><button class="btn" type="button" data-reader-reveal aria-expanded="false">Xem đáp án và bài giải</button>`;
   original.before(practice);practice.querySelector('textarea').value=drafts.get(location.hash)||'';
   const keepReveal=revealed;
   setMode(mode);
   if(keepReveal&&mode==='practice'){revealed=true;original.hidden=false;const b=practice.querySelector('[data-reader-reveal]');b.textContent='Ẩn đáp án và bài giải';b.setAttribute('aria-expanded','true');}
   view.querySelectorAll('.card-kicker').forEach(x=>{x.textContent=x.textContent.replace(/^\d+\s*\/\s*/,'');});
   view.querySelectorAll('.db-table,.math-display,.math-theory-equation,.db-equation,.dsa-tree-scroll').forEach(x=>{x.tabIndex=0;if(!x.hasAttribute('aria-label'))x.setAttribute('aria-label','Nội dung có thể cuộn ngang');});
  }finally{observer.observe(view,{childList:true});}
 }
 document.getElementById('sidebar-toggle').addEventListener('click',()=>setDrawer(mobile()?!document.body.classList.contains('drawer-open'):document.body.classList.contains('sidebar-collapsed')));
 document.getElementById('sidebar-close').addEventListener('click',()=>setDrawer(false));
 document.getElementById('sidebar-backdrop').addEventListener('click',()=>setDrawer(false));
 document.getElementById('course-select').addEventListener('change',e=>{location.hash=home[e.target.value];});
 document.getElementById('lesson-search').addEventListener('input',updateTree);
 sidebar.addEventListener('click',e=>{if(e.target.closest('a')&&mobile()){setDrawer(false,false);document.getElementById('main-content').focus();}});
 view.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.readerMode)setMode(b.dataset.readerMode);
  if(b.hasAttribute('data-reader-reveal')){revealed=!revealed;if(revealed)view.querySelectorAll('.reader-original details').forEach(d=>{if(/đáp án|lời giải|giải và giải thích/i.test(d.querySelector('summary')?.textContent||''))d.open=true;});view.querySelector('.reader-original').hidden=!revealed;b.textContent=revealed?'Ẩn đáp án và bài giải':'Xem đáp án và bài giải';b.setAttribute('aria-expanded',String(revealed));}
  if(b.hasAttribute('data-done')||b.hasAttribute('data-db-kind')||b.hasAttribute('data-oop-done')||b.hasAttribute('data-dsa-done')||b.hasAttribute('data-math-done'))setTimeout(updateTree,0);
 });
 view.addEventListener('input',e=>{if(e.target.id==='reader-draft')drafts.set(location.hash,e.target.value);});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.body.classList.contains('drawer-open')){setDrawer(false);return;}
  if(e.key==='Tab'&&document.body.classList.contains('drawer-open')){
   const nodes=[...sidebar.querySelectorAll('button,select,input,a,summary')].filter(x=>x.getClientRects().length&&!x.disabled),first=nodes[0],last=nodes[nodes.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
 });
 matchMedia('(max-width:900px)').addEventListener('change',()=>{document.body.classList.remove('drawer-open');document.querySelector('.right-panel').inert=false;document.getElementById('sidebar-backdrop').hidden=true;sidebar.removeAttribute('role');sidebar.removeAttribute('aria-modal');setDrawer(!mobile()&&!document.body.classList.contains('sidebar-collapsed'),false);});
 observer=new MutationObserver(refresh);refresh();
 window.LearningReader={refresh,catalog,setMode,currentItem};
 if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
