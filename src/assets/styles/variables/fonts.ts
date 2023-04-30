const fonts = {
	family: {
		main: '"Inter", arial, helvetica, sans-serif',
	},
	sizes: {
		base: '16px',
		standard: '1rem',
		small: '0.875rem',
		xSmall: '0.75rem',
		xxSmall: '0.625rem',
		med: '1.25rem',
		large: '1.5rem',
		larger: '2rem',
		xLarge: '2.5rem',
		xxLarge: '3.375rem',
		get h1() {
			return this.xxLarge;
		},
		get h2() {
			return this.xLarge;
		},
		get h3() {
			return this.large;
		},
		get h4() {
			return this.med;
		},
	},
	weights: {
		regular: 400,
		medium: 500,
		semibold: 600,
		get default() {
			return this.regular;
		},
	},
	headings: {
		get family() {
			return fonts.family.main;
		},
		get weight() {
			return fonts.weights.regular;
		},
		lineHeight: 1.4,
	},
	lineHeight: {
		reset: 1,
		small: 1.2,
		base: 1.5,
		med: 1.7,
		large: 2,
	},
};

export default fonts;
