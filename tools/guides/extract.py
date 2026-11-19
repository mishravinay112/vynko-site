# Collect every translatable string in the six English guide pages into en.json ({english: ""}).
import re, json, html
import os
SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..') + '/'
GUIDES = ['tab-screenshot', 'full-page-screenshot', 'window-screenshot', 'full-screen-screenshot', 'screen-recorder-with-audio', 'screen-recorder-with-webcam']
def strings(s):
    out = []
    out += re.findall(r'<title>(.*?)</title>', s)
    out += re.findall(r'<meta (?:name="description"|property="og:(?:title|description)") content="(.*?)">', s)
    ld = re.search(r'<script type="application/ld\+json">(.*?)</script>', s, re.S).group(1)
    def walk(x, k=None):
        if isinstance(x, dict): [walk(v, kk) for kk, v in x.items()]
        elif isinstance(x, list): [walk(v, k) for v in x]
        elif isinstance(x, str) and k in ('name', 'description', 'text'): out.append(x)
    walk(json.loads(ld))
    body = s[s.index('<main>'):]
    out += re.findall(r'<h1>(.*?)</h1>', body)
    out += re.findall(r'<h2>(.*?)</h2>', body)
    out += re.findall(r'<p class="lede">(.*?)</p>', body)
    out += re.findall(r'<a class="cta"[^>]*>(.*?)</a>', body)
    out += re.findall(r'alt="(.*?)"', body)
    out += re.findall(r'<summary>(.*?)</summary>', body)
    out += re.findall(r'</summary><p>(.*?)</p>', body)
    for li in re.findall(r'<li>(.*?)</li>', body):
        m = re.match(r'<a href="[^"]+"><b>(.*?)</b></a>(.*)', li)
        out += [m.group(1), m.group(2)] if m else [li]
    return out
allk = {}
for g in GUIDES:
    for x in strings(open(SITE + g + '.html').read()):
        allk[x] = ''
allk['Guides'] = ''  # the heading of the guides list on each language's home page
json.dump(allk, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'en.json'), 'w'), ensure_ascii=False, indent=1)
print(len(allk), 'strings', sum(len(k) for k in allk), 'chars')
