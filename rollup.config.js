import postcssPresetEnv from "postcss-preset-env";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
	input: "./src/FontPicker.tsx",
	output: [
		{
			file: pkg.main,
			format: "cjs",
		},
		{
			file: pkg.module,
			format: "es",
		},
	],
	plugins: [
		typescript(),
		postcss({
			plugins: [postcssPresetEnv],
		}),
	],
};
