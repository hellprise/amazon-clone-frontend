/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: ['loremflickr.com', 'www.aptronixindia.com', 'picsum.photos', 'assets.stickpng.com', 'w7.pngwing', 'imgpng']
	}
}

module.exports = nextConfig
