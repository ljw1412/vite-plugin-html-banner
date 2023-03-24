import type { Plugin } from 'vite';
type PluginOptions = string | string[] | {
    content: string | string[];
};
declare const _default: (options?: PluginOptions) => Plugin;
export default _default;
