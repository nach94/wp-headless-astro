const WP_URL = import.meta.env.WORDPRESS_API_URL

const fetchWP = (path) =>
    fetch(`${WP_URL}${path}`, { cache: 'no-store' }).then((r) => r.json())

export const getCollection = (postType = 'posts', { page = 1, perPage = 10, categories = null } = {}) => {
    let query = `/wp-json/wp/v2/${postType}?_embed&per_page=${perPage}&page=${page}`
    if (categories) query += `&categories=${categories}`
    return fetchWP(query)
}

export const getSingleBySlug = async (postType = 'posts', slug) => {
    const items = await fetchWP(`/wp-json/wp/v2/${postType}?_embed&slug=${slug}`)
    return items[0]
}

export const getAllForPaths = (postType = 'posts') =>
    fetchWP(`/wp-json/wp/v2/${postType}?_fields=slug,modified&per_page=100`)


export const getPosts = (page, perPage) => getCollection('posts', { page, perPage })
export const getPostBySlug = (slug) => getSingleBySlug('posts', slug)
export const getCategories = () => fetchWP(`/wp-json/wp/v2/categories`)
export const getPostsByCategory = (categoryId, page = 1) => getCollection('posts', { page, categories: categoryId })
export const getAllPostsForSitemap = () => getAllForPaths('posts')
