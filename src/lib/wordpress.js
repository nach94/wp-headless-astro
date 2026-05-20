const WP_URL = import.meta.env.WORDPRESS_API_URL

const fetchWP = (path) =>
    fetch(`${WP_URL}${path}`, { cache: 'no-store' }).then((r) => r.json())

export const getPosts = (page = 1, perPage = 10) =>
    fetchWP(`/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`)

export const getPostBySlug = async (slug) => {
    const posts = await fetchWP(`/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    return posts[0]
}

export const getCategories = () =>
    fetchWP(`/wp-json/wp/v2/categories`)

export const getPostsByCategory = (categoryId, page = 1) =>
    fetchWP(`/wp-json/wp/v2/posts?_embed&categories=${categoryId}&page=${page}`)

export const getAllPostsForSitemap = () =>
    fetchWP(`/wp-json/wp/v2/posts?_fields=slug,modified&per_page=100`)