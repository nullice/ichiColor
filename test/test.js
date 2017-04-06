import test from 'ava';
import IchiColor from './../bin/ichi-color';


test('my passing test', t =>
{
    t.pass();
});

test('rgbAll', t =>
{

    var ichiColor = new IchiColor()

    var r = 0, g = 0, b = 0;
    var cunt = 0;
    for (var r = 0; r < 255; r++)
    {
        for (var g = 0; g < 255; g++)
        {
            for (var b = 0; b < 255; b++)
            {
                ichiColor.set([r,g,b])
                t.is(ichiColor.r,r);
                t.is(ichiColor.g, g);
                t.is(ichiColor.b, b);
            }
        }
    }
    console.log("cunt:"+cunt)



});
