const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const { template } = require('@babel/core');
const distPath = path.join(__dirname,'..','/build/');

var getEntry = function(url){
    var entry = {};
    //console.log(glob.sync(url));
    glob.sync(url).forEach(function(name){
        var filename = '';
        console.log(name);
        if(name.indexOf('views') != -1){
             //是html页面
             filename = name.substring((name.lastIndexOf('/')+1),name.lastIndexOf('.'));
        }
        else if(name.substring((name.lastIndexOf('.')),name.length) == '.js'){
             filename = name.substring((name.lastIndexOf('/') + 1),name.lastIndexOf('.'));
        }  
        if(filename != ''){
            
            entry[filename]=name;
        } 
    })
    return entry;
}
//设置plugins插件
var plugins = [];
//获取js文件
var file_path = path.resolve(__dirname,'../src/entry/*/**');
var entryJs = getEntry(file_path);

entryJs['react'] = ['react'];
entryJs['react-dom'] = ['react-dom'];
//entryJs['jquery']= ['jquery'];
entryJs['react-bootstrap'] = ["react-bootstrap"];
//获取html文件
var html_path = path.resolve(__dirname,'../src/views/*')
var pages = getEntry(html_path);
for(var chunkname in pages){
    var conf = {
        filename:'html/'+chunkname+'.html',
        template:pages[chunkname],
        inject:true,//可以对head和body修改
        chunks:['jquery','react','react-dom','common',chunkname.substring(chunkname.indexOf('/')+1)],
        minify:{
            removeComments: true,
            collapseWhitespace: false
        },
        hash:true,
    }
    //把每个conf循环插入plugins
    plugins.push(new HtmlWebPackPlugin(conf));
}
module.exports={
    mode: 'production',
    entry:entryJs,
    output:{
        path:path.resolve(__dirname,"../build"),
        filename:'js/[name].min.js',
        //网站运行时的访问路径，不设置的话，打包出的html中的默认引用的路径会是相对路径
        publicPath:'/build/'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    }
                    // [sass-loader](/loaders/sass-loader)
                    
                  ]    
                
            },{
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:"static/img[name].[hash:7].[ext]"
                }
            }]
    },
    plugins:plugins
}

