const glob = require('glob');
var getEntry = function(url){
    var entry = {};
    console.log(url);
    glob.sync(url).forEach(function(name){
        /*
        循环所有文件，对文件名做处理，并放入entry数组中，返回entry
        */
       var filename = '';
       if(name.indexOf('views') != -1){
            //是html页面
            filename = name.substring((name.lastIndexOf('/')+1),name.lastIndexOf('.'));
       }
       else if(name.substring((name.lastIndexOf('.')),name.length) == '.js'){
            filename = name.substring((name.lastIndexOf('/') + 1),name.lastIndexOf('.'));
       }
       console.log(filename);
       entry[filename]=name;
    })

    return entry;
}
getEntry('../src/views/*');
