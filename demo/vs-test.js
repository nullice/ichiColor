/**
 * Created by nullice on 2017/4/6.
 */


if (typeof exports === "object" && typeof module !== "undefined")
{
    console.log("running [node.js]")
    global.IchiColor = require("./../bin/ichi-color")
    global.IchiColorEx = require("./../bin/ichi-color-extension")
    global.OneColor = require("./vs/one-color")
    global.THREE = require("./vs/three")
    global.tinycolor = require("./vs/tinycolor-min")
}


if (typeof  one === "object")
{
    (function (g)
    {
        if (typeof  g.OneColor !== "object")
        {
            g.OneColor = one.color
        }

    })(this)
}

var ichiColor = IchiColor()
var threeColor = new THREE.Color()


///---------------- 计时工具：

var timeLogs = {}
function timeStart(title)
{
    if (title === undefined)
    {
        var title = "_000_"
    }

    if (typeof console === "object" && typeof  console.time === "function")
    {
        console.time(title)
    }

    if (typeof process === "object")
    {
        var _time = process.uptime()
        _time = _time * 1000

    } else
    {
        var _time = (new Date()).getTime()

    }

    timeLogs[title] = _time
    return _time
}


function timeEnd(title)
{
    if (title === undefined)
    {
        var title = "_000_"
    }

    if (typeof console === "object" && typeof  console.time === "function")
    {
        console.timeEnd(title)
    }


    if (typeof process === "object")
    {
        var _time = process.uptime() * 1000

    } else
    {
        var _time = (new Date()).getTime()
    }


    return _time - timeLogs[title]
}

//----------------


function test(all)
{
    // var rgbList = getRandamRGBList(30000)

    // TSET_scan_allRGB("hex2rgb2hex - ichiColor", ichiColor_hex2rgb2hex_unit)
    // TSET_scan_allRGB("hex2rgb2hex - tinycolor", tinycolor_hex2rgb2hex_unit)
    // TSET_scan_RGBList("hex2rgb2hex - tinycolor", tinycolor_hex2rgb2hex_unit, rgbList)
    // TSET_scan_RGBList("hex2rgb2hex - ichiColor", ichiColor_hex2rgb2hex_unit, rgbList)
    // TSET_scan_RGBList("hex2rgb2hex - three.js", threeColor_hex2rgb2hex_unit, rgbList)
    // TSET_scan_RGBList("hex2rgb2hex - one-color.js", oneColor_hex2rgb2hex_unit, rgbList)

    if (all)
    {
        var rgbList = "ALLRGB"
        var test_count = "全部 RGB "

    } else
    {
        var rgbList = getRandamRGBList(50000)
        var test_count = "随机 " + rgbList.length + " 颜色"
    }


    var reorpt1 = test_task(test_count + " rgb -> hex -> rgb",
        [
            {name: "tinycolor", func: tinycolor_hex2rgb2hex_unit, param: rgbList},
            {name: "ichiColor", func: ichiColor_hex2rgb2hex_unit, param: rgbList},
            {name: "three.js", func: threeColor_hex2rgb2hex_unit, param: rgbList},
            {name: "one-color", func: oneColor_hex2rgb2hex_unit, param: rgbList},
            // {name: "colorjs", func: colorjs_hex2rgb2hex_unit, param: rgbList},

        ]
    )


    var reorpt2 = test_task(test_count + " rgb -> hex",
        [
            {name: "tinycolor", func: tinycolor_rgb2hex_unit, param: rgbList},
            {name: "ichiColor", func: ichiColor_rgb2hex_unit, param: rgbList},
            {name: "three.js", func: threeColor_rgb2hex_unit, param: rgbList},
            {name: "one-color", func: oneColor_rgb2hex_unit, param: rgbList},
            // {name: "colorjs", func: colorjs_hex2rgb2hex_unit, param: rgbList},

        ]
    )


    var reorpt3 = test_task(test_count + " rgb -> hsl ( object{h255,s100,l100} )",
        [
            {name: "tinycolor", func: tinycolor_rgb2hsl_unit, param: rgbList},
            {name: "ichiColor", func: ichiColor_rgb2hsl_unit, param: rgbList},
            {name: "three.js", func: threeColor_rgb2hsl_unit, param: rgbList},
            {name: "one-color", func: oneColor_rgb2hsl_unit, param: rgbList},
            // {name: "colorjs", func: colorjs_hex2rgb2hex_unit, param: rgbList},

        ]
    )


    var reorpt4 = test_task(test_count + " rgb ",
        [
            {name: "tinycolor", func: tinycolor_rgb_unit, param: rgbList},
            {name: "ichiColor", func: ichiColor_rgb_unit, param: rgbList},
            {name: "three.js", func: threeColor_rgb_unit, param: rgbList},
            {name: "one-color", func: oneColor_rgb_unit, param: rgbList},
            // {name: "colorjs", func: colorjs_hex2rgb2hex_unit, param: rgbList},

        ]
    )

    var reorpt5 = test_task(test_count + " mix ",
        [
            {name: "tinycolor", func: tinycolor_mix_unit, param: rgbList},
            {name: "ichiColor", func: ichiColor_mix_unit, param: rgbList},
            {name: "three.js", func: threeColor_mix_unit, param: rgbList},
            {name: "one-color", func: oneColor_mix_unit, param: rgbList},
            // {name: "colorjs", func: colorjs_hex2rgb2hex_unit, param: rgbList},

        ]
    )
    console.log(JSON.stringify(reorpt1, null, 4))
    console.log(JSON.stringify(reorpt2, null, 4))
    console.log(JSON.stringify(reorpt3, null, 4))
    console.log(JSON.stringify(reorpt4, null, 4))
    console.log(JSON.stringify(reorpt5, null, 4))
}

function test_task(taskname, taskList)
{
    var reorpt = {name: taskname, result: {}}

    for (var i = 0; i < taskList.length; i++)
    {
        if (taskList[i].param === "ALLRGB")
        {
            reorpt.result[taskList[i].name] = TSET_scan_allRGB(taskList[i].name, taskList[i].func)
        } else
        {
            reorpt.result[taskList[i].name] = TSET_scan_RGBList(taskList[i].name, taskList[i].func, taskList[i].param)
        }

    }

    return reorpt

}


console.log("test!")
test()


function oneColor_hex2rgb2hex_unit(r, g, b)
{
    //1.set rgb
    var oneColor = OneColor([r, g, b, 0])
    var _rgb = oneColor.css()
    var hex = oneColor.hex()


    //3.get rgb
    var oneColor = OneColor(hex)
    if (oneColor.css() !== _rgb)
    {
        console.error("error - hex2rgb2hex - oneColor:", _rgb, "===", oneColor.getStyle())
    }
}

function oneColor_rgb2hex_unit(r, g, b)
{
    //1.set rgb
    var oneColor = OneColor([r, g, b, 0])
    var hex = oneColor.hex()
}

function oneColor_rgb2hsl_unit(r, g, b)
{
    var oneColor = OneColor([r, g, b, 0])
    var hsl = {h: Math.floor(oneColor.h() * 255), s: Math.floor(oneColor.s() * 100), l: Math.floor(oneColor.l() * 100)}
}
function oneColor_rgb_unit(r, g, b)
{
    var oneColor = OneColor([r, g, b, 0])

}

function oneColor_mix_unit(r, g, b)
{
    var oneColor = OneColor([r, g, b, 0])

    for (var i = 0; i < 1; i++)
    {
        var hsl = {
            h: Math.floor(oneColor.h() * 255),
            s: Math.floor(oneColor.s() * 100),
            l: Math.floor(oneColor.l() * 100)
        }
        var hex = oneColor.hex()
    }

}

function threeColor_hex2rgb2hex_unit(r, g, b)
{
    //1.set rgb
    threeColor.setRGB(r / 255, g / 255, b / 255)
    var _rgb = threeColor.getStyle()
    var hex = threeColor.getHexString()

    //3.get rgb
    threeColor.set("#" + hex)

    if (threeColor.getStyle() !== _rgb)
    {
        console.error("error - hex2rgb2hex - threeColor:", _rgb, "===", threeColor.getStyle())
    }
}
function threeColor_rgb2hex_unit(r, g, b)
{
    //1.set rgb
    threeColor.setRGB(r / 255, g / 255, b / 255)
    var hex = threeColor.getHexString()
}
function threeColor_rgb2hsl_unit(r, g, b)
{
    threeColor.setRGB(r / 255, g / 255, b / 255)
    var _hsl = threeColor.getHSL()
    var hsl = {h: Math.floor(_hsl.h * 255), s: Math.floor(_hsl.s * 100), l: Math.floor(_hsl.l * 100)}
}
function threeColor_rgb_unit(r, g, b)
{

    threeColor.setRGB(r / 255, g / 255, b / 255)
}

function threeColor_mix_unit(r, g, b)
{

    threeColor.setRGB(r / 255, g / 255, b / 255)


    for (var i = 0; i < 1; i++)
    {
        var _hsl = threeColor.getHSL()
        var hsl = {h: Math.floor(_hsl.h * 255), s: Math.floor(_hsl.s * 100), l: Math.floor(_hsl.l * 100)}
        var _rgb = threeColor.getStyle()
        var hex = "#" + threeColor.getHexString()
    }
}


function tinycolor_hex2rgb2hex_unit(r, g, b)
{
    //1.set rgb
    var tcolor = tinycolor({r: r, g: g, b: b})
    var hex = tcolor.toHex()

    //3.get rgb
    var tcolor = tinycolor(hex)
    var rgb = tcolor.toRgb()
    if (rgb.r !== r || rgb.g !== g || rgb.b !== b)
    {
        console.error("error - hex2rgb2hex - tinycolor:", [r, g, b], "===", ichiColor.r, ichiColor.g, ichiColor.b)
    }
}
function tinycolor_rgb2hex_unit(r, g, b)
{
    //1.set rgb
    var tcolor = tinycolor({r: r, g: g, b: b})
    var hex = tcolor.toHex()
}
function tinycolor_rgb2hsl_unit(r, g, b)
{

    var tcolor = tinycolor({r: r, g: g, b: b})
    var tHsl = tcolor.toHsl()
    var hsl = {h: tHsl.h, s: Math.floor(tHsl.s * 100), l: Math.floor(tHsl.l * 100)}
}
function tinycolor_rgb_unit(r, g, b)
{
    var tcolor = tinycolor({r: r, g: g, b: b})
}

function tinycolor_mix_unit(r, g, b)
{
    var tcolor = tinycolor({r: r, g: g, b: b})
    for (var i = 0; i < 1; i++)
    {

        var tHsl = tcolor.toHsl()
        var hsl = {h: tHsl.h, s: Math.floor(tHsl.s * 100), l: Math.floor(tHsl.l * 100)}
        var hex = "#" + tcolor.toHex()
    }
}


function ichiColor_hex2rgb2hex_unit(r, g, b)
{
    //1.set rgb
    ichiColor.set(r, g, b)
    var hex = ichiColor.hex

    //2.get rgb
    ichiColor.hex = hex
    if (ichiColor.r !== r || ichiColor.g !== g || ichiColor.b !== b)
    {
        console.error("error - hex2rgb2hex - ichiColor:", [r, g, b], "===", ichiColor.r, ichiColor.g, ichiColor.b)
    }
}
function ichiColor_rgb2hex_unit(r, g, b)
{
    //1.set rgb
    ichiColor.set(r, g, b)
    var hex = ichiColor.hex
}
function ichiColor_rgb2hsl_unit(r, g, b)
{

    ichiColor.set(r, g, b)
    var hsl = ichiColor.getHSL()

}

function ichiColor_rgb_unit(r, g, b)
{
    ichiColor.set(r, g, b)

}

function ichiColor_mix_unit(r, g, b)
{
    ichiColor.set(r, g, b)
    for (var i = 0; i < 1; i++)
    {
        var hsl = ichiColor.getHSL()
        var hex = ichiColor.hex
    }

}

function TSET_scan_allRGB(tsetName, test_unit)
{
    var r = 0, g = 0, b = 0;
    var count = 0;
    var countMax = 255 * 255 * 255

    console.info("[TSET_scan_allRGB] ", tsetName)
    timeStart("[TSET_scan_allRGB]" + tsetName)
    for (var r = 0; r < 255; r++)
    {
        for (var g = 0; g < 255; g++)
        {
            for (var b = 0; b < 255; b++)
            {
                count++;
                test_unit(r, g, b)

            }
        }
    }
    var t = timeEnd("[TSET_scan_allRGB]" + tsetName)
    console.log(t / 1000 + "秒")

    console.log("count:" + count)
    console.log("----------------")
    return t
}


function getRandamRGBList(length)
{
    var rgbList = [];
    for (var i = 0; i < length; i++)
    {
        rgbList.push([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
    }
    return rgbList
}

function TSET_scan_RGBList(tsetName, test_unit, rgbList)
{
    var r = 0, g = 0, b = 0;
    var count = 0;
    var countMax = 255 * 255 * 255

    console.info("[TSET_scan_RGBList] ", tsetName)
    timeStart("[TSET_scan_RGBList]" + tsetName)


    for (var i = 0; i < rgbList.length; i++)
    {
        count++;
        test_unit(rgbList[i][0], rgbList[i][1], rgbList[i][2])
    }

    var t = timeEnd("[TSET_scan_RGBList]" + tsetName)
    console.log(t / 1000 + "秒")

    console.log("count:" + count)
    console.log("----------------")
    return t
}
