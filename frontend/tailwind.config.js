/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			iceland: ['Iceland', ...defaultTheme.fontFamily.sans],
			texturina: ['Texturina', ...defaultTheme.fontFamily.serif]
	    },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},

			// Blues
			primaryColor: '#069AE5',
			blue10: '#B9E7FD',
			blue20: '#88D5FC',
			blue30: '#56C4FB',
			blue40: '#24B2F9',
			blue60: '#0579B3',
			blue70: '#03407C',
			blue80: '#02294F',
			blue90: '#010F1E',

			// Grays
			gray10: '#DDDADA',
			gray20: '#C4BFBF',
			gray30: '#ACA5A5',
			gray40: '#948A8A',
			primaryGray: '#7A7070',
			gray60: '#453F3F',
			gray70: '#2B2727',
			gray80: '#2B2727',
			grauy90: '#100F0F',
			

			'gary10-transparent': 'hsl(0, 4%, 86%, 33%)',
			'gray30-transparent': 'hsl(0, 4%, 66%, 32%)',
			'gray60-transparent': 'hst(0, 4%, 26%, 32%',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
