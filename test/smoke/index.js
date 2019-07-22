const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: '10000ms'
})

process.chdir(path.join(__dirname,'template'));

rimraf('./dist',()=>{
    const prodConfig = require('../../lib/webpack.prod.js');

    webpack(prodConfig,(err,stats)=>{
        if(err){
            console.error(err);
            procsee.exit(2);
        }
        console.log(stats.toString({
            colors:true,
            modules:false,
            children:false
        }));

        console.log('webpack构建成功，开始测试');
        

        mocha.addFile(path.join(__dirname, 'html-test.js'));
        mocha.addFile(path.join(__dirname, 'css-js-test.js'));

        mocha.run();
    });
});