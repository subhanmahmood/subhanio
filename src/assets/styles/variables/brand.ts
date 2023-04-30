interface IColor {
	lightest: string;
	extraLight: string;
	lighter: string;
	kindaLight: string;
	light: string;
	primary: string;
	dark: string;
	darker: string;
	extraDark: string;
	darkest: string;
}

type TColors = 'blue' | 'red' | 'gray';

type TColorConfig = Record<TColors, IColor>;

export const colors: TColorConfig = {
	gray: {
		lightest: '#f9fafb',
		extraLight: '#f3f4f6',
		lighter: '#e5e7eb',
		kindaLight: '#d1d5db',
		light: '#9ca3af',
		primary: '#6b7280',
		dark: '#4b5563',
		darker: '#374151',
		extraDark: '#1f2937',
		darkest: '#111827',
	},
	blue: {
		lightest: '#eff6ff',
		extraLight: '#dbeafe',
		lighter: '#bfdbfe',
		kindaLight: '#93c5fd',
		light: '#60a5fa',
		primary: '#3b82f6',
		dark: '#2563eb',
		darker: '#1d4ed8',
		extraDark: '#1e40af',
		darkest: '#1e3a8a',
	},
	red: {
		lightest: '#fef2f2',
		extraLight: '#fee2e2',
		lighter: '#fecaca',
		kindaLight: '#fca5a5',
		light: '#f87171',
		primary: '#ef4444',
		dark: '#dc2626',
		darker: '#b91c1c',
		extraDark: '#991b1b',
		darkest: '#7f1d1d',
	},
};

const brand = {
	white: '#FFFFFF',
	text: colors.gray.darkest,
	dark: colors.gray.extraDark,
	darkest: colors.gray.darkest,
	link: colors.blue.primary,
	validationError: colors.red.darker,
	placeholder: colors.gray.primary,
};

export default brand;
