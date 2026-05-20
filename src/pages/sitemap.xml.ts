import type { APIRoute } from 'astro'
import { getAllPostsForSitemap } from '../lib/wordpress'

export const GET: APIRoute = async () => {
    const posts = await getAllPostsForSitemap() as Array<{ slug: string; modified: string }>

    const urls = [
        { loc: import.meta.env.PRODUCTION_URL, lastmod: new Date().toISOString() },
        { loc: `${import.meta.env.PRODUCTION_URL}blog/`, lastmod: new Date().toISOString() },
        ...posts.map((p) => ({
            loc: `${import.meta.env.PRODUCTION_URL}blog/${p.slug}/`,
            lastmod: p.modified,
        })),
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
        .join('\n')}
</urlset>`

    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}