const BASE_URL_PROD = process.env.NEXT_PUBLIC_PROD_URL;

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${BASE_URL_PROD}/sitemap.xml`,
    }
}