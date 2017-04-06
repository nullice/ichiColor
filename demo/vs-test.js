/**
 * Created by nullice on 2017/4/6.
 */


if (typeof exports === "object" && typeof module !== "undefined")
{
    console.log("running [node.js]")
    global.IchiColor = require("./../bin/ichi-color")
    global.IchiColorEx = require("./../bin/ichi-color-extension")
    global.colr = require("./vs/colr.min")
    global.OneColor = require("./vs/one-color")
    global.three = require("./vs/three")
    global.tinycolor = require("./vs/tinycolor-min")
}

var ichiColor = IchiColor()
var threeColor = new three.Color()

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


function test()
{
    var rgbList = getRandamRGBList(300000)

    // TSET_scan_allRGB("hex2rgb2hex - ichiColor", ichiColor_hex2rgb2hex_unit)
    // TSET_scan_allRGB("hex2rgb2hex - tinycolor", tinycolor_hex2rgb2hex_unit)
    TSET_scan_RGBList("hex2rgb2hex - tinycolor", tinycolor_hex2rgb2hex_unit, rgbList)
    TSET_scan_RGBList("hex2rgb2hex - ichiColor", ichiColor_hex2rgb2hex_unit, rgbList)
    TSET_scan_RGBList("hex2rgb2hex - three.js", threeColor_hex2rgb2hex_unit, rgbList)

}


console.log("test!")
test()


function threeColor_hex2rgb2hex_unit(r, g, b)
{
    //1.set rgb
    threeColor.set('rgb(' + r +"," + g + "," + b + ')')
    var _rgb = threeColor.getStyle()
    var hex = threeColor.getHexString()

    //3.get rgb
    threeColor.set("#" + hex)

    if (threeColor.getStyle() !== _rgb)
    {
        console.error("error - hex2rgb2hex - threeColor:", _rgb, "===", hreeColor.getStyle() )
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

    console.info("[TSET_scan_allRGB] ", tsetName)
    timeStart("[TSET_scan_allRGB]" + tsetName)


    for (var i = 0; i < rgbList.length; i++)
    {
        count++;
        test_unit(rgbList[i][0], rgbList[i][1], rgbList[i][2])
    }

    var t = timeEnd("[TSET_scan_allRGB]" + tsetName)
    console.log(t / 1000 + "秒")

    console.log("count:" + count)
    console.log("----------------")
}
