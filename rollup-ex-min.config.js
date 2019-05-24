/**
 * Created by nullice on 2017/4/5.
 */
import uglify from 'rollup-plugin-minify-es';
export default {
    entry: 'src/ichi-color-extension.js',
    format: 'umd',
    moduleName:"expandIchiColor",
    dest: 'bin/ichi-color-extension.min.js', // equivalent to --output,
    plugins: [
        uglify()
    ]
};
