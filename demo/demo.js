/**
 * Created by bgllj on 2016/11/7.
 */

import _IchiColor from "./../"
import IchiColorEx from "./../bin/ichi-color-extension.js"


var IchiColor = IchiColorEx(_IchiColor)

window.IchiColorEx = IchiColorEx;
window.IchiColor = IchiColor;
window.Color = IchiColor;


function fiter_IchiColor(x)
{
    return IchiColor(x)._rgb();
}


window.cc = IchiColor("#F24")

Vue.filter('ichiColor', fiter_IchiColor);
var mainVue = new Vue({
    el: '#colordesk',
    methods: {
        utime: function ()
        {
            var randomIndex = Math.floor(Math.random() * (this.propertyList.length - 1))
            var self = this
            this.showProperty = this.propertyList[randomIndex]
            setTimeout(function ()
            {
                self.utime()
            }, 4200)
        }
    },
    name: "ffd",
    ready: function ()
    {
        this.utime()
    },

    data: {
        msg: "sadfasdfasdfds",
        colors: [1, 2, 3, 4, 5, 6, 1, 7, 8, 9,],
        adjust: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,],
        IchiColor: IchiColor,
        propertyList: ["r", "g", "b", "argb", "rgb", "rgba", "hex", "hsl.l", "hsl.h", "hsl.s", "hsv.v", "hsv.s", "hsv.v", "hwb.w", "ex.lab.l", "ex.lab.a", "ex.lab.b", "int" ,"ex.xyz.z"],
        scolor1: window.cc,
        showProperty: "r",

    }
    ,
    computed: {

        showValue: {
            get: function ()
            {
                var ts = this.showProperty.split(".")
                if (ts.length === 1)
                {
                    return this.scolor1[ts[0]]
                }
                else if (ts.length === 2)
                {
                    return this.scolor1[ts[0]][ts[1]]
                }
                else if (ts.length === 3)
                {
                    return this.scolor1[ts[0]][ts[1]][ts[2]]
                }
            }
        }
    },
    components: {}
})


window.mainVue = mainVue;
window.adds = 1;

function scanInt()
{
    setTimeout(function ()
    {
        cc.int += window.adds;
        if (cc.int < 0xffffff)
        {
            scanInt();
        }
    }, 1);
}
window.scanInt = scanInt;

// _cheak_with_onecolor();
// TEST_all()
function TEST_all()
{
    _test_hex();
}


function _cheak_with_onecolor()
{
    var hexs = []
    console.time("[_cheak_with_onecolor]")
    var color = new Color();
    for (var i = 0; i < 0xffffff; i++)
    {
        color.set(i)
        if (color.hsl.h < 0)
        {
            console.log(color.getRGB(), color.getHSL())
        }
        if (color.hsl.s < 0)
        {
            console.log(color.getRGB(), color.getHSL())
        }
        if (color.hsl.l < 0)
        {
            console.log(color.getRGB(), color.getHSL())
        }

        // hexs.push(color.hex)
        // var oneColor = one.color(hexs[i])
        // check(oneColor.hue()*100, color.hsl.h, "oneColor.hue(),color.hsl.h")
        // check(oneColor.saturation()*100, color.hsl.s, "oneColor.saturation(),color.hsl.s")
        // check(oneColor.lightness()*100, color.hsl.l, "oneColor.lightness(),color.hsl.l")
        // console.log(color.getRGB(), color.getHSL())
    }
    console.timeEnd("[_cheak_with_onecolor]")


    function check(a, b, errInfo)
    {
        if (a != b)
        {
            console.log(a + "!=" + b, errInfo)
        }
    }
}


function _test_hex()
{
    var hexs = []
    console.time("[get hexs]")
    var color = new Color();
    for (var i = 0; i < 0xffffff; i++)
    {
        color.set(i)
        hexs.push(color.hex)
    }
    console.timeEnd("[get hexs]")
    console.log(hexs)
//
//
    console.time("color.hex")
    var color = new Color();
    for (var i = 0; i < hexs.length; i++)
    {
        color.set(hexs[i])
        if (color.hex != hexs[i])
        {
            console.log("color.hex：err：", color.hex, hexs[i])
        }

    }
    console.timeEnd("color.hex")

    console.time("one.color.hex()")

    for (var i = 0; i < hexs.length; i++)
    {
        if (one.color(hexs[i]).hex() != hexs[i])
        {
            console.log("one.color.hex()：err：", one.color(hexs[i]).hex(), hexs[i])
        }
    }
    console.timeEnd("one.color.hex()")
}

//
//


//---------------------------------------------------------------------
// console.time("Color(i).int() !== i")
// for (var i = 0; i < 0xffffff; i++)
// {
//     if (Color(i).int() !== i)
//     {
//         console.log(`Color(${i}).int()== ${Color(i).int()}!== ${i}`);
//     }
//
// }
// console.timeEnd("Color(i).int() !== i")
//---------------------------------------------------------------------
// console.time("color.set(i) !== i")
// var color = new Color();
// for (var i = 0; i < 0xffffff; i++)
// {
//     color.set(i)
//     if (color.int() !== i)
//     {
//         console.log(`Color().set(${i})== ${Color(i).int()}!== ${i}`);
//     }
// }
// console.timeEnd("color.set(i) !== i")
//---------------------------------------------------------------------


console.log("133323")
