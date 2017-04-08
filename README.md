# ichiColor


[![Build Status](https://travis-ci.org/nullice/ichiColor.svg?branch=master)](https://travis-ci.org/nullice/ichiColor)
[![Coverage Status](https://coveralls.io/repos/github/nullice/ichiColor/badge.svg?branch=master)](https://coveralls.io/github/nullice/ichiColor?branch=master)
[![npm](https://img.shields.io/npm/v/ichi-color.svg)](https://www.npmjs.com/package/ichi-color)
[![GitHub release](https://img.shields.io/github/release/nullice/ichiColor.svg)](https://github.com/nullice/ichiColor/releases)

一个高效的数据响应风格的 Javascript 颜色处理模块  


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
这是从 UI 构建工具 [UI-DNA](https://github.com/nullice/UI-DNA) 中独立出来的模块。非常适合用来制作色彩选择器：

<p align="center">
 <a target="_blank" href="https://nullice.github.io/ichiColor/demo/demo.html">  <b>DEMO</b></a>
</p>

<p align="center">
  <img  src ="https://raw.githubusercontent.com/nullice/ichiColor/master/demo/DocScreenshot/DEMO.png" />
</p>


## Features

### 响应式风格

 
 使用 ichiColor 进行色彩格式的转换均可通过属性赋值来完成：
```js
var color= IchiColor("#f2a2a2")

color.r = 30
color.hex //"#1ea2a2"

color.rgb = "rgb(255, 0, 0)"
color.r // 255
```
这种全部用赋值的方式来进行操作，相较于通过 get 、set 方法实现， 除了简单直观，少打字以外更重要的是能更简单方便的与数据绑定式的框架（如 Vue.js 、AngularJS 等）结合，用极少的代码完成色彩控件：



```html
// html
<span>RGB</span><input v-model="ichiColor.rgb" type="text">
<span>Hex</span><input v-model="ichiColor.hex" type="text">


<script>
var vueApp = new Vue({
    el: 'body',
    data: {
        ichiColor: new IchiColor(),
    },
})
</script>
```


[![](https://raw.githubusercontent.com/nullice/ichiColor/master/demo/DocScreenshot/ichiColorWithVueJs.gif)](https://jsfiddle.net/nullice/zuk55k9j/)

[在线编辑示例 - jsfiddle](https://jsfiddle.net/nullice/zuk55k9j/)



### 全功能支持
ichiColor 支持你能遇到的几乎所有常见色彩格式，并且相赋值式的操作能让你轻松的把色彩值组合成想要的形式。

支持色彩在以下色彩格式间转换：
- `rgb`
- `hsl`
- `hsv` (`hsb`)
- `hwb`
- `hex` (色彩值十六进制文本)
- `int` (色彩值十进制整数)
- `rgba` (CSS 格式 RGBA 文本)
- `ahex` (`argb` 包含 alpha 通道的色彩值十六进制文本) 

#### extension 扩展功能
除了以上常见的功能，ichiColor 还可以提供以下更加高级的色彩模型间的转换：

- `hsl255` (Microsoft Office 色彩选择器风格)
- `hsl240` (Windows 系统色彩选择器风格)
- `labPs` (D50 白点, Photoshop 风格)
- `lab` (D65 白点)
- `xyz`
- `xyY`
- `LCHab`
- `luv`
- `theLuma_Rec709` (只读, Rec709 标准辉度)
- `theLuma_WCAG` (只读, Rec709 标准辉度)
- `theWavelength` (只读, 光谱波长)
- `getWCAGcontrastThan()` (计算 Web 无障碍标准颜色对比度)

使用扩展的 ichiColor 只是在非常简单，只要引入额外的 JavaScript 文件即可，详细见后面的说明。

  \*  *扩展功能没有包含在代码覆率测试中*




### 性能表现
ichiColor 相比同类库，有优异的性能表现，尤其是在为取色控件使用的场景（连续取值、赋值，转换成多种格式）

遍历测试 256^3 | [ichiColor](github.com/nullice/ichiColor)| [three.js](https://github.com/mrdoob/three.js) | [one-color](https://github.com/One-com/one-color)| [TinyColor](https://github.com/bgrins/TinyColor)
---|---|---|---|---|
RGB -> HEX|**14**.*855* s|**7**.*743* s|**27**.*989* s|**60**.*017* s
RGB <-> HEX 互相赋值|**29**.*536* s|**24**.*429s* |**86**.*277* s|**119**.*405* s
RGB -> HSL |**1**.*57* s|**1**.*049* s|**113**.*608* s|**63**.*273* s|
RGB -> (HSL, HEX) x20 连续取值 |**20**.*965* s|**197**.*885* s|**2022**.*774* s|**691**.*91* s

基本功能测试中， ichiColor 比其它同类库要快很多，与 3D 框架 three.js 中的色彩模块差不多，（three.js 的色彩模块功能相比其它库要少），而在连续取值测试中，ichiColor 有着最好的表现，并且有较其它库有极大的差距。

#### 策略
ichiColor 的设计为作为取色控件而做了优化，对 ichiColor 实例每一次赋值会先计算出并储存核心属性（RGB, INT, HEX），而次要属性（HSL、HSV、HWB 等）会根据情况决定是否在实例赋值时计算：当这个实例有过对次要属性的取值时，就会在实例每次赋值时就计算，否则只要当取值时才计算。而取值后会储存计算的结果，连续多次取值成本极低。
\* *扩展功能没有优化，会始终在取值时计算*


## Install

ichiColor 同时支持浏览器与 Node.js 端，并且没有任何依赖（扩展功能用到的 ColorRNA 库已打包整合进了 `ichi-color-extension.js`）。


如果你使用包管理工具 npm 或者 yarn ：

```
yarn add ichi-color
```

```
npm i ichi-color
```

或者手动添加文件：

```html
<script type="text/javascript" src="ichi-color.js"></script>
```

克隆或者下载 ichiColor [最新版本](https://github.com/nullice/ichiColor/releases) 的 `./bin` 目录下的 `ichi-color.js` ，如果你需要扩展功能，你还需要 `./bin` 目录下的 `ichi-color-extension.js`。 
（如果你没有用包管理工具又想要用 ES6 的的 `import` 则可以复制 `./src`  目录下的同名文件）



## Usage

### import
-  如果你使用了包管理工具的话可以直接 ES6 方式的模块载入：
```js
import IchiColor from "ichi-color"
```
- 如果是手动复制的文件的话就 `import ` `./src`  目录下的文件
```js
import IchiColor from "./src/ichi-color.js"
```
### require

如果是用 Node.js 的 `require`：
```js
 var IchiColor = require("ichi-color")
```


### API

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
color1.rgba   //"rgba(255, 0, 34, 1)"
color1.alpha  //1 (rgba 的不透明度)
color1.ahex  //"#ffff0022" (argb 16进制)
color1.argb  //"#ffff0022" (与 ahex 相同)


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
...
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




## Extension 
一些不常用的高级功能通过扩展来通供使用

扩展模块是一个能够处理 ichiColor 模块的函数，为 ichiColor 添加扩展功能：
```js
import IchiColor_base from "./ichi-color.js"
import IchiColorEx from "./ichi-color-extension.js"

var IchiColor = IchiColorEx(IchiColor_base) //添加扩展功能
```
如果在浏览器端通过文件载入的话：

```js
var IchiColor = expandIchiColor(IchiColor )
```




之后新返回的  `IchiColor` 的创建的实例会有 `ichiColor.ex` 属性，其中就是扩展功能

扩展功能：

- `ichiColor.ex.hsl255` (Microsoft Office 色彩选择器风格)
- `ichiColor.ex.hsl240` (Windows 系统色彩选择器风格)
- `ichiColor.ex.labPs` (D50 白点, Photoshop 风格)
- `ichiColor.ex.lab` (D65 白点)
- `ichiColor.ex.xyz`
- `ichiColor.ex.xyY`
- `ichiColor.ex.LCHab`
- `ichiColor.ex.luv`
- `ichiColor.ex.theLuma_Rec709` (只读, Rec709 标准辉度)
- `ichiColor.ex.theLuma_WCAG` (只读, Web 无障碍标准辉度)
- `ichiColor.ex.theWavelength` (只读, 光谱波长)
- `ichiColor.ex.getWCAGcontrastThan( ichiColor )` (计算 Web 无障碍标准颜色对比度)

扩展功能的色彩计算使用了我另外一个专注于科学计算的色彩库： [ColorRNA.js](https://github.com/nullice/ColorRNA) ，并没有做特别的优化，使用扩展后色彩计算速度会有下降，可以通过设置的实例的属性 `ichiColor.__ex_enable` 为　false 来暂停扩展功能。


## Build

如果修改了 `./scr` 下的源码，用以下命令构建项目，生成的是打包后的文件，放在 `./bin` 目录下：
```
npm run build
```

本项目使用 [rollup.js](https://rollupjs.org/) 打包。


另外本项目的 [DEMO]() 是使用 webpack1 来构建的：
```
npm run demo
```



## TEST
本项目使用 [AVA](https://github.com/avajs/ava) 来测试：
```
npm run test
```
测试后如要生成报告：
```
npm run report
```
报告生成在 `coverage` 文件夹下。

 \* *另外性能测试的文件在 `demo` 目录下。*

## Other
由于使用了 ECMAScript 5.1 标准里的 setter 和 getter ，IE8 及以下的浏览器无法使用

虽然 IchiColor 的实例属性是 getter，不过取值时没有色彩计算过程（色彩计算在 set 时完成），不用担心连续取值性能问题 

如果想要更多的功能，如色彩空间转换、色差计算，可以使用我另一个计算功能更多的色彩库：
[ColorRNA](https://github.com/nullice/ColorRNA/)

本来想叫 oneColor 的无奈名字被先用了，只好叫 ichiColor 了





## License
MIT



