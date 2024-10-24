// components/SharePost.tsx
'use client';

import React from "react";
import {
    IconBrandFacebookFilled,
    IconBrandGithub,
    IconBrandDiscord,
    IconBrandStackoverflow,
    IconBrandXFilled
} from "@tabler/icons-react";
import { LinkIcon } from "@nextui-org/react";

type ShareDialogProps = {
    url: string;
    isOpen: boolean;
    onClose: () => void;
};

const ShareDialog: React.FC<ShareDialogProps> = ({ url, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Share this post</h2>
                <div className="flex gap-4 mb-4">
                    <a
                        href={`https://x.com/compose/post?url=${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on X (Twitter)"
                    >
                        <IconBrandXFilled size={32} />
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                    >
                        <LinkIcon />
                    </a>
                    <a
                        href={`https://github.com/orgs/community/discussions/new?category=sponsors`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on GitHub"
                    >
                        <IconBrandGithub size={32} />
                    </a>
                    <a
                        href={`https://discord.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Discord"
                    >
                        <IconBrandDiscord size={32} />
                    </a>
                    <a
                        href={`https://stackoverflow.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Stack Overflow"
                    >
                        <IconBrandStackoverflow size={32} />
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                    >
                        <IconBrandFacebookFilled size={32} />
                    </a>
                </div>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ShareDialog;
