/* Educational algorithms executed in the browser. These do not compile C++/C#. */
'use strict';
const ReaderSimulation={
 timer:null,index:0,steps:[],kind:'',
 closure(seed,fds){
  const have=new Set(seed),fmt=()=>'{'+[...have].sort().join(', ')+'}',steps=[{label:'Khởi tạo',state:fmt(),reason:'Bao đóng luôn chứa chính tập thuộc tính ban đầu.'}];
  let changed=true;
  while(changed){changed=false;for(const [left,right] of fds){
   if([...left].every(x=>have.has(x))){const extra=[...right].filter(x=>!have.has(x));if(extra.length){extra.forEach(x=>have.add(x));changed=true;steps.push({label:left+' → '+right,state:fmt(),reason:'Đã có toàn bộ '+left+'. Bổ sung '+extra.join(', ')+'.'});}}
  }}
  steps.push({label:'Điểm cố định',state:fmt(),reason:'Không còn phụ thuộc nào bổ sung thuộc tính mới. Đây là bao đóng cần tìm.'});return steps;
 },
 fibonacci(n){
  if(!Number.isInteger(n)||n<0||n>30)throw Error('n phải là số nguyên từ 0 đến 30.');
  const values=[0,1],steps=[{label:'Điều kiện đầu',state:'F₀ = 0; F₁ = 1',reason:'Chọn quy ước F₀ = 0, F₁ = 1.'}];
  for(let i=2;i<=n;i++){values[i]=values[i-1]+values[i-2];steps.push({label:'Tính F'+i,state:`F${i} = ${values[i-1]} + ${values[i-2]} = ${values[i]}`,reason:'Dùng đúng hai số hạng liền trước theo Fₙ = Fₙ₋₁ + Fₙ₋₂.'});}
  steps.push({label:'Kết quả',state:'F'+n+' = '+values[n],reason:'Dừng tại chỉ số yêu cầu; không nhầm chỉ số n với số lượt cộng.'});return steps;
 },
 stop(){clearInterval(this.timer);this.timer=null;const b=document.getElementById('reader-sim-play');if(b){b.textContent='Chạy';b.setAttribute('aria-pressed','false');}},
 render(){const s=this.steps[this.index];if(!s)return;document.getElementById('reader-sim-state').textContent=s.state;document.getElementById('reader-sim-reason').textContent=s.reason;document.getElementById('reader-sim-count').textContent=`${this.index+1} / ${this.steps.length} · ${s.label}`;document.getElementById('reader-sim-prev').disabled=this.index===0;document.getElementById('reader-sim-next').disabled=this.index===this.steps.length-1;},
 load(){this.stop();this.index=0;const el=document.getElementById('reader-sim-input');this.steps=this.kind==='closure'?this.closure(el.value,[['A','BC'],['B','D'],['CD','E']]):this.fibonacci(Number(el.value));this.render();},
 mount(host,item){
  this.stop();const title=item.title||'';
  const isDB=location.hash.startsWith('#/db/'),isMath=location.hash.startsWith('#/math/knowledge/');
  const kind=isDB&&/bao đóng/i.test(title)?'closure':isMath&&/Fibonacci/i.test(title)?'fibonacci':null;
  if(!kind)return;this.kind=kind;
  const section=document.createElement('section');section.className='reading-card reader-simulation';
  section.innerHTML=`<h2>Mô phỏng ${kind==='closure'?'bao đóng':'truy hồi Fibonacci'}</h2><p class="reader-notice">Thuật toán chạy trong trình duyệt. Ví dụ bổ sung để học cách làm; không thay dữ kiện đề gốc.</p>${kind==='closure'?'<p>R(A, B, C, D, E); F = {A → BC, B → D, CD → E}.</p>':'<p>F₀ = 0; F₁ = 1; Fₙ = Fₙ₋₁ + Fₙ₋₂ với n ≥ 2.</p>'}<div class="dsa-player-controls"><label>${kind==='closure'?'Tập ban đầu':'Chỉ số n'}<select id="reader-sim-input" class="select">${(kind==='closure'?['A','C','AB']:['0','1','2','5','10','20','30']).map(v=>`<option>${v}</option>`).join('')}</select></label><label>Tốc độ<select id="reader-sim-speed" class="select"><option value="1400">Chậm</option><option value="800">Vừa</option><option value="350">Nhanh</option></select></label><button class="btn" id="reader-sim-prev">Trước</button><button class="btn" id="reader-sim-next">Tiếp theo</button><button class="btn" id="reader-sim-play" aria-pressed="false">Chạy</button><button class="btn" id="reader-sim-reset">Đặt lại</button></div><p id="reader-sim-count"></p><div class="focus-block"><strong id="reader-sim-state"></strong><p id="reader-sim-reason" role="status" aria-live="polite"></p></div>`;
  host.appendChild(section);
  section.querySelectorAll('button').forEach(b=>b.type='button');
  document.getElementById('reader-sim-input').onchange=()=>this.load();
  document.getElementById('reader-sim-speed').onchange=()=>this.stop();
  document.getElementById('reader-sim-prev').onclick=()=>{this.stop();this.index=Math.max(0,this.index-1);this.render();};
  document.getElementById('reader-sim-next').onclick=()=>{this.stop();this.index=Math.min(this.steps.length-1,this.index+1);this.render();};
  document.getElementById('reader-sim-reset').onclick=()=>this.load();
  document.getElementById('reader-sim-play').onclick=()=>{if(this.timer){this.stop();return;}if(this.index===this.steps.length-1)this.index=0;const b=document.getElementById('reader-sim-play');b.textContent='Dừng';b.setAttribute('aria-pressed','true');this.render();this.timer=setInterval(()=>{if(!document.getElementById('reader-sim-state')){this.stop();return;}this.index++;this.render();if(this.index===this.steps.length-1)this.stop();},Number(document.getElementById('reader-sim-speed').value));};
  this.load();
 }
};
window.addEventListener('hashchange',()=>ReaderSimulation.stop());
