# Introduction

QuasarAuth has three core objectives:
1. Lightning **fast** setup
2. **Configurable** components and routing handled for you
3. Easily support **ANY auth provider**

## Lightning fast setup
Setting up VueAuth is a breeze and can be done in [three short steps](/guide/getting-started)
1. add the app extension
2. select an auth provider
3. paste your credentials

Done. In **less than three minutes** you're good to go.

## Configurable components and routing
After following the lightning fast setup, you'll have an app with the following pages/routing:
- Register
- Login
- Logout
- Reset Password
- Update Password
- Authenticated/Unauthenticated Redirects

And **everything is configurable**. You'll have a `src/auth` folder that you can tweak to your hearts content!

## Easily support ANY auth provider
How do we make it easy to support a large array of auth providers?
**Interfaces** (also known as **contracts**)

This is possibe because as it turns out, the way authentication works across auth providers is almost always the same.

Take **email password login** as an example. The story always looks like this:
- A *login* request is sent, returning a *promise*
- the request will either *succeed*, *fail*, or fail with *validation errors*

This story is always the same! And therefore, we can turn it into a contract that looks something like this:

```ts
interface UseIdentityPasswordLoginReturn {
  form: Ref<IdentityPasswordLoginForm>;
  login: () => Promise<void>
  loading: Ref<boolean>
  validationErrors: Ref<ValidationErrors>;
  errors: Ref<RequestErrors>;
}
```
> some methods have been removed for brevity

And that brings us to [vueauth](https://vueauth.com). A library that unifies authentication across providers (ie Firebase, Laravel Sanctum, Supabase)

### Unifying Authentication
QuasarAuth uses a library under the hood called [vueauth](https://vueauth.com). Basically, VueAuth is a set of contracts detailing what the api looks like.

In short, VueAuth **standarizes** how we authenticate.

Let's drive this concept home with some diagrams!

#### Authenticating A Vue App With Firebase
![Authenticating With Firebase](/images/authenticating-vue-with-firebase.png)

#### Authenticating A Vue App With Supabase
![Authenticating With Supabase](/images/authenticating-vue-with-supabase.png)

See how they're both using the same interface? This is what we mean by a **unified API** for authentication! VueAuth even allows us to "swap out" auth providers so you can, for example, switch from authenticating with Firebase to authenticating with Supabase!

This is how QuasarAuth is able to easily support any auth provider! The components are built using *interfaces* as shown in the images above, and this means we **don't have to build new components for every single provider**.