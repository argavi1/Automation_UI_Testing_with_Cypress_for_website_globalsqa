const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor')

module.experts = defineConfig({
    viewportWidth: 1000,
    viewportHeight: 660,
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    env: {
        baseUrl: 'https://www.globalsqa.com/'
    },
    e2e: {
        setupNodeEvents(on, config) {
            let options = browserify.defaultOptions;
            options.browserOptions.transform[1][1].plugins.push([
                'module-resolver',
                {
                    alias: {
                        '@tests': './tests',
                        '@helper': './tests/helpers'
                    },
                },
            ])
            on('file:preprocessor', browserify(options));
        },
        specPattern: 'tests/scenarios/**/*.test.js'
    },
})