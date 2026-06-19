const hashString = (value: string): number => {
	return value.split('').reduce((hash, char) => {
		return (hash * 31 + char.charCodeAt(0)) >>> 0;
	}, 7);
};

const hslToHex = (hue: number, saturation: number, lightness: number): string => {
	const s = saturation / 100;
	const l = lightness / 100;
	const k = (n: number) => (n + hue / 30) % 12;
	const a = s * Math.min(l, 1 - l);
	const f = (n: number) => {
		const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0');
	};

	return `#${f(0)}${f(8)}${f(4)}`;
};

export const chipStyleForContext = (context: string) => {
	const hue = hashString(context) % 360;
	const backgroundColor = hslToHex(hue, 68, 92);
	const color = hslToHex(hue, 40, 30);

	return {
		backgroundColor,
		color,
		border: `1px solid ${hslToHex(hue, 40, 70)}`,
		borderRadius: '999px',
		padding: '0.125rem 0.5rem',
	};
};

export const generateUid = (prefix = ''): string => {
	const randomPart = Math.random().toString(36).slice(2, 10);
	return `${prefix}${randomPart}`;
};
