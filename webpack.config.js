let path = require('path');
let glob = require('glob'); // glob模块，用于读取webpack入口目录文件 
let webpack = require('webpack'); // webpack
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;//处理trunk
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");


const nodeEnv = process.env.NODE_ENV === "production" ? true : false;

function getEntry(){
    let entry = {};
    glob.sync('./app/*/index.js').forEach((name) => {
        var name = './'+/.*\/(app\/.*?\/index)\.js/.exec(name)[1];//得到apps/todo/index这样的文件名
        entry[name] = name;
    })
    return entry;
}

let plugins = [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
        template: './dist/index.html',//html文件的模板
    })
]
if (nodeEnv) {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false
        }),
        
    )
}


module.exports = {
    devtool: 'eval-source-map',
    // devtool: false,
    // entry:getEntry(),
    // output:{
    //     filename:nodeEnv ? "[name].min.js" : "[name].js",
    //     chunkFilename:"[name].chunk.js",
    //     path:__dirname+"/dist"
    // },
    entry: __dirname + "/app/index.js",
    output:   {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", 'react','stage-0'
                        ]
                        ,plugins:[
                            "transform-runtime"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ["file-loader?limit=1000&name=[name].[ext]"]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    resolve:{
        extensions:['.js','.less','.css','.png','.jpg']
    },
    devServer:{
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:3000
    },
    plugins
}

