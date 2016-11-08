/**
 * Created by bgllj on 2016/11/7.
 */

import IchiColor from "./../src/ichi-color.js"
window.IchiColor = IchiColor;
window.Color = IchiColor;


function fiter_IchiColor(x)
{
    return IchiColor(x)._rgb();
}
Vue.filter('ichiColor', fiter_IchiColor);



var mainVue = new Vue({
    el: 'body',
    data: {
        msg: "sadfasdfasdfds",
        colors:[1,2,3,4,5,6,1,7,8,9,],


    },
    components: {
    }
})


window.mainVue = mainVue;


console.log("133323")