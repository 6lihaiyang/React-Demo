const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./cfg/dev.js');
const OpenBrowser = require('open-browser-webpack-plugin');

let port = 8080;

console.log(process.env.NODE_ENV);

for(let key in config.entry){
  config.entry[key].unshift(
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server'
  );
}

config.plugins.push(new OpenBrowser({url : `http://localhost:${port}`}));

const compiler = webpack(config);

new WebpackDevServer(compiler, {
    contentBase: process.cwd() ,
    hot: true,
    publicPath: '/',
    stats:{colors: true} ,
    overlay: true,
    historyApiFallback: true,
    headers: { "X-Custom-Header": "yes", "X-Powered-By": "Fq" }
})
.listen(port, (err) => {
  if(err){
    console.log(err.stack);
  }
  console.log(`Server is running at PORT: ${port}`);
})
