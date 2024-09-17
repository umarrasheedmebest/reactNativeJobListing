module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    "@components": "./src/common/components",
                    "@styles": "./src/common/styles",
                    "@contexts": "./src/common/contexts",
                    "@constants": "./src/constants",
                    "@modules": "./src/modules",
                    "@navigation": "./src/navigation",
                    "@services": "./src/services",
                    "@utils": "./src/utils",
                    "@store": "./src/store",
                },
            },
        ],
    ],
};