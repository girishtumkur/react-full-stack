const path = require('path');

module.exports = {
    mode : 'development',
    entry : path.resolve(__dirname , 'src', 'app' ),
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js',
        publicPath : '/'
    },

    resolve:{
        extensions :  ['.js','.jsx']
    },
    devServer: {
        historyApiFallback : false  // to make react router to work 
    },

    module : {
        rules : [{
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }


}