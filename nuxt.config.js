export default {
    // Target (https://go.nuxtjs.dev/config-target)
    // 'server': For server side rendering
    // 'static': For static sites
    target: 'static',
    router: {
        base: '/app/'
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'bpm',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vuesax.js',
        '~/plugins/boxicons.js',
        '~/plugins/globalComponents.js',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        ['@nuxtjs/vuetify', {
            customVariables: ['~/assets/scss/variables.scss'],
            treeShake: true,
            theme: {
                themes: {
                    light: {
                        primary: '#CF3838'
                    },
                    dark: {
                        primary: '#751c1c',
                        anchor: '#da9191'
                    }
                }
            }
        }],
        ['@nuxt/typescript-build']
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
