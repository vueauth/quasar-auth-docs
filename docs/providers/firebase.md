# Firebase

If you haven't already, run through the [setup guide](/guide/setup) first!

## Create a Firebase Project

Head over to the [firebase console](https://console.firebase.google.com/) and click "Add project"

![Add Firebase Project](/images/firebase/add-project.png "Add Firebase Project")

- Enter a name for your project
- Enable/Disable Google Analytics
- Click "continue"

## Create a firebase web app
To use firebase with a web app, we need to do the following:

In the **Project Overview**, add a web app:
![Add a Firebase Web App](/images/firebase/add-web-app.png "Add a Firebase Web App")

- Provide a nickname for your app
- **(not required)** If you would like hosting, select "Firebase Hosting"
- Click "Register App"

When you get to step 2 (*Add Firebase SDK*), copy the **object** assigned to `const firebaseConfig`:

![Copy The Firebase Credentials](/images/firebase/copy-the-firebase-credentials.png "Copy The Firebase Credentials")

> Note that you **only need the code inside the red square** (see image above)

In your Quasar project, paste these credentials inside `config/firebase.js` within the `credentials` property:

```js
export default {
  credentials: {
    apiKey: "AIzaSyBh9fREmBwhSjJrOmYezrUzI1raYaaetdQ",
    authDomain: "vueauthfirebase-1eb51.firebaseapp.com",
    projectId: "vueauthfirebase-1eb51",
    storageBucket: "vueauthfirebase-1eb51.appspot.com",
    messagingSenderId: "725676190669",
    appId: "1:725676190669:web:73b54aa465759293c3f284"
  }
}
```

## Enable Email Password Authentication
By default, there is no way to login with Firebase!
Here's how we enable Email/Password authentication so users can login:

Go to the **Authentication** page:
![Firebase Authentication Page](/images/firebase/firebase-authentication-page.png "Firebase Authentication Page")

Select **Sign-In method**, then **Email/Password**
![Sign In Then Email Password](/images/firebase/sign-in-then-email-password.png "Sign In Then Email Password")

Select **Enable**, then **Save**
![Enable And Save Email Password Signin](/images/firebase/enable-and-save-email-password-signin.png "Enable And Save Email Password Signin")
> You do not need to enable "Email link (passwordless sign-in)"

Done! Run `quasar dev` and visit the `/register` page to give it a try 😄...

And remember, **you can configure EVERYTHING** by editing the files inside `src/auth/`

## Finding your firebase credentials
> If you've followed the guide up to this point, the following steps will not be required.

Already have a firebase web app? Here's how you find the credentials you need to setup with QuasarAuth:

Head over to the [firebase console](https://console.firebase.google.com/) and select your project.

Go to the **project settings** page:
![Project Settings](/images/firebase/project-settings.png "Project Settings")

Scroll towards the bottom of the page to find your credentials:
![Copy The Firebase Credentials](/images/firebase/copy-the-firebase-credentials.png "Copy The Firebase Credentials")

> Note that you **only need the code inside the red square** (see image above)

In your Quasar project, paste these credentials inside `config/firebase.js` within the `credentials` property:

```js
export default {
  credentials: {
    apiKey: "AIzaSyBh9fREmBwhSjJrOmYezrUzI1raYaaetdQ",
    authDomain: "vueauthfirebase-1eb51.firebaseapp.com",
    projectId: "vueauthfirebase-1eb51",
    storageBucket: "vueauthfirebase-1eb51.appspot.com",
    messagingSenderId: "725676190669",
    appId: "1:725676190669:web:73b54aa465759293c3f284"
  }
}
```

That's it! Run `quasar dev` and visit the `/register` page to give it a try 😄...

And remember, **you can configure EVERYTHING** by editing the files inside `src/auth/`