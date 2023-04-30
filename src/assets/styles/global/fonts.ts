import fonts from '../variables/fonts';

const globalFonts = `
h1, h2, h3, h4, h5, h6 {
	margin: 0 0 20px 0;
	padding: 0;
	line-height: ${fonts.headings.lineHeight};
	font-family: ${fonts.headings.family};
	font-weight: ${fonts.headings.weight};
}

h1 {
	font-size: ${fonts.sizes.h1};
}

h2 {
	font-size: ${fonts.sizes.h2};
}

h3 {
	font-size: ${fonts.sizes.h3};
}

h4 {
	font-size: ${fonts.sizes.h4};
}

p {
	margin: 0;
}

strong {
	font-weight: ${fonts.weights.regular};
}
`;

export default globalFonts;
