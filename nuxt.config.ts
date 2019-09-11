import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s -  + ${process.env.npm_package_name}`,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
  ],
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
};

export default config;