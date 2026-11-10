import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'

await mkdir('public/images', { recursive: true })
const source = 'src/assets/images/office-original.png'
const portrait = 'src/assets/images/professional-original.png'
await sharp(portrait).resize(1000, 1250, { fit: 'cover', position: 'north' }).webp({ quality: 83 }).toFile('public/images/professional-hero.webp')
await sharp(portrait).resize(600, 645, { fit: 'cover', position: 'north' }).webp({ quality: 83 }).toFile('public/images/professional-mobile.webp')
await sharp(portrait).resize(400, 500, { fit: 'cover', position: 'north' }).jpeg({ quality: 80, mozjpeg: true }).toFile('public/images/professional-fallback.jpg')
await sharp(source).resize(800, 960, { fit: 'cover', position: 'left' }).webp({ quality: 82 }).toFile('public/images/office-detail.webp')

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#101c2b"/><path d="M76 100h80" stroke="#b69a70" stroke-width="2"/><text x="76" y="180" fill="#c5a77d" font-family="Georgia" font-size="24">WR TECH · PORTFÓLIO</text><text x="76" y="305" fill="#f6f3ed" font-family="Georgia" font-size="68">Monteiro &amp;</text><text x="76" y="385" fill="#f6f3ed" font-family="Georgia" font-size="68">Associados</text><text x="80" y="445" fill="#b69a70" font-family="Arial" font-size="15" letter-spacing="8">ADVOCACIA</text><path d="M76 495h570" stroke="#49515b"/><text x="76" y="542" fill="#d7c5a9" font-family="Arial" font-size="17">Projeto demonstrativo · Escritório fictício</text><text x="76" y="575" fill="#b6bec8" font-family="Arial" font-size="14">Não oferece serviços jurídicos.</text></svg>`
await sharp(Buffer.from(svg)).composite([{ input: await sharp(source).resize(440, 630, { fit: 'cover' }).toBuffer(), left: 760, top: 0 }]).png().toFile('public/og-demo.png')
await writeFile('public/images/README.txt', 'Retrato do Hero: profissional inteiramente fictícia gerada por IA, apenas para apresentação visual do projeto; não representa uma advogada real. Original: src/assets/images/professional-original.png. Ambiente ilustrativo da seção Sobre e imagem social: src/assets/images/office-original.png, sem localização real. Variantes geradas por scripts/prepare-assets.mjs.\n')
console.info('Imagens WebP e Open Graph prontas em public/.')
