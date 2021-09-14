# Authentication

Let's make Cocktail app more personal.

Here you have to implement authentication process in the project.

### Requirements:

- Open authentication modal by click on <b>Get Started</b> button in the header
- Modal should have 2 modes: <b>Sign In</b> and <b>Sign Up</b>
- Password fields should hide their value
- Validate fields on blur and on submit
- Close modal when the request on sign in/up return success
- If request ends with error show it notification toast
- If user closes the modal all data resets
- After user is logged in, hide <b>Get Started</b> button and show account

### Notes:

- You may use [Joi](https://joi.dev/api/) library for setting validation up. It's popular and widely used library.
- There're a swarm of libraries thats implement toasts, use one of them. The most famous are [React-Toastify](https://www.npmjs.com/package/react-toastify) and [Notistack](https://iamhosseindhv.com/notistack)
