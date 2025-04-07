const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'ang-remote',
    exposes: {
        './Module': './src/app/app.module.ts'
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});
