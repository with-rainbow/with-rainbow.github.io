import type { UseHeadInput } from "unhead"
import type { MergeHead } from "zhead"

const title = "Rainbow Watcher"
const description = "Rainbow Watcher's Portfolio"
const domain = "rainbowatcher.github.io"
const url = `https://${domain}/`
const image = "/favicon.svg"

export const globalHead: UseHeadInput<MergeHead> = {
    link: [
        {
            href: "/favicon-dark.svg",
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/svg+xml",
        },
        {
            href: "/favicon.svg",
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/svg+xml",
        },
        {
            href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            rel: "license",
        },
    ],
    meta: [
        { content: "#00aba9", name: "msapplication-TileColor" },
        // facebook
        { content: "website", property: "og:type" },
        { content: title, property: "og:title" },
        { content: description, property: "og:description" },
        { content: url, property: "og:url" },
        { content: image, property: "og:image" },
        // twitter / x
        { content: "summary_large_image", name: "twitter:card" },
        { content: title, name: "twitter:title" },
        { content: description, name: "twitter:description" },
        { content: image, name: "twitter:image" },
        { content: url, property: "twitter:url" },
        { content: domain, property: "twitter:domain" },

        { content: description, name: "description" },
        {
            content: "#ffffff",
            media: "(prefers-color-scheme: light)",
            name: "theme-color",
        },
        {
            content: "#00aba9",
            media: "(prefers-color-scheme: dark)",
            name: "theme-color",
        },
    ],
    script: [
        {
            innerHTML: `const fadeUps = document.querySelectorAll("fade-up")
        for (let i = 0; i <= fadeUps.length; i++) {
            setTimeout(() => {
                fadeUps[i].classList.toggle("animate-in")
            }, i * 100)
        }`,
        },
    ],
    title,
}
