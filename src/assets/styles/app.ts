import { createGlobalStyle } from 'styled-components';

import fontFaces from './global/font-faces';
import globalFonts from './global/fonts';
import globalStructure from './global/structure';

/** Global styles */
export const GlobalStyle = createGlobalStyle`
	${fontFaces}
	${globalFonts}
	${globalStructure}
`;
