import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'comic': ['Comic Neue', 'cursive'],
				'pixel': ['Press Start 2P', 'monospace'],
				'cyber': ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'electric-lime': 'hsl(var(--electric-lime))',
				'hot-pink': 'hsl(var(--hot-pink))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'acid-yellow': 'hsl(var(--acid-yellow))',
				'toxic-green': 'hsl(var(--toxic-green))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '0', /* Sharp 90s edges */
				md: '0',
				sm: '0'
			},
			backgroundImage: {
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'starfield': 'var(--bg-starfield)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'rainbow': {
					'0%': { color: 'hsl(0 100% 60%)' },
					'16.66%': { color: 'hsl(60 100% 60%)' },
					'33.33%': { color: 'hsl(120 100% 60%)' },
					'50%': { color: 'hsl(180 100% 60%)' },
					'66.66%': { color: 'hsl(240 100% 60%)' },
					'83.33%': { color: 'hsl(300 100% 60%)' },
					'100%': { color: 'hsl(0 100% 60%)' }
				},
				'marquee': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor'
					},
					'50%': { 
						textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'blink': 'blink 1s infinite',
				'rainbow': 'rainbow 2s infinite',
				'marquee': 'marquee 15s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
