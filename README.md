# ichiColor
一个数据响应风格的 Javascript 颜色处理模块  

```js

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

```

## Features

支持色彩以下色彩值间的转换：
- rgb
- hsl
- hsv (hsb)
- hwb
- hex (色彩值十六进制文本)
- int (色彩值十进制整数)

配合 Vue 可以用非常少的代码完成色彩选择器，如 [demo](https://nullice.github.io/ichiColor/demo/demo.html)

比其他同类库有更高的性能表现，如遍历所有颜色，比 [one-color](https://github.com/One-com/one-color) 快一个数量级



## Usage

### import
ES6 方式的模块载入：
```js
import IchiColor from "./ichi-color.js"
```

### color

一个 IchiColor 的实例表示一个颜色，创建实例时可省略 new 关键字：
```js
var color1 = new IchiColor("#FF0022")
var color2 = IchiColor("#FF0022")   // 可以省略 new 

var color3 = IchiColor({r: 7, g: 58, b: 95})
var color4 = IchiColor({h: 205, s: 87, l: 20})
var color5 = IchiColor([255,211,22])    //[r,g,b]
var color6 = IchiColor(16711714)        //10 进制色彩值
...

```

通过 IchiColor 实例上的属性来获取和设置各种颜色信息：

```javascript
color1.r      //255
color1.g      //0
color1.b      //34
color1.hex    //"#ff0022"
color1.int    //16711714 (10 进制色彩值)

color1.hsl.h  //352
color1.hsl.s  //100
color1.hsl.l  //50

color1.hsv.h  //352
color1.hsv.s  //100
color1.hsv.v  //100

color1.hwb.h  //352
color1.hwb.w  //0
color1.hwb.b  //0
```

可直接修改属性来设置颜色：

```javascript
color1.r        //255
color1.g        //0
color1.b        //34
color1.hex      //"#ff0022"

color1.r = 100  
color1.hex      //"#640022"

color1.hex = "#32a3f1"
color1.r        //50 
color1.g        //163
color1.b        //241

color1.hsl.l = 20
color1.r        //7
color1.g        //58
color1.b        //95

```

另外还可以使用实例上的 set() 方法，其可传入的参数格式和创建实例时的完全一致：

 ```js
 color1.set("#ff0022")
 color1.set({h: 205, s: 93, v: 37})
 color1.set(16711714)     //(10 进制色彩值) 

 ```


除了实例上的属性，实例对象还有一些方法，用来返回包含色彩信息的对象：

```js
color1.getRGB()           //{r: 7, g: 58, b: 95}
color1.getRedGrainBlue()  //{red: 7, grain: 58, blue: 95}
color1.getRedGreenBlue()  //{red: this.r, green: this.g, blue: this.b };
color1.getHSL()           //{h: 205, s: 87, l: 20}
color1.getHSV()           //{h: 205, s: 93, v: 37}
color1.getHWB()           //{h: 205, w: 3, b: 63}

```
这些格式的对象，都可以用来创建颜色实例:

```js
var color4 = IchiColor({red: 7, grain: 58, blue: 95})
```

另外有 2 个方法可以创建 IchiColor 实例的副本：

```js
var newColor1 = color1.getClone()  // 创建实例颜色的副本
newColor1.hex   //"#073a5f"

var newColor2 = color1.getInvertColor()  //创建实例颜色反色的副本
newColor2.hex   //"#f8c5a0"

```
















