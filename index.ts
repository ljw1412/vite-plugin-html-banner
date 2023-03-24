function getContent(options: PluginOptions): string[] {
  if (Array.isArray(options)) {
    return options
  } else if (typeof options === 'string') {
    return [options]
  } else if (typeof options === 'object') {
    return getContent(options.content)
  }
  return []
}

function createBanner(content: string[]) {
  return `<!--${content.join('\n')}-->\n`
}

type PluginOptions = string | string[] | { content: string | string[] }

module.exports = function (options: PluginOptions) {
  const config = { content: getContent(options) }

  return {
    name: 'vite-plugin-html-banner',
    transformIndexHtml(html: string) {
      return `${createBanner(config.content)}${html}`
    }
  }
}
