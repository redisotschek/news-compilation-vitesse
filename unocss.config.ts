import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'icon-btn':
                'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
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
  theme: {
    colors: {
      primary: {
        50: '#ABC2FF',
        100: '#96B3FF',
        200: '#6D95FF',
        300: '#4577FF',
        400: '#1a5Add',
        500: '#0042c2',
        600: '#0033BA',
        700: '#002382',
        800: '#001137',
        900: '#000525',
      },
      secondary: {
        50: '#FCE9FD',
        100: '#F9D7EF',
        200: '#F3B4D3',
        300: '#EE91B7',
        400: '#E86D9B',
        500: '#E34A7F',
        600: '#D4215C',
        700: '#A4194B',
        800: '#731239',
        900: '#420A28',

      },
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose'.split(' '),
})
