/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.youtube.com',
                pathname: '/s/desktop/5766dddc/img/favicon_96x96.png',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
        ],
    },
}

export default nextConfig
