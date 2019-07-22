
if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');
const template = fs.readFileSync(path.join(__dirname,'../dist/search.html'),'utf-8');
const data = require('./data.json');


const server = (port) => {
    const app = express();

    app.use(express.static('dist'));

    app.get('/search',(req,res)=>{
        const html = renderMarkup(renderToString(SSR));
        res.status(200).send(html);
    });

    app.listen(port,()=>{
        console.log('server开始运行在'+port+'端口');
    })
};

server(process.env.PORT || 3000);

const renderMarkup = (str) => {
    const dataStr = JSON.stringify(data);
    return template.replace('<!--HTML_PLACEHOLDER-->',str)
            .replace('<!--INITIAL_DATA_PLACEHOLDER-->',`<div>window.__initial_data=${dataStr}</div>`);
}