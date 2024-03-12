/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		keyframes:{
			fadein: {
				'0%':{opacity:0,transform:"scale(0.7)"},
				'100%':{opacity:1,transform:"scale(1)"}
			},
			fadeout: {
				'0%':{opacity:1},
				'100%':{opacity:0}
			},
			slidein: {
				'0%':{opacity:0,transform:"translateY(10%)"},
				'100%':{opacity:1,transform:"translateY(0px)"}
			}
		},
		animation:{
			fadein:'fadein 0.5s ease-out',
			fadeout:'fadeout 0.3s ease-out',
			slidein:'slidein 0.3s ease-out'
		}
	},
	plugins: [],
}
