import puppeteer from 'puppeteer'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

const routes = [
  '/', '/about', '/portfolio', '/services',
  '/services/construction', '/services/interior-design',
  '/services/lighting-design', '/contact', '/blog', '/media'
]

const PORT = 4173
const BASE_URL = `http://localhost:${PORT}`

async function main() {
  // Serve the built dist folder
  const server = exec(`npx serve -s dist -l ${PORT}`)
  await new Promise((res) => setTimeout(res, 2000)) // wait for server to boot

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (const route of routes) {
    const url = BASE_URL + route
    console.log('Prerendering:', url)
    await page.goto(url, { waitUntil: 'networkidle0' })
    const html = await page.content()

    const outDir = route === '/' ? 'dist' : path.join('dist', route)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), html, { encoding: 'utf8' })
  }

  await browser.close()
  server.kill()
  console.log('Prerendering complete.')
}

main()