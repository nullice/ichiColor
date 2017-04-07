import test from 'ava';
import IchiColor from './../bin/ichi-color';
// import IchiColorEx from './../bin/ichi-color-extension';
// const OneColor = require("./../demo/vs/one-color")


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


    c.set("2233")
    t.is(c.int, 2233)


});


test('Set IchiColor.r/g/b', t =>
{
    var c = IchiColor()
    c.r = 255
    c.g = 0
    c.b = 34
    testColor_c_1(t, c)
});


test('Set IchiColor.rgb', t =>
{
    var c = IchiColor()
    c.rgb = "rgb(255, 0, 34)"

    testColor_c_1(t, c)
});


test('Set IchiColor.hexRRGGBB', t =>
{
    var c = IchiColor()
    c.hex = "#ff0022"
    testColor_c_1(t, c)
});



test('Set IchiColor.hexAARRGGBB', t =>
{
    var c = IchiColor()
    c.set("#ffff0022")
    testColor_c_1(t, c)
    t.is(c.alpha,1)

    var c = IchiColor()
    c.set("#faff0022")
    t.is(c.alpha,0.98)
    c.alpha=1
    testColor_c_1(t, c)
    t.is(c.ahex,"#ffff0022")
    t.is(c.argb,"#ffff0022")


    c.set("#faff0022")
    t.is(c.argb,"#faff0022")

    c.set("#af02")
    t.is(c.argb,"#aaff0022")

    c.set("#a3020203")
    t.is(c.argb,"#a3020203")


    var c = IchiColor()
    c.set("#af02")
    t.is(c.alpha,0.667)
    c.alpha=1
    testColor_c_1(t, c)




    var c = IchiColor()
    c.ahex = "#faff0022"
    t.is(c.alpha,0.98)
    c.alpha=1
    testColor_c_1(t, c)


    var c = IchiColor()
    c.ahex = "#af02"
    t.is(c.alpha,0.667)
    c.alpha=1
    testColor_c_1(t, c)

    var c = IchiColor()
    c.argb = "#faff0022"
    t.is(c.alpha,0.98)
    c.alpha=1
    testColor_c_1(t, c)


    var c = IchiColor()
    c.argb = "#af02"
    t.is(c.alpha,0.667)
    c.alpha=1
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

test('Set IchiColor.rgba', t =>
{
    var c = IchiColor()
    c.rgba = "rgba(255, 0, 34, 1)"
    testColor_c_1(t, c)
    c.rgba = "rgba(255, 0, 34, 0.4)"
    t.is(c.alpha, 0.4)
    c.rgba = "rgba(255, 0, 34, 0)"
    t.is(c.alpha, 0)

    c.set({r:153, g:27, b:27, a: 0.55})
    t.is(c.rgba, "rgba(153, 27, 27, 0.55)")

    c.set({r:153, g:27, b:27, alpha: 0.55})
    t.is(c.rgba, "rgba(153, 27, 27, 0.55)")


    c.set("rgba(255, 0, 34, 0.98)")
    t.is(c.rgba, "rgba(255, 0, 34, 0.98)")

    c.set("rgb(22, 0, 33)")
    t.is(c.rgb, "rgb(22, 0, 33)")


});


test('Get IchiColor.hex', t =>
{
    var c = IchiColor()

    function test_item(r, g, b, t, c)
    {
        c.set(r, g, b)
        var hex = c.hex;
        c.hex = hex
        t.deepEqual([c.r, c.g, c.b], [r, g, b])
    }

    var rgbList = [
        [0, 0, 0],
        [1, 2, 3],
        [255, 255, 255],
        [255, 0, 0],
        [0, 255, 0],
        [255, 0, 0],
        [0, 1, 32],
        [2, 2, 3],
        [16, 16, 15],
    ]
    TSET_scan_RGBList('Get IchiColor.hex', test_item, rgbList, t, c)

    // c.set([0, 0, 0])
    // t.is(c._gethex(),"#000000")
    // c.set([255, 255, 255])
    // t.is(c._gethex(),"#ffffff")
});


test('Get IchiColor.hsl', t =>
{
    var c = IchiColor()

    function test_item(h, s, l, t, c)
    {
        c.set({h: h, s: s, l: l})
        t.deepEqual(c.getHSL(), {h: h, s: s, l: l})
    }

    var hslList = [
        [0, 0, 0],
        // [336, 17, 100],

    ]


    TSET_scan_RGBList('Get IchiColor.hsl', test_item, hslList, t, c)

});


test('Conv IchiColor.hsl', t =>
{

    var c = IchiColor()

    function test_item(r, g, b, t, c, listItem)
    {
        c.set(r, g, b)
        var hsl = c.getHSL();
        t.deepEqual(hsl, listItem[3])

        c.set(hsl)
        t.is(c.int >= 0, true)

    }

    var rgbList = [
        [85, 0, 34, {h: 336, s: 100, l: 17}],
        [85, 66, 34, {h: 38, s: 43, l: 23}],
        [2, 3, 254, {h: 240, s: 99, l: 50}],
        [1, 216, 35, {h: 129, s: 99, l: 43}],
        [10, 10, 10, {h: 0, s: 0, l: 4}],
        [2, 9, 249, {h: 238, s: 98, l: 49}]
    ]
    TSET_scan_RGBList('Conv IchiColor.hsl', test_item, rgbList, t, c)
    // TSET_scan_allRGB('Conv IchiColor.hsl', test_item, t, c)


    t.is(   c.set({h: 360, s: 10, l:10}).int,1840919 )
})


test('Conv IchiColor.hsv', t =>
{

    var c = IchiColor()

    function test_item(r, g, b, t, c, listItem)
    {
        c.set(r, g, b)
        var hsv = c.getHSV();
        t.deepEqual(hsv, listItem[3])

        c.set(hsv)
        t.is(c.int >= 0, true)

        var hwb = c.getHWB()
        c.set(hwb)
        t.is(c.int >= 0, true)


        t.deepEqual(c.set(c.getRedGrainBlue()).getRedGrainBlue(), c.getRedGrainBlue())
        t.deepEqual(c.set(c.getRGB()).getRGB(), c.getRGB())
        t.deepEqual(c.set(c.getRedGreenBlue()).getRedGreenBlue(), c.getRedGreenBlue())
    }

    var rgbList = [
        [153, 27, 28, {h: 360, s: 82, v: 60}],
        [ 153, 153, 27, {h: 60, s: 82, v: 60}],
        [153, 27, 27, {h: 0, s: 82, v: 60}],
        [10, 10, 10, {h: 0, s: 0, v: 4}],
        [10, 10, 11, {h: 240, s: 9, v: 4}],
        [ 2, 57, 4, {h: 122, s: 96, v: 22}],
        [ 2, 90, 139 , {h: 201, s: 99, v: 55}],


    ]
    TSET_scan_RGBList('Conv IchiColor.hsv', test_item, rgbList, t, c)
    // TSET_scan_allRGB('Conv IchiColor.hsl', test_item, t, c)

})


test('Func IchiColor.getClone()', t =>
{
    var c = IchiColor()
    c.rgba = "rgba(255, 0, 34, .4)"
    var c2 = c.getClone()
    t.deepEqual(c.rgba, c2.rgba)
});


test('Func IchiColor.getInvertColor()', t =>
{
    var c = IchiColor()
    c.rgba = "rgba(255, 0, 34, 1)"
    var c2 = c.getInvertColor()

    t.is(c2.r, 0)
    t.is(c2.g, 255)
    t.is(c2.b, 255 - 34)

});

test('Func IchiColor.__colorValueRange()', t =>
{
    var c = IchiColor()
    t.is(c.__colorValueRange(200,0,100)   , 100)
    t.is(c.__colorValueRange(1,22,100)   , 22)
    t.is(c._normaliz(255)   , 1)

});


function TSET_scan_allRGB(tsetName, test_unit, t, c)
{
    var r = 0, g = 0, b = 0;
    var count = 0;
    var countMax = 255 * 255 * 255

    console.info("[TSET_scan_allRGB] ", tsetName)

    for (var r = 0; r < 255; r++)
    {
        for (var g = 0; g < 255; g++)
        {
            for (var b = 0; b < 255; b++)
            {
                count++;
                test_unit(r, g, b, t, c)

            }
        }
    }

}


function TSET_scan_RGBList(tsetName, test_unit, rgbList, t, c)
{
    var r = 0, g = 0, b = 0;
    var count = 0;
    var countMax = 255 * 255 * 255

    console.info("[TSET_scan_RGBList] ", tsetName)

    for (var i = 0; i < rgbList.length; i++)
    {
        count++;
        test_unit(rgbList[i][0], rgbList[i][1], rgbList[i][2], t, c, rgbList[i])
    }


}


function testColor_c_1(t, c)
{
    t.is(c.r, 255)
    t.is(c.g, 0)
    t.is(c.b, 34)
    t.is(c.hex, "#ff0022")
    t.is(c.rgba, "rgba(255, 0, 34, 1)")
    t.is(c.rgb, "rgb(255, 0, 34)")
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
