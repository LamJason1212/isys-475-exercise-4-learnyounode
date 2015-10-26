var fs = require('fs');
var path = require('path');


var file = fs.readdir(process.argv[2], function callback(err, list){
    if (err)
        throw err
    else{
        for (var i = 0; i < list.length; i++)
        {
            if(list[i].match('.md'))
            console.log(list[i]);
        }
    }
    
})