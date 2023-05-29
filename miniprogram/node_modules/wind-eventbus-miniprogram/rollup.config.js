import { terser } from 'rollup-plugin-terser'
import babel from "@rollup/plugin-babel"
export default {
	input: 'src/index.js',
	output: [{
		file: './eventbus.min.js',
		format: 'cjs',
		name:'eventbusjs',
		exports: 'auto'
	}],
	plugins: [
		terser(),
		babel({ babelHelpers: 'bundled' })
	]
};