import test from 'ava';
import IchiColor from './../bin/ichi-color';
// import IchiColorEx from './../bin/ichi-color-extension';
const OneColor = require("./../demo/vs/one-color")

test('Set IchiColor("#RRGGBB")', t =>
{

    t.is((new IchiColor("#ff0022")).hex, "#ff0022")
    t.is((new IchiColor("#ff0022")).r, 255)
    t.is((new IchiColor("#ff0022")).g, 0)
    t.is((new IchiColor("#ff0022")).b, 34)

    var c = IchiColor("#ff0022")
    testColor_c_1(t, c)

});


test('Set IchiColor("#RGB")', t =>
{
    var c = IchiColor("#f02")
    testColor_c_1(t, c)
});

test('Set IchiColor("#RGB")', t =>
{
    var c = IchiColor("#f02")
    testColor_c_1(t, c)
});

test('Set IchiColor("#RGB")', t =>
{
    var c = IchiColor("#f02")
    testColor_c_1(t, c)
});

test('Set IchiColor({h: h255, s: s100, l: l100})', t =>
{
    var c = IchiColor({h: 352, s: 100, l: 50})
    testColor_c_1(t, c)
});

test('Set IchiColor({r: r255, g: g255, b: b255})', t =>
{
    var c = IchiColor({r: 255, g: 0, b: 34})
    testColor_c_1(t, c)
});


test('Set IchiColor([r255,g255,b255])', t =>
{
    var c = IchiColor([255, 0, 34])
    testColor_c_1(t, c)
});

test('Set IchiColor(int)', t =>
{
    var c = IchiColor(16711714)
    testColor_c_1(t, c)
});


test('Set IchiColor.r/g/b', t =>
{
    var c = IchiColor()
    c.r = 255
    c.g = 0
    c.b = 34
    testColor_c_1(t, c)
});


test('Set IchiColor.hexRRGGBB', t =>
{
    var c = IchiColor()
    c.hex = "#ff0022"
    testColor_c_1(t, c)
});

test('Set IchiColor.hexRGB', t =>
{
    var c = IchiColor()
    c.hex = "#f02"
    testColor_c_1(t, c)
});

test('Set IchiColor.rgba', t =>
{
    var c = IchiColor()
    c.rgba = "rgba(255, 0, 34, 1)"
    testColor_c_1(t, c)
});


test('Set IchiColor.int', t =>
{
    var c = IchiColor()
    c.int = 16711714
    testColor_c_1(t, c)
});

test('Set IchiColor.hsl', t =>
{
    var c = IchiColor()
    c.hsl.h = 352
    c.hsl.s = 100
    c.hsl.l = 50
    testColor_c_1(t, c)
});


test('Set IchiColor.hsv', t =>
{
    var c = IchiColor()
    c.hsv.h = 352
    c.hsv.s = 100
    c.hsv.v = 100
    testColor_c_1(t, c)
});

test('Set IchiColor.hwb', t =>
{
    var c = IchiColor()
    c.hwb.h = 352
    c.hwb.w = 0
    c.hwb.b = 0
    testColor_c_1(t, c)
});





function testColor_c_1(t, c)
{

    t.is(c.r, 255)
    t.is(c.g, 0)
    t.is(c.b, 34)
    t.is(c.hex, "#ff0022")
    t.is(c.rgba, "rgba(255, 0, 34, 1)")
    t.is(c.int, 16711714)
    t.is(c.hsl.h, 352)
    t.is(c.hsl.s, 100)
    t.is(c.hsl.l, 50)
    t.is(c.hsv.h, 352)
    t.is(c.hsv.s, 100)
    t.is(c.hsv.v, 100)
    t.is(c.hwb.h, 352)
    t.is(c.hwb.w, 0)
    t.is(c.hwb.b, 0)

    t.deepEqual(c.getRGB(), {r: 255, g: 0, b: 34})
    t.deepEqual(c.getRedGrainBlue(), {red: 255, grain: 0, blue: 34})
    t.deepEqual(c.getRedGreenBlue(), {red: 255, green: 0, blue: 34})
    t.deepEqual(c.getHSL(), {h: 352, s: 100, l: 50})
    t.deepEqual(c.getHSV(), {h: 352, s: 100, v: 100})
    t.deepEqual(c.getHWB(), {h: 352, w: 0, b: 0})

}


// test('rgbAll', t =>
// {
//
//     var ichiColor = new IchiColor()
//
//     var r = 0, g = 0, b = 0;
//     var cunt = 0;
//     for (var r = 0; r < 255; r++)
//     {
//         for (var g = 0; g < 255; g++)
//         {
//             for (var b = 0; b < 255; b++)
//             {
//                 ichiColor.set([r,g,b])
//                 t.is(ichiColor.r,r);
//                 t.is(ichiColor.g, g);
//                 t.is(ichiColor.b, b);
//             }
//         }
//     }
//     console.log("cunt:"+cunt)
//
// });
