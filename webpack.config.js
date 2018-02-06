module.exports = {
    devtool:"eval-source-map",
    // entry:__dirname+'/app/main.js',
    entry:__dirname+'/app/todo/index.js',
    output:{
        path:__dirname+'/public',
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                query:{
                    "presets": ["react", "es2015"]
                }
            }
        ]
    },
    devServer:{
        contentBase:"./public",
        port:8080,
        inline:true,
        historyApiFallback:true
    }
}