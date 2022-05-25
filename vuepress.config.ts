import { defineUserConfig } from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'VueAuth',
  description: 'Vue Authentication Vue Made Easy!',

  // theme and its config
  theme: defaultTheme({
    // logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      {
        text: 'Guide',
        children: [
          '/guide/introduction',
          '/guide/setup',
        ],
      },
      {
        text: 'Auth Providers',
        collapsible: true,
        children: [
          '/providers/supabase',
          '/providers/firebase',
          '/providers/sanctum'
        ]
      }
    ]
  }),
})