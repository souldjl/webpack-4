### webpack 常用的loader


```javascript
module exports = {
    module:{
        rules:[
            {
                test:/\.vue$/,   //匹配 以.vue结尾的 文件
                loader:'vue-loader'   //使用vue-loader
            },
            {
                test:/\.css/,   //匹配 以.css结尾的 文件
                use:[
                    'style-loader',  //将css 生成到页面里面
                    'css-loader',   //可以识别css。 *
                ]
            },
            {
                test:/\.(png|gif|jpg|jpeg|svg)$/,
                use:[
                    {
                        loader:'ulr-loader',
                        options:{
                            limit:1024 // 限制大小，小于此参数执行 url-loader
                            name:'[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    }
}
```

### css-loader
> 默认webpack只识别 js文件,需要css-loader来支持引入。eg ：在js 文件中 `·import 'a.css' `
### style-loader
> 上面只是识别了 css 文件。这个 `loader` 可以让 js 把 `css-loader` 识别到的 `css` 用 style标签 把 这段css 写到html 页面上去 。原理，生成 style 标签，`document.append`  `css-loader` 识别的 css样式文件。
### url-loader
>    将页面上的图片资源 转换成base64 的图片格式，减少请求数量。基于 `file-loader`.安装的时候请一同安装`file-loader`
###### options 参数
 - limit 限制大小，小于此参数执行 url-loader 转换为 base64
 - name  输出后文件的名字
    * [name] :源文件的名字,
    * [ext] : 源文件的格式。
