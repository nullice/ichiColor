/**
 * Created by nullice on 2017/4/5.
 */
import uglify from 'rollup-plugin-minify-es';
export default {
    entry: 'src/ichi-color.js',
    format: 'umd',
    moduleName:"IchiColor",
    dest: 'bin/ichi-color.min.js', // equivalent to --output,
    plugins: [
        uglify()
    ]
};
