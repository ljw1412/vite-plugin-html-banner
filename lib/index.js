function getContent(options) {
    if (Array.isArray(options)) {
        return options;
    }
    else if (typeof options === 'string') {
        return [options];
    }
    else if (typeof options === 'object') {
        return getContent(options.content);
    }
    return [];
}
function createBanner(content) {
    return `<!--${content.join('\n')}-->\n`;
}
export default (options = '') => {
    const config = { content: getContent(options) };
    return {
        name: 'vite-plugin-html-banner',
        transformIndexHtml(html) {
            return `${createBanner(config.content)}${html}`;
        }
    };
};
