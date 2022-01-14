# Supabase

If you haven't already, run through the [setup guide](/guide/setup) first!

## Create a Supabase Project

Head on over to [app.supabase.io](https://app.supabase.io/) and create a new project.

You may need to create a new organization first!

![Create Supabase Project](/images/supabase/create-supabase-project.png "Create Supabase Project")

Your project may take a couple of minutes to build. Grab yourself a coffee and a cookie ☕🍪

## Adding your supabase credentials
Here's how you find your supabase credentials:

Select the **gear** icon:

![Supabase Settings](/images/supabase/supabase-settings.png "Supabase Settings")

Select **API**

![Supabase API Setting](/images/supabase/supabase-api-setting.png "Supabase API Setting")

This page contains the credentials you need. **API Key**, and **URL** (see image)

![Supabase API Setting](/images/supabase/supabase-credentials.png "Supabase API Setting")

Paste these keys into `config/supabase.js` in your Quasar project! Here's an example:

```js
export default {
  credentials: {
    supabaseUrl: 'https://fjtnvztlimsgpeotytrq.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTQ1NDU2LCJleHAiOjE5NTc3MjE0NTZ9.5bH5QzsHTxpm0v4IF1o8WLyhS4zgmNAm1-Z-0kMqk-c'
  }
}
```

And you're done 😄. Run `quasar dev`, head on over to `/register` and give it a try!