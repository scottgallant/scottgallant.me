module.exports = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/home",
            },
        ];
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}