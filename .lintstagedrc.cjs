module.exports = {
	// Type check TypeScript files
	'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'src/**/*.(ts|tsx|js)': (filenames) => [
		`yarn eslint --fix ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')}`,
	],
};
