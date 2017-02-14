const webpack = require('webpack');

function _isVendor(module) {
  return module.context && module.context.indexOf('node_modules') !== -1;
} 

const arrayCommonChunks = ['index', 'example', 'home', 'vendors.index', 'vendors.example', 'vendors.home'];

module.exports = env => {
  const dev = env ? env.dev : false;
  return {
    entry: {
      index: dev ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './scripts/index.js'
      ] : [
        './scripts/index.js'
      ],
      home: dev ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './scripts/home.js'
      ] : [
        './scripts/home.js'
        ],
      example: dev ? [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './scripts/example.js'
      ] : [
        './scripts/example.js'
      ]
      
    },

    output: {
      publicPath: env ? env.publicPath : '',
      path: `${__dirname}/public`,
      filename: 'js/[name].js'
    },
    context: `${__dirname}/client`,
    devtool: dev ? 'inline-source-map' : 'hidden-source-map',

    module: {
      rules: [{
        test: /\.js$/,
        loaders: [{
          loader: 'babel-loader',
          query: {
            presets: [['es2015', { modules: false }], 'stage-2', 'react'],
            plugins: dev ? ['react-hot-loader/babel'] : undefined
          }
        }],
        exclude: /node_modules/
      }]
    },

    plugins: dev ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.index',
        chunks: ['index'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.example',
        chunks: ['example'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.home',
        chunks: ['home'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.common',
        chunks: arrayCommonChunks,
        minChunks: function (module, count) {
          // this assumes your vendor imports exist in the node_modules directory
          return count >= (arrayCommonChunks.length / 2) && _isVendor(module);
        }
      }),
            
      
    ] : [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }, output: { comments: false }, sourceMap: true
      }),
      
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.index',
        chunks: ['index'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.example',
        chunks: ['example'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.home',
        chunks: ['home'],
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
          return _isVendor(module);
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors.common',
        chunks: arrayCommonChunks,
        minChunks: function (module, count) {
          // this assumes your vendor imports exist in the node_modules directory
          return count >= (arrayCommonChunks.length / 2) && _isVendor(module);
        }
      }),
      
      
    ]
  };
};

