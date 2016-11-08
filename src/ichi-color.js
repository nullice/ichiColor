/**
 * Created by bgllj on 2016/11/7.
 */

//                                __
//                 ___      ____/  /\
//                /  /\    /  /:\_:\/:\
//               /  /:/   /__/::/\/:/\:\
//              /  /:/    \__\/\ /::\/:/__
//             /  /:/       /__/:/\:/:/ \:\
//            /  /:/        \  \:\/:/ /::/
//           /  /:/          \  \::/ /::/
//          /__/:/            \  \:\/::/
//          \__\/              \  \::/
//                              \__\/
//
//                     一色
//             +------------------+
//             |     ichiColor    |
//             +------------------+
//                · main module ·
//
//           By nullice ui@nullice.com
//                 nullice.com
//                license : MIT


// import ColorRNA from "./lib/ColorRNA"


var IchiColor = function (in_color)
{
    //判断是被作为普通函数调用还是被 new 操作符作为构造函数调用

    if (typeof this === "object" && this.__isIchiColor)
    {
        var _new_mode = true;
    } else
    {
        var _new_mode = false;
    }

    if (_new_mode) //构造函数模式
    {
        if (arguments.length == 0)//无参数
        {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }
        else if (arguments.length === 1)
        {
            var _string_mod
            if (arguments[0].constructor === String)
            {
                if (arguments[0][0] === "#")
                {
                    if (arguments[0].length === 4)
                    {
                        var _hex3 = Number.parseInt(arguments[0].slice(1), 16);
                        this.r = (_hex3>> 8 & 0xf) | (_hex3 >> 4 & 0x0f0) // 17
                        this.g = (_hex3 >> 4 & 0xf) | (_hex3 & 0xf0) // 34
                        this.b = ((_hex3 & 0xf) << 4) | (_hex3 & 0xf) // 51
                    }
                    else if (arguments[0].length === 7)
                    {
                        arguments[0] = Number.parseInt(arguments[0].slice(1), 16);
                        _string_mod = "number";
                    }


                }
                else if (arguments[0] == +arguments[0])
                {
                    _string_mod = "number";
                    arguments[0] = +arguments[0];
                }
            }
            if (arguments[0].constructor === Number || _string_mod == "number")
            {

                this.r = arguments[0] >> 16;
                this.g = (arguments[0] >> 8) & 0xff;
                this.b = arguments[0] & 0xff;
            }
            else if (Array.isArray(arguments[0])) // IchiColor([r,g,b])
            {
                if (arguments[0].length == 3)
                {
                    this.r = arguments[0][0];
                    this.g = arguments[0][1];
                    this.b = arguments[0][2];
                }
            }
            else if (arguments[0].constructor === Object)  // IchiColor({r:r, g:g, b:b})
            {
                if (arguments[0]["r"] != undefined)
                {
                    this.r = arguments[0]["r"];

                } else if (arguments[0]["red"] != undefined)
                {
                    this.r = arguments[0]["red"];
                }

                if (arguments[0]["g"] != undefined)
                {
                    this.g = arguments[0]["g"];

                } else if (arguments[0]["green"] != undefined)
                {
                    this.g = arguments[0]["green"];
                }
                else if (arguments[0]["grain"] != undefined)
                {
                    this.g = arguments[0]["grain"];
                }

                if (arguments[0]["b"] != undefined)
                {
                    this.b = arguments[0]["b"];

                } else if (arguments[0]["blue"] != undefined)
                {
                    this.b = arguments[0]["blue"];
                }
            }

        }
        else if (arguments.length === 3)
        {

        }


    }
    else //工厂函数模式
    {
        var color = new IchiColor()
        IchiColor.apply(color, arguments)
        return color;
    }


    console.log(this.r, this.g, this.b)
    return this;
}

IchiColor.prototype.__isIchiColor = true;

IchiColor.prototype._rgb = function ()
{
    return {r: this.r, g: this.g, b: this.b};
};


IchiColor.prototype.hex = function ()
{
    return {r: this.r, g: this.g, b: this.b};
};

export default IchiColor;
















