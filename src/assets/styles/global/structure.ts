import brand from '../variables/brand';
import fonts from '../variables/fonts';

/** Global structure styles */
const globalStructure = `
html {
	font-family: ${fonts.family.main};
	font-size: ${fonts.sizes.base};

	body {
		line-height: ${fonts.lineHeight.base};
		font-weight: ${fonts.weights.default};
		background: ${brand.white};
		color: ${brand.text};
		font-size: ${fonts.sizes.standard};
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: ${fonts.family.main};

		@media only screen and (min-width: 768px) {
			background: ${brand.white};
		}

		input, select, textarea, button {
			font-family: ${fonts.family.main};
		}
	}

	* {
		box-sizing: border-box;
	}

    a {
        text-decoration: none;
        font-weight: 600;
        color: ${brand.text};
    }
}
`;

export default globalStructure;
