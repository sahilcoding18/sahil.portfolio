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
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
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
        },
        apple: {
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            light: '#F5F5F7',
            dark: '#333333'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'tilt': {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(1deg)'
          },
          '75%': {
            transform: 'rotate(-1deg)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px 0 rgba(255, 255, 255, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.4)'
          }
        },
        'particles-float': {
          '0%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)'
          }
        },
        'float-3d': {
          '0%, 100%': {
            transform: 'translateZ(0px)'
          },
          '50%': {
            transform: 'translateZ(20px)'
          }
        },
        'rotate-3d': {
          '0%': {
            transform: 'rotateY(0deg) rotateX(0deg)'
          },
          '25%': {
            transform: 'rotateY(2deg) rotateX(1deg)'
          },
          '50%': {
            transform: 'rotateY(0deg) rotateX(2deg)'
          },
          '75%': {
            transform: 'rotateY(-2deg) rotateX(1deg)'
          },
          '100%': {
            transform: 'rotateY(0deg) rotateX(0deg)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'slow-float': 'float 8s ease-in-out infinite',
        'tilt-hover': 'tilt 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'particles-float': 'particles-float 25s linear infinite',
        'float-3d': 'float-3d 8s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 12s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
