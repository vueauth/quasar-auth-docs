# Setup

## The App Extension
Add the QuasarAuth app extension to you Quasar app:
```sh
quasar ext add @vueauth/auth
```

Select an auth provider:
```sh
❯ Laravel Sanctum 
  Firebase 
  Supabase 
```
> When vueuath is out of beta, many new providers will be added!

## Auth Provider Config
Notice the new `config/` folder in the root of your project? Open it to configure your app! Here's an example with supabase:
```js
export default {
  credentials: {
    supabaseUrl: 'https://your-ground-breaking-app.supabase.co',
    supabaseKey: 'YOUR.SUPABASE.KEY'
  }
}
```

Need help setting up your auth provider? No worries! Head on over to [Auth Providers](/providers)

## Handling Redirects
Handle redirects by using `authenticateRoutes()` in `src/App.vue`
```vue
<!-- src/App.vue -->
<script setup>
import { authenticateRoutes } from '@vueauth/quasar-ui-auth'
authenticateRoutes()
</script>

<template>
  <router-view />
</template>
```