import json
from pathlib import Path
p=Path(__file__).resolve().parent
html=(p/'template.html').read_text(encoding='utf-8')
html=html.replace('/* INLINE_STYLE */',(p/'styles.css').read_text(encoding='utf-8')+'\n'+(p/'theme.css').read_text(encoding='utf-8')+'\n'+(p/'vendor/katex/katex.min.css').read_text(encoding='utf-8').replace('url(fonts/','url(vendor/katex/fonts/')+'\n'+(p/'db-math.css').read_text(encoding='utf-8'))
db='\n'.join('const '+name+'='+json.dumps(json.loads((p/file).read_text(encoding='utf-8')),ensure_ascii=False).replace('</','<\\/')+';' for name,file in [('READER_MATH','math-tex.json'),('DB_PROBLEMS','db-data.json'),('DB_CHAPTERS','db-chapters.json'),('DB_KNOWLEDGE','db-knowledge.json'),('DB_PRACTICE','db-practice.json'),('OOP_TOPICS','oop-topics.json'),('OOP_KNOWLEDGE','oop-knowledge.json'),('OOP_THEORY','oop-theory.json'),('OOP_LABS','oop-labs.json'),('OOP_SOURCES','oop-sources.json'),('DSA_LESSONS','dsa-lessons.json'),('DSA_PROGRAMS','dsa-programs.json'),('DSA_SOURCES','dsa-sources.json'),('DSA_EXAMS','dsa-exams.json'),('MATH_KNOWLEDGE','math-knowledge.json'),('MATH_TOPICS','math-topics.json'),('MATH_SOURCES','math-sources.json')])
html=html.replace('/* INLINE_JS */',(p/'vendor/katex/katex.min.js').read_text(encoding='utf-8')+'\n'+db+'\n'+(p/'db-math.js').read_text(encoding='utf-8')+'\n'+(p/'db.js').read_text(encoding='utf-8')+'\n'+(p/'oop.js').read_text(encoding='utf-8')+'\n'+(p/'dsa.js').read_text(encoding='utf-8')+'\n'+(p/'math.js').read_text(encoding='utf-8')+'\n'+(p/'dsa-tables.js').read_text(encoding='utf-8')+'\n'+(p/'app.js').read_text(encoding='utf-8')+'\n'+(p/'reader-simulations.js').read_text(encoding='utf-8')+'\n'+(p/'reader.js').read_text(encoding='utf-8'))
embedded=json.dumps(json.loads((p/'data.json').read_text(encoding='utf-8')),ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
html=html.replace('/* INLINE_DATA */',embedded)
(p/'index.html').write_text(html,encoding='utf-8')
print('Built',p/'index.html',round(len(html)/1024,1),'KiB')

# Offline cache includes the complete reader and bundled source/code downloads.
import hashlib
assets=['./','./index.html']+[ './'+str(f.relative_to(p)) for folder in ['vendor','csdl-assets','math-assets','dsa-assets','dsa-code','oop-code','source-originals'] for f in sorted((p/folder).rglob('*')) if f.is_file() ]
version=hashlib.sha256((html+''.join(hashlib.sha256((p/a[2:]).read_bytes()).hexdigest() for a in assets if a not in ['./','./index.html'])).encode()).hexdigest()[:16]
sw="""'use strict';
const CACHE='sui-v11-"""+version+"""';
const ASSETS="""+json.dumps(assets,ensure_ascii=False)+""";
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sui-v11-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  if(event.request.mode==='navigate'){
   try{return await fetch(event.request);}catch{return (await cache.match(event.request,{ignoreSearch:true}))||(await cache.match('./index.html'))||Response.error();}
  }
  const hit=await cache.match(event.request,{ignoreSearch:true});return hit||fetch(event.request);
 })());
});
"""
(p/'sw.js').write_text(sw,encoding='utf-8')
print('Offline assets:',len(assets),'cache:',version)
