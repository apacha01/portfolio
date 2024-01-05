import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'skreg': 'SK-Regular',
			'smb': 'SuperMarioBros',
			'p2': 'Player2',
			'arcade': 'Arcade',
		},
		colors: {
			...colors,
			'mario-blue': '#049cd8',
			'mario-red': '#e52521',
			'mario-yellow': '#fbd000',
			'mario-green': '#43b047',
			// https://www.spriters-resource.com/nes/supermariobros/sheet/52571/
			'mario-sky': {
				'overworld': '#6185f8',
				'underworld': '#000000',
				'underwater': '#2038ec',
				'castle': '#000000'
			},
			'mario-sky-font': '#fafafa',
			'mario-ground&block': {
				'overworld': {
					'light': '#ffcec5',
					'main': '#9c4a00',
					'borders': '#000000'
				},
				'underworld': {
					'light': '#b5efef',
					'main': '#007b8c',
					'borders': '#000000'
				},
				'underwater': {
					'light': '#bdf7ad',
					'main': '#109400',
					'borders': '#000000'
				},
				'castle': {
					'light': '#ffffff',
					'main': '#adadad',
					'borders': '#636363'
				}
			},
			'mario-cloud&water': {
				'overworld': {
					'light': '#ffffff',
					'main': '#63adff',
					'borders': '#000000'
				},
				'underworld': {
					'light': '#ffffff',
					'main': '#63adff',
					'borders': '#007b8c'
				},
				'underwater': {
					'light': '#ffffff',
					'main': '#4242ff',
					'borders': '#000000'
				},
				'castle': {
					'light': '#ffffff',
					'main': '#b53121',
					'borders': '#636363'
				}
			},
			'mario-coin': {
				'overworld': {
					'light': '#e69c21',
					'main': '#9c4a00',
					'borders': '#000000'
				},
				'underworld': {
					'light': '#e69c21',
					'main': '#9c4a00',
					'borders': '#007b8c'
				},
				'underwater': {
					'light': '#e69c21',
					'main': '#4242ff',
					'borders': '#000000'
				},
				'castle': {
					'light': '#e69c21',
					'main': '#4242ff',
					'borders': '#636363'
				}
			},
			'mario-scenery': {
				'overworld': {
					'light': '#8cd600',
					'main': '#109400',
					'borders': '#000000'
				},
				'underworld': {
					'light': '#8cd600',
					'main': '#109400',
					'borders': '#084a00'
				},
				'underwater': {
					'light': '#b5217b',
					'main': '#4242ff',
					'borders': '#ff6bce'
				},
				'castle': {
					'light': '#ffffff',
					'main': '#adadad',
					'borders': '#636363'
				}
			}
		}
	},
	plugins: [],
}