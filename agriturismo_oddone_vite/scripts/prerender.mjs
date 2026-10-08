import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { PAGE_METADATA } from "../src/metadata.js";

const projectRoot = process.cwd();
const distDirectory = resolve(projectRoot, "dist");
const serverBundle = resolve(projectRoot, "dist-ssr", "entry-server.js");
const { render } = await import(pathToFileURL(serverBundle));

const escapeHtml = (value) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const replaceTag = (html, pattern, replacement, label) => {
    if (!pattern.test(html)) {
        throw new Error(`Could not find ${label} in the built HTML.`);
    }
    return html.replace(pattern, replacement);
};

const template = await readFile(resolve(distDirectory, "index.html"), "utf8");

for (const [route, metadata] of Object.entries(PAGE_METADATA)) {
    const pageHtml = render(route);
    let html = replaceTag(
        template,
        /<div id="root"><\/div>/,
        `<div id="root">${pageHtml}</div>`,
        "the app root",
    );
    html = replaceTag(
        html,
        /<title>[^<]*<\/title>/,
        `<title>${escapeHtml(metadata.title)}</title>`,
        "the page title",
    );
    html = replaceTag(
        html,
        /<meta\s+name="description"[^>]*>/,
        `<meta name="description" content="${escapeHtml(metadata.description)}">`,
        "the page description",
    );
    html = replaceTag(
        html,
        /<meta\s+property="og:title"[^>]*>/,
        `<meta property="og:title" content="${escapeHtml(metadata.title)}">`,
        "the Open Graph title",
    );
    html = replaceTag(
        html,
        /<meta\s+property="og:description"[^>]*>/,
        `<meta property="og:description" content="${escapeHtml(metadata.description)}">`,
        "the Open Graph description",
    );

    const outputPath =
        route === "/"
            ? resolve(distDirectory, "index.html")
            : resolve(distDirectory, route.slice(1), "index.html");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
}

console.log(`Prerendered ${Object.keys(PAGE_METADATA).length} routes.`);
