/**
 * Created by bgllj on 2016/11/24.
 */

import IchiColor from "./ichi-color.js"
import ColorRNA from "./lib/ColorRNA.js"

function expandIchiColor(IchiColor)
{

    IchiColor.prototype.__extensionInit = function ()
    {
        this.ex = {};

        this.ex.colorRNA = new ColorRNA()

        var obSelf = this;

        obSelf.__ex_enable = true;
        obSelf.__pauseUpdate_ex_labPs = false;
        obSelf.__pauseUpdate_ex_lab = false;
        obSelf.__pauseUpdate_ex_LCHab = false;
        obSelf.__pauseUpdate_ex_hsl255 = false;


        //LabPs-----------------------------------
        obSelf.ex.labPs = {
            _l: 0,
            _a: 0,
            _b: 0,
        }
        Object.defineProperty(obSelf.ex.labPs, "l",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 100)
                    var rgb = obSelf.ex.colorRNA.LabPS(
                        [x,
                            obSelf.ex.labPs.a,
                            obSelf.ex.labPs.b]
                    ).rgb()

                    this._l = x;
                    obSelf.__pauseUpdate_ex_labPs = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_labPs = false;
                },
                get: function ()
                {
                    return this._l;
                }
            }
        );
        Object.defineProperty(obSelf.ex.labPs, "a",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, -128, 127)
                    var rgb = obSelf.ex.colorRNA.LabPS([obSelf.ex.labPs.l, x, obSelf.ex.labPs.b]).rgb()

                    this._a = x;
                    obSelf.__pauseUpdate_ex_labPs = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_labPs = false;
                },
                get: function ()
                {
                    return this._a;
                }
            }
        );
        Object.defineProperty(obSelf.ex.labPs, "b",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, -128, 127)
                    var rgb = obSelf.ex.colorRNA.LabPS([obSelf.ex.labPs.l, obSelf.ex.labPs.a, x]).rgb()


                    this._b = x;
                    obSelf.__pauseUpdate_ex_labPs = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_labPs = false;
                },
                get: function ()
                {
                    return this._b;
                }
            }
        );

        //Lab-----------------------------------
        obSelf.ex.lab = {
            _l: 0,
            _a: 0,
            _b: 0,
        }
        Object.defineProperty(obSelf.ex.lab, "l",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 100)
                    var rgb = obSelf.ex.colorRNA.Lab(
                        [x,
                            obSelf.ex.lab.a,
                            obSelf.ex.lab.b]
                    ).rgb()

                    this._l = x;
                    obSelf.__pauseUpdate_ex_lab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_lab = false;
                },
                get: function ()
                {
                    return this._l;
                }
            }
        );

        Object.defineProperty(obSelf.ex.lab, "a",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, -128, 127)
                    var rgb = obSelf.ex.colorRNA.Lab([obSelf.ex.lab.l, x, obSelf.ex.lab.b]).rgb()

                    this._a = x;
                    obSelf.__pauseUpdate_ex_lab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_lab = false;
                },
                get: function ()
                {
                    return this._a;
                }
            }
        );
        Object.defineProperty(obSelf.ex.lab, "b",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, -128, 127)
                    var rgb = obSelf.ex.colorRNA.Lab([obSelf.ex.lab.l, obSelf.ex.lab.a, x]).rgb()

                    this._b = x;
                    obSelf.__pauseUpdate_ex_lab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_lab = false;
                },
                get: function ()
                {
                    return this._b;
                }
            }
        );
        //LCHab-----------------------------------
        obSelf.ex.LCHab = {
            _l: 0,
            _c: 0,
            _h: 0,
        }
        Object.defineProperty(obSelf.ex.LCHab, "l",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 100)
                    var rgb = obSelf.ex.colorRNA.LCHab(
                        [x,
                            obSelf.ex.LCHab.c,
                            obSelf.ex.LCHab.h]
                    ).rgb()

                    this._l = x;
                    obSelf.__pauseUpdate_ex_LCHab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_LCHab = false;
                },
                get: function ()
                {
                    return this._l;
                }
            }
        );
        Object.defineProperty(obSelf.ex.LCHab, "c",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 100)
                    var rgb = obSelf.ex.colorRNA.LCHab([obSelf.ex.LCHab.l, x, obSelf.ex.LCHab.h]).rgb()

                    this._c = x;
                    obSelf.__pauseUpdate_ex_LCHab= true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_LCHab= false;
                },
                get: function ()
                {
                    return this._c;
                }
            }
        );
        Object.defineProperty(obSelf.ex.LCHab, "h",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 360)
                    var rgb = obSelf.ex.colorRNA.LCHab([obSelf.ex.LCHab.l, obSelf.ex.LCHab.c, x]).rgb()

                    this._h = x;
                    obSelf.__pauseUpdate_ex_LCHab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_LCHab = false;
                },
                get: function ()
                {
                    return this._h;
                }
            }
        );
        //HSL255 ----------------------------------- Office HSL
        obSelf.ex.hsl255 = {
            _h: 0,
            _s: 0,
            _l: 0,
        }
        Object.defineProperty(obSelf.ex.LCHab, "h",
            {
                set: function (x)
                {
                    x = verifyNumber(x)
                    x = colorValueRange(x, 0, 360)
                    var rgb = obSelf.ex.colorRNA.HSL255([obSelf.ex.LCHab.l, obSelf.ex.LCHab.c, x]).rgb()

                    this._h = x;
                    obSelf.__pauseUpdate_ex_LCHab = true;
                    obSelf.set(rgb);
                    obSelf.__pauseUpdate_ex_LCHab = false;
                },
                get: function ()
                {
                    return this._h;
                }
            }
        );





        function verifyNumber(x)
        {
            x = +x;
            if (Number.isNaN(x))
            {
                x = 0;
            }
            return x;
        }

        function colorValueRange(value, min, max)
        {
            if (value > max)
            {
                return max;
            }
            else if (value < min)
            {
                return min;
            }
            return value;
        }

    }


    IchiColor.prototype.__extensionSettingEvent = function ()
    {
        if (this.__ex_enable)
        {
            if (this.__pauseUpdate_ex_labPs != true)
            {
                var labPs = this.ex.colorRNA.rgb(this.r, this.g, this.b).LabPS();
                this.ex.labPs._l = labPs[0];
                this.ex.labPs._a = labPs[1];
                this.ex.labPs._b = labPs[2];
            }
            if (this.__pauseUpdate_ex_lab != true)
            {
                var lab = this.ex.colorRNA.rgb(this.r, this.g, this.b).Lab();
                this.ex.lab._l = lab[0];
                this.ex.lab._a = lab[1];
                this.ex.lab._b = lab[2];
            }
            if (this.__pauseUpdate_ex_LCHab != true)
            {
                var LCHab = this.ex.colorRNA.rgb(this.r, this.g, this.b).LCHab();
                this.ex.LCHab._l = LCHab[0];
                this.ex.LCHab._c = LCHab[1];
                this.ex.LCHab._h = LCHab[2];
            }



        }


    }

    return IchiColor
}
export  default expandIchiColor;