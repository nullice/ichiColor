/**
 * Created by bgllj on 2016/11/7.
 */

import IchiColor from "./../src/ichi-color.js"


var mainVue = new Vue({
    el: 'body',
    data: {},
    components: {
        // include the required component
        // in the options
        "attr-panel": AttrPanel,
        "layers-panel": LayerSelectors,
        "var-panel": VarPanel,
        "expression-panel": ExpressionPanel
    }
})

window.mainVue = mainVue;
console.log("133323")