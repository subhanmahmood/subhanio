const animations = {
	slideInRight: {
		initial: { x: '100vw' },
		animate: { x: 0 },
		transition: { duration: 0.2 },
	},
	slideInDown: {
		initial: { y: '-100vh' },
		animate: { y: 0 },
		transition: { duration: 0.2 },
	},
	slideInLeft: {
		initial: { x: '-100vw' },
		animate: { x: 0 },
		transition: { duration: 0.2 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { delay: 0.1, duration: 0.2 },
	},
	fadeInUp: {
		initial: { y: '100%', opacity: 0 },
		animate: { y: 0, opacity: 1 },
		transition: { delay: 0.1, duration: 0.2 },
	},
	fadeInDown: {
		initial: { y: '-100%', opacity: 0 },
		animate: { y: 0, opacity: 1 },
		transition: { delay: 0.1, duration: 0.2 },
	},
	fadeInRight: {
		initial: { x: '100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 0.2 },
	},
	fadeInLeft: {
		initial: { x: '-100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 0.2 },
	},
	fadeOutDown: {
		initial: { y: 0, opacity: 1 },
		animate: { y: '100%', opacity: 0 },
		transition: { delay: 0.1, duration: 0.2 },
	},
	fadeOutUp: {
		initial: { y: '100%', opacity: 1 },
		animate: { y: '-100%', opacity: 0 },
		transition: { delay: 0.1, duration: 0.2 },
	},
	skewInUp: {
		initial: { y: '150%', skew: '-7deg' },
		animate: { y: '0', skew: '0deg' },
		transition: { delay: 0.1, duration: 1 },
	},
};

export default animations;
