import json
from pathlib import Path
p=Path(__file__).resolve().parent
html=(p/'template.html').read_text(encoding='utf-8')
html=html.replace('/* INLINE_STYLE */',(p/'styles.css').read_text(encoding='utf-8')+'\n'+(p/'theme.css').read_text(encoding='utf-8')+'\n'+(p/'vendor/katex/katex.min.css').read_text(encoding='utf-8').replace('url(fonts/','url(vendor/katex/fonts/')+'\n'+(p/'db-math.css').read_text(encoding='utf-8'))
db='\n'.join('const '+name+'='+json.dumps(json.loads((p/file).read_text(encoding='utf-8')),ensure_ascii=False).replace('</','<\\/')+';' for name,file in [('DB_PROBLEMS','db-data.json'),('DB_CHAPTERS','db-chapters.json'),('DB_KNOWLEDGE','db-knowledge.json'),('DB_PRACTICE','db-practice.json'),('OOP_TOPICS','oop-topics.json'),('OOP_KNOWLEDGE','oop-knowledge.json'),('OOP_THEORY','oop-theory.json'),('OOP_LABS','oop-labs.json'),('OOP_SOURCES','oop-sources.json'),('DSA_LESSONS','dsa-lessons.json'),('DSA_PROGRAMS','dsa-programs.json'),('DSA_SOURCES','dsa-sources.json'),('DSA_EXAMS','dsa-exams.json'),('MATH_KNOWLEDGE','math-knowledge.json'),('MATH_TOPICS','math-topics.json'),('MATH_SOURCES','math-sources.json')])
html=html.replace('/* INLINE_JS */',(p/'vendor/katex/katex.min.js').read_text(encoding='utf-8')+'\n'+db+'\n'+(p/'db-math.js').read_text(encoding='utf-8')+'\n'+(p/'db.js').read_text(encoding='utf-8')+'\n'+(p/'oop.js').read_text(encoding='utf-8')+'\n'+(p/'dsa.js').read_text(encoding='utf-8')+'\n'+(p/'math.js').read_text(encoding='utf-8')+'\n'+(p/'dsa-tables.js').read_text(encoding='utf-8')+'\n'+(p/'app.js').read_text(encoding='utf-8'))
embedded=json.dumps(json.loads((p/'data.json').read_text(encoding='utf-8')),ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
html=html.replace('/* INLINE_DATA */',embedded)
(p/'index.html').write_text(html,encoding='utf-8')
print('Built',p/'index.html',round(len(html)/1024,1),'KiB')
