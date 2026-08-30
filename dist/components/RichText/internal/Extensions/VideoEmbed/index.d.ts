import { Node } from '@tiptap/core';
type VideoProvider = "youtube" | "vimeo";
interface VideoEmbedInfo {
    provider: VideoProvider;
    videoId: string;
    embedUrl: string;
}
export declare function parseVideoUrl(url: string): VideoEmbedInfo | null;
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        videoEmbed: {
            setVideoEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
export declare const VideoEmbedExtension: Node<any, any>;
export {};
