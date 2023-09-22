/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL,
		APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		UPLOADS_URL: process.env.NEXT_PUBLIC_UPLOADS_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			'picsum.photos',
			'assets.stickpng.com',
			'w7.pngwing',
			'imgpng',
			'avatars.githubusercontent.com'
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.NEXT_PUBLIC_UPLOADS_URL}/:path*`
			}
		]
	}
}

module.exports = nextConfig
