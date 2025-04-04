/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
	extend: {
	  screens: {
		xs: '360px',
	  },
	  colors: {
		main: 'var(--main)',
		overlay: 'var(--overlay)',
		bg: 'var(--bg)',
		bw: 'var(--bw)',
		blank: 'var(--blank)',
		text: 'var(--text)',
		mtext: 'var(--mtext)',
		border: 'var(--border)',
		ring: 'var(--ring)',
		ringOffset: 'var(--ring-offset)',
		
		secondaryBlack: '#212121', 
	  },
	  borderRadius: {
		base: '4px'
	  },
	  boxShadow: {
		shadow: 'var(--shadow)'
	  },
	  translate: {
		boxShadowX: '4px',
		boxShadowY: '4px',
		reverseBoxShadowX: '-4px',
		reverseBoxShadowY: '-4px',
	  },
	  fontWeight: {
		base: '500',
		heading: '700',
	  },
	  fontFamily: {
		courgette: ['Courgette', 'cursive'],
		roboto: ['Roboto Slab', 'serif'],
	  },
	},
  },
  plugins: [],
}



