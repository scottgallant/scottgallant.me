module.exports = {
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