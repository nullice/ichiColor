(function (f)
{
    if (typeof exports === "object" && typeof module !== "undefined")
    {
        module.exports = f()
    } else if (typeof define === "function" && define.amd)
    {
        define([], f)
    } else
    {
        var g;
        if (typeof window !== "undefined")
        {
            g = window
        } else if (typeof global !== "undefined")
        {
            g = global
        } else if (typeof self !== "undefined")
        {
            g = self
        } else
        {
            g = this
        }
        (g.one || (g.one = {})).color = f()
    }
})(function ()
{
    var define, module, exports;
    return (function e(t, n, r)
    {
        function s(o, u)
        {
            if (!n[o])
            {
                if (!t[o])
                {
                    var a = typeof require == "function" && require;
                    if (!u && a)return a(o, !0);
                    if (i)return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {exports: {}};
                t[o][0].call(l.exports, function (e)
                {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }

        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++)s(r[o]);
        return s
    })({
        1: [function (require, module, exports)
        {
            module.exports = function (t)
            {
                t.use(require(2)), t.installColorSpace("HSL", ["hue", "saturation", "lightness", "alpha"], {
                    hsv: function ()
                    {
                        var s, n = 2 * this._lightness, h = this._saturation * (1 >= n ? n : 2 - n);
                        return s = 1e-9 > n + h ? 0 : 2 * h / (n + h), new t.HSV(this._hue, s, (n + h) / 2, this._alpha)
                    }, rgb: function () {return this.hsv().rgb()}, fromRgb: function () {return this.hsv().hsl()}
                })
            };
        }, {"2": 2}], 2: [function (require, module, exports)
        {
            module.exports = function (a)
            {
                a.installColorSpace("HSV", ["hue", "saturation", "value", "alpha"], {
                    rgb: function ()
                    {
                        var e, t, s, h = this._hue, i = this._saturation, r = this._value,
                            n = Math.min(5, Math.floor(6 * h)), u = 6 * h - n, c = r * (1 - i), l = r * (1 - u * i),
                            o = r * (1 - (1 - u) * i);
                        switch (n)
                        {
                            case 0:
                                e = r, t = o, s = c;
                                break;
                            case 1:
                                e = l, t = r, s = c;
                                break;
                            case 2:
                                e = c, t = r, s = o;
                                break;
                            case 3:
                                e = c, t = l, s = r;
                                break;
                            case 4:
                                e = o, t = c, s = r;
                                break;
                            case 5:
                                e = r, t = c, s = l
                        }
                        return new a.RGB(e, t, s, this._alpha)
                    },
                    hsl: function ()
                    {
                        var e, t = (2 - this._saturation) * this._value, s = this._saturation * this._value,
                            h = 1 >= t ? t : 2 - t;
                        return e = 1e-9 > h ? 0 : s / h, new a.HSL(this._hue, e, t / 2, this._alpha)
                    },
                    fromRgb: function ()
                    {
                        var e, t = this._red, s = this._green, h = this._blue, i = Math.max(t, s, h),
                            r = Math.min(t, s, h), n = i - r, u = 0 === i ? 0 : n / i, c = i;
                        if (0 === n) e = 0; else switch (i)
                        {
                            case t:
                                e = (s - h) / n / 6 + (h > s ? 1 : 0);
                                break;
                            case s:
                                e = (h - t) / n / 6 + 1 / 3;
                                break;
                            case h:
                                e = (t - s) / n / 6 + 2 / 3
                        }
                        return new a.HSV(e, u, c, this._alpha)
                    }
                })
            };
        }, {}], 3: [function (require, module, exports)
        {
            function color(r)
            {
                if (Array.isArray(r))
                {
                    if ("string" == typeof r[0] && "function" == typeof color[r[0]])return new color[r[0]](r.slice(1, r.length));
                    if (4 === r.length)return new color.RGB(r[0] / 255, r[1] / 255, r[2] / 255, r[3] / 255)
                } else if ("string" == typeof r)
                {
                    var o = r.toLowerCase();
                    color.namedColors[o] && (r = "#" + color.namedColors[o]), "transparent" === o && (r = "rgba(0,0,0,0)");
                    var e = r.match(cssColorRegExp);
                    if (e)
                    {
                        var t = e[1].toUpperCase(), n = undef(e[8]) ? e[8] : parseFloat(e[8]), a = "H" === t[0],
                            s = e[3] ? 100 : a ? 360 : 255, i = e[5] || a ? 100 : 255, c = e[7] || a ? 100 : 255;
                        if (undef(color[t]))throw new Error("color." + t + " is not installed.");
                        return new color[t](parseFloat(e[2]) / s, parseFloat(e[4]) / i, parseFloat(e[6]) / c, n)
                    }
                    r.length < 6 && (r = r.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3"));
                    var l = r.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
                    if (l)return new color.RGB(parseInt(l[1], 16) / 255, parseInt(l[2], 16) / 255, parseInt(l[3], 16) / 255);
                    if (color.CMYK)
                    {
                        var u = r.match(new RegExp("^cmyk\\(" + percentageChannelRegExp.source + "," + percentageChannelRegExp.source + "," + percentageChannelRegExp.source + "," + percentageChannelRegExp.source + "\\)$", "i"));
                        if (u)return new color.CMYK(parseFloat(u[1]) / 100, parseFloat(u[2]) / 100, parseFloat(u[3]) / 100, parseFloat(u[4]) / 100)
                    }
                } else if ("object" == typeof r && r.isColor)return r;
                return !1
            }

            var installedColorSpaces = [], undef = function (r) {return "undefined" == typeof r},
                channelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,
                percentageChannelRegExp = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,
                alphaChannelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)\s*/,
                cssColorRegExp = new RegExp("^(rgb|hsl|hsv)a?\\(" + channelRegExp.source + "," + channelRegExp.source + "," + channelRegExp.source + "(?:," + alphaChannelRegExp.source + ")?\\)$", "i");
            color.namedColors = {}, color.installColorSpace = function (r, o, e)
            {
                function t(r, o)
                {
                    var e = {};
                    e[o.toLowerCase()] = function () {return this.rgb()[o.toLowerCase()]()}, color[o].propertyNames.forEach(function (r)
                    {
                        var t = "black" === r ? "k" : r.charAt(0);
                        e[r] = e[t] = function (e, t) {return this[o.toLowerCase()]()[r](e, t)}
                    });
                    for (var t in e)e.hasOwnProperty(t) && void 0 === color[r].prototype[t] && (color[r].prototype[t] = e[t])
                }

                color[r] = function (e)
                {
                    var t = Array.isArray(e) ? e : arguments;
                    o.forEach(function (e, n)
                    {
                        var a = t[n];
                        if ("alpha" === e) this._alpha = isNaN(a) || a > 1 ? 1 : 0 > a ? 0 : a; else
                        {
                            if (isNaN(a))throw new Error("[" + r + "]: Invalid color: (" + o.join(",") + ")");
                            "hue" === e ? this._hue = 0 > a ? a - Math.floor(a) : a % 1 : this["_" + e] = 0 > a ? 0 : a > 1 ? 1 : a
                        }
                    }, this)
                }, color[r].propertyNames = o;
                var n = color[r].prototype;
                ["valueOf", "hex", "hexa", "css", "cssa"].forEach(function (o) {n[o] = n[o] || ("RGB" === r ? n.hex : function () {return this.rgb()[o]()})}), n.isColor = !0, n.equals = function (e, t)
                {
                    undef(t) && (t = 1e-10), e = e[r.toLowerCase()]();
                    for (var n = 0; n < o.length; n += 1)if (Math.abs(this["_" + o[n]] - e["_" + o[n]]) > t)return !1;
                    return !0
                }, n.toJSON = function () {return [r].concat(o.map(function (r) {return this["_" + r]}, this))};
                for (var a in e)if (e.hasOwnProperty(a))
                {
                    var s = a.match(/^from(.*)$/);
                    s ? color[s[1].toUpperCase()].prototype[r.toLowerCase()] = e[a] : n[a] = e[a]
                }
                return n[r.toLowerCase()] = function () {return this}, n.toString = function () {return "[" + r + " " + o.map(function (r) {return this["_" + r]}).join(", ") + "]"}, o.forEach(function (r)
                {
                    var e = "black" === r ? "k" : r.charAt(0);
                    n[r] = n[e] = function (e, t) {return "undefined" == typeof e ? this["_" + r] : t ? new this.constructor(o.map(function (o) {return this["_" + o] + (r === o ? e : 0)}, this)) : new this.constructor(o.map(function (o) {return r === o ? e : this["_" + o]}, this))}
                }), installedColorSpaces.forEach(function (o) {t(r, o), t(o, r)}), installedColorSpaces.push(r), color
            }, color.pluginList = [], color.use = function (r) {return -1 === color.pluginList.indexOf(r) && (this.pluginList.push(r), r(color)), color}, color.installMethod = function (r, o) {return installedColorSpaces.forEach(function (e) {color[e].prototype[r] = o}), this}, color.installColorSpace("RGB", ["red", "green", "blue", "alpha"], {
                hex: function ()
                {
                    var r = (65536 * Math.round(255 * this._red) + 256 * Math.round(255 * this._green) + Math.round(255 * this._blue)).toString(16);
                    return "#" + "00000".substr(0, 6 - r.length) + r
                },
                hexa: function ()
                {
                    var r = Math.round(255 * this._alpha).toString(16);
                    return "#" + "00".substr(0, 2 - r.length) + r + this.hex().substr(1, 6)
                },
                css: function () {return "rgb(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + ")"},
                cssa: function () {return "rgba(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + "," + this._alpha + ")"}
            }), module.exports = color;
        }, {}], 4: [function (require, module, exports)
        {
            module.exports = require(3).use(require(2)).use(require(1));
        }, {"1": 1, "2": 2, "3": 3}]
    }, {}, [4])(4)
});


//# sourceMappingURL=one-color.map
