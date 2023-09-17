import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				primary: '#ff9902',
				secondary: '#161d25',
				bg: '#f2f2f5',
				black: '#2e3239',
				aqua: '#268697'
			}
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' }
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)'
				},
				'50%': {
					opacity: '0.3'
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)'
				}
			}
		},
		animation: {
			opacity: 'animationOpacity .5s ease-in-out',
			scaleIn: 'scaleIn .35s ease-in-out'
		}
	},
	plugins: []
}
export default config
