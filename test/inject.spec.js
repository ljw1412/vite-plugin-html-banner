'use strict'

const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const assert = require('assert')
const vite = require('vite')
const BannerPlugin = require('../dist/index.cjs')

function resolve(...pathname) {
  return path.resolve(__dirname, ...pathname)
}

const outputDir = resolve('dist')
const htmlFilePath = resolve('dist', 'index.html')

function getConfig(options) {
  return vite.defineConfig({
    root: __dirname,
    plugins: [BannerPlugin(options)]
  })
}

describe('vite-plugin-html-banner', (ctx) => {
  afterEach(() => {
    rimraf.sync(outputDir)
  })

  it('string', async () => {
    const banner = 'hello world'
    await vite.build(getConfig(banner))
    const html = fs.readFileSync(htmlFilePath, 'utf-8')
    assert(/^<\!--hello world-->/.test(html))
    return
  })

  it('array', async () => {
    const banner = ['', 'hello world', '']
    await vite.build(getConfig(banner))
    const html = fs.readFileSync(htmlFilePath, 'utf-8')
    assert(/^<\!--\nhello world\n-->/.test(html))
    return
  })

  it('object<banner:string>', async () => {
    const banner = { content: 'hello world' }
    await vite.build(getConfig(banner))
    const html = fs.readFileSync(htmlFilePath, 'utf-8')
    assert(/^<\!--hello world-->/.test(html))
    return
  })

  it('object<banner:array>', async () => {
    const banner = { content: ['', 'hello world', ''] }
    await vite.build(getConfig(banner))
    const html = fs.readFileSync(htmlFilePath, 'utf-8')
    assert(/^<\!--\nhello world\n-->/.test(html))
    return
  })
})
