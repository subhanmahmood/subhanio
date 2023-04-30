import { css, SimpleInterpolation } from 'styled-components';

// Media rules interface
interface IMediaRules {
	[index: string]: string;
}

/** Responsive breakpoints */
export const breakpoints = {
	xlDesktop: 1536,
	desktop: 1280,
	tablet: 768,
	mobile: 767,
	xsMobile: 370,
};

/** Media rules */
export const mediaRules: IMediaRules = {
	/* older mobiles */
	xsMobile: `only screen and (max-width: ${breakpoints.xsMobile}px)`,
	/* older mobiles up */
	xsMobileUp: `only screen and (min-width: ${breakpoints.xsMobile + 1}px)`,
	/* only mobile */
	mobile: `only screen and (max-width: ${breakpoints.mobile}px)`,
	/* only mobile and up */
	mobileUp: `only screen and (min-width: ${breakpoints.mobile}px)`,
	/* only mobile portrait */
	mobilePortrait: `only screen and (max-width: ${breakpoints.mobile}px) and (orientation: portrait)`,
	/* only tablet */
	tablet: `only screen and (min-width: ${breakpoints.mobile + 1}px) and ${
		breakpoints.desktop - 1
	}px)`,
	/* only tablet portrait */
	tabletPortrait: `only screen and (max-width: ${breakpoints.tablet}px) and (orientation: portrait)`,
	/* tablet below */
	tabletDown: `only screen and (max-width: ${breakpoints.tablet}px)`,
	/* tablet above */
	tabletUp: `only screen and (min-width: ${breakpoints.tablet}px)`,
	/* desktop below */
	desktopDown: `only screen and (max-width: ${breakpoints.desktop}px)`,
	/* desktop above */
	desktopUp: `only screen and (min-width: ${breakpoints.desktop}px)`,
	/* xlDesktop below */
	xlDesktopDown: `only screen and (max-width: ${breakpoints.xlDesktop}px)`,
	/* xlDesktop above */
	xlDesktopUp: `only screen and (min-width: ${breakpoints.xlDesktop}px)`,
};

// Media query function
export const mq = (
	Object.keys(mediaRules) as Array<keyof typeof mediaRules>
).reduce((acc, label) => {
	acc[label] = (
		first: TemplateStringsArray,
		...interpolations: SimpleInterpolation[]
	) =>
		css`
			@media ${mediaRules[label]} {
				${css(first, ...interpolations)}
			}
		`;
	return acc;
}, {} as { [index: string]: Function });
