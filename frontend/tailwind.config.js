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
			primaryColor: 'hsl(var(--blue-primary))',
			blue10: 'hsl(var(--blue-10))',
			blue20: 'hsl(var(--blue-20))',
			blue30: 'hsl(var(--blue-30))',
			blue40: 'hsl(var(--blue-40))',
			blue60: 'hsl(var(--blue-60))',
			blue70: 'hsl(var(--blue-70))',
			blue80: 'hsl(var(--blue-80))',
			blue90: 'hsl(var(--blue-90))',

			// Grays
			gray10: 'hsl(var(--gray-10))',
			gray20: 'hsl(var(--gray-20))',
			gray30: 'hsl(var(--gray-30))',
			gray40: 'hsl(var(--gray-40))',
			primaryGray: 'hsl(var(--gray-primary))',
			gray60: 'hsl(var(--gray-60))',
			gray70: 'hsl(var(--gray-70))',
			gray80: 'hsl(var(--gray-80))',
			gray90: 'hsl(var(--gray-90))',
			

			'gray10-transparent': 'hsl(var(--gray-10-transparent))',
			'gray30-transparent': 'hsl(var(--gray-30-transparent))',
			'gray60-transparent': 'hsl(var(--gray-60-transparent))',
  		},
  		keyframes: {
  			swing: {
  				'0%, 100%': { transform: 'rotate(-3deg)', transformOrigin: 'top' },
  				'50%': { transform: 'rotate(3deg)', transformOrigin: 'top' },
  			},
  		},
  		animation: {
  			swing: 'swing 2s ease-in-out infinite',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
