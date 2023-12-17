import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	presetWind,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

export default defineConfig({
	presets: [
		presetWind(),
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono',
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	safelist: 'prose m-auto text-left'.split(' '),
	rules: [
		['text-accent', { color: 'var(--n-color-accent)' }],
	],
	shortcuts: [
		{ logo: 'i-logos-vue w-6em h-6em transform transition-800' },
		{ 'plain-link': 'no-underline text-accent hover:text-accent hover:brightness-75' },
	],
})
