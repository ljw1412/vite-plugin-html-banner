declare function getContent(options: PluginOptions): string[];
declare function createBanner(content: string[]): string;
type PluginOptions = string | string[] | {
    content: string | string[];
};
