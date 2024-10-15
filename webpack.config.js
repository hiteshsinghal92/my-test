const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
    // ...other configuration options
    module: {
      rules: [
        {
          test: /\.worker\worker\.js$/,
          use: { loader: 'worker-loader' }
        },
        // ...other rules
      ]
    },
    plugins:[
      new ModuleFederationPlugin({
        name:'container',
        remotes:{
          app1:'microfrontend@http://'
        }
      })
    ]
  };
  