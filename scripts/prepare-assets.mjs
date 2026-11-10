import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'

await mkdir('public/images', { recursive: true })
const source = 'src/assets/images/office-original.png'
await sharp(source).resize(1000, 1250, { fit: 'cover' }).webp({ quality: 83 }).toFile('public/images/office-hero.webp')
await sharp(source).resize(600, 645, { fit: 'cover', position: 'centre' }).webp({ quality: 81 }).toFile('public/images/office-mobile.webp')
await sharp(source).resize(800, 960, { fit: 'cover', position: 'left' }).webp({ quality: 82 }).toFile('public/images/office-detail.webp')

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#101c2b"/><path d="M76 100h80" stroke="#b69a70" stroke-width="2"/><text x="76" y="180" fill="#c5a77d" font-family="Georgia" font-size="24">WR TECH · PORTFÓLIO</text><text x="76" y="305" fill="#f6f3ed" font-family="Georgia" font-size="68">Monteiro &amp;</text><text x="76" y="385" fill="#f6f3ed" font-family="Georgia" font-size="68">Associados</text><text x="80" y="445" fill="#b69a70" font-family="Arial" font-size="15" letter-spacing="8">ADVOCACIA</text><path d="M76 495h570" stroke="#49515b"/><text x="76" y="542" fill="#d7c5a9" font-family="Arial" font-size="17">Projeto demonstrativo · Escritório fictício</text><text x="76" y="575" fill="#b6bec8" font-family="Arial" font-size="14">Não oferece serviços jurídicos.</text></svg>`
await sharp(Buffer.from(svg)).composite([{ input: await sharp(source).resize(440, 630, { fit: 'cover' }).toBuffer(), left: 760, top: 0 }]).png().toFile('public/og-demo.png')
await writeFile('public/images/README.txt', 'Imagens de ambiente geradas por IA para esta demonstração, sem pessoas, marcas ou localização real. Fonte original: src/assets/images/office-original.png. Variantes geradas por scripts/prepare-assets.mjs. Não são fotografias de um escritório existente.\n')
console.info('Imagens WebP e Open Graph prontas em public/.')
