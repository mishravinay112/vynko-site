# Build the six guide pages in every language from the English ones, plus hreflang links, the Guides
# section on each language's home page, and the sitemap. Translations: tr/<folder>.json ({english: translated}).
import re, json, os, sys, html as H
SITE = os.environ.get('SITE', os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..') + '/')
BASE = 'https://mishravinay112.github.io/vynko-site/'
GUIDES = ['tab-screenshot', 'full-page-screenshot', 'window-screenshot', 'full-screen-screenshot', 'screen-recorder-with-audio', 'screen-recorder-with-webcam']
FOLDERS = ['ar','bn','cs','da','de','el','es','fi','fr','gu','hi','hu','it','ja','kn','ko','ml','mr','nl','no','pl','pt-br','ro','ru','sv','ta','te','tr','uk']
CODE = lambda f: 'pt-BR' if f == 'pt-br' else f
HERE = os.path.dirname(os.path.abspath(__file__))
ORDER = ['en','ar','bn','cs','da','de','el','es','fr','gu','hi','it','ja','kn','ko','hu','ml','mr','nl','no','pl','pt-br','ro','ru','fi','sv','ta','te','tr','uk']  # same order as the home page
url = lambda f, g: BASE + (f + '/' if f != 'en' else '') + g + '.html'
def alternates(g, indent=''):
    return ''.join(f'{indent}<link rel="alternate" hreflang="{CODE(f)}" href="{url(f, g)}">\n' for f in ORDER) + f'{indent}<link rel="alternate" hreflang="x-default" href="{url("en", g)}">\n'

def english(g):
    s = open(SITE + g + '.html').read()
    s = s.replace('<meta name="vynko-langs" content="en">\n', '')  # every language has these pages now
    s = re.sub(r'(?:<link rel="alternate" hreflang=[^\n]*\n)+', '', s)
    return s.replace('<link rel="icon" href="logo.svg"', alternates(g) + '<link rel="icon" href="logo.svg"')

def translate(s, T, f, g):
    def t(x):
        if x not in T or not T[x].strip(): raise SystemExit(f'{f}/{g}: missing translation for {x!r}')
        return T[x]
    sub = lambda pat, fn, s: re.sub(pat, fn, s, flags=re.S)
    s = sub(r'<title>(.*?)</title>', lambda m: f'<title>{t(m.group(1))}</title>', s)
    s = sub(r'(<meta (?:name="description"|property="og:(?:title|description)") content=")(.*?)(">)', lambda m: m.group(1) + H.escape(H.unescape(t(m.group(2))), quote=True) + m.group(3), s)
    def ld(m):
        data = json.loads(m.group(1))
        def walk(x, k=None):
            if isinstance(x, dict): return {kk: walk(v, kk) for kk, v in x.items()}
            if isinstance(x, list): return [walk(v, k) for v in x]
            if isinstance(x, str) and k in ('name', 'description', 'text'): return H.unescape(re.sub('<[^>]+>', '', t(x)))
            return x
        data = walk(data)
        for node in data['@graph']:
            if node.get('@type') == 'WebPage': node['@id'] = node['url'] = url(f, g); node['inLanguage'] = CODE(f)
        return '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=1) + '\n</script>'
    s = sub(r'<script type="application/ld\+json">\n?(.*?)\n?</script>', ld, s)
    head, body = s.split('<main>', 1)
    for tag in ('h1', 'h2', 'summary'):
        body = sub(fr'<{tag}>(.*?)</{tag}>', lambda m, tag=tag: f'<{tag}>{t(m.group(1))}</{tag}>', body)
    body = sub(r'<p class="lede">(.*?)</p>', lambda m: f'<p class="lede">{t(m.group(1))}</p>', body)
    body = sub(r'(<a class="cta"[^>]*>)(.*?)</a>', lambda m: m.group(1) + t(m.group(2)) + '</a>', body)
    body = sub(r'alt="(.*?)"', lambda m: f'alt="{H.escape(H.unescape(t(m.group(1))), quote=True)}"', body)
    body = sub(r'</summary><p>(.*?)</p>', lambda m: f'</summary><p>{t(m.group(1))}</p>', body)
    def li(m):
        x = m.group(1); a = re.match(r'(<a href="[^"]+"><b>)(.*?)(</b></a>)(.*)', x, re.S)
        return '<li>' + (a.group(1) + t(a.group(2)) + a.group(3) + t(a.group(4)) if a else t(x)) + '</li>'
    body = sub(r'<li>(.*?)</li>', li, body)
    s = head + '<main>' + body
    s = s.replace('<html lang="en">', f'<html lang="{CODE(f)}"' + (' dir="rtl"' if f == 'ar' else '') + '>')
    for a in ('logo.svg', 'icon.png', 'fonts/jost.woff2', 'site.css', 'site.js', 'shot-'):
        s = s.replace(f'href="{a}', f'href="../{a}').replace(f'src="{a}', f'src="../{a}')
    s = re.sub(r'(<link rel="canonical" href=")[^"]+', lambda m: m.group(1) + url(f, g), s)
    s = re.sub(r'(<meta property="og:url" content=")[^"]+', lambda m: m.group(1) + url(f, g), s)
    return s

def home_guides(f, T):
    p = SITE + f + '/index.html'; s = open(p).read()
    if 'id="guides"' in s: s = re.sub(r'\n  <h2 id="guides">.*?</ul>\n', '\n', s, flags=re.S)
    en = open(SITE + 'index.html').read()
    block = re.search(r'  <h2 id="guides">.*?</ul>\n', en, re.S).group(0)
    block = block.replace('>Guides<', '>' + T['Guides'] + '<')
    def li(m):
        a = re.match(r'(<a href="[^"]+"><b>)(.*?)(</b></a>)(.*)', m.group(1), re.S)
        return '<li>' + a.group(1) + T[a.group(2)] + a.group(3) + T[a.group(4)] + '</li>'
    block = re.sub(r'<li>(.*?)</li>', li, block)
    anchor = '  <h2 id="compare">'
    assert s.count(anchor) == 1, p
    open(p, 'w').write(s.replace(anchor, block + '\n' + anchor))

def sitemap():
    p = SITE + 'sitemap.xml'; s = open(p).read()
    s = re.sub(r'  <url><loc>[^<]*/(?:' + '|'.join(GUIDES) + r')\.html</loc><lastmod>[^<]*</lastmod></url>\n', '', s)
    s = re.sub(r'  <url>\n    <loc>[^<]*(?:' + '|'.join(GUIDES) + r')\.html</loc>.*?</url>\n', '', s, flags=re.S)
    add = ''
    for g in GUIDES:
        alts = alternates(g, '    ').replace('<link ', '<xhtml:link ').replace('">\n', '"/>\n')
        for f in ORDER:
            add += f'  <url>\n    <loc>{url(f, g)}</loc><lastmod>2026-11-17</lastmod>\n{alts}  </url>\n'
    open(p, 'w').write(s.replace('</urlset>', add + '</urlset>'))

if __name__ == '__main__':
    langs = sys.argv[1:] or FOLDERS
    for g in GUIDES:
        if 'vynko-langs' in open(SITE + g + '.html').read():
            page = english(g)
            open(SITE + g + '.html', 'w').write(page)
    for f in langs:
        T = json.load(open(f'{HERE}/tr/{f}.json'))
        for g in GUIDES: open(f'{SITE}{f}/{g}.html', 'w').write(translate(open(SITE + g + '.html').read(), T, f, g))
        home_guides(f, T)
        print('built', f)
    if not sys.argv[1:]: sitemap(); print('sitemap updated')
