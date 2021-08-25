# Data Management

To manage data in our app we'll use Redux library, find info about it in [useful links](../useful_links.md).

The task here is:

1. setup Redux in your app
2. create your 1st actions to store some key of opened modal</br>(Tip: create key for each modal and pass it in action payload, save in Redux store)
3. expore Redux dev tools
4. The next step is to get familiar with Redux middlewares.
   - read this article if you don't know what is it - [Redux Middleware: A Perfect Beginner’s Guide ](https://www.cronj.com/blog/redux-middleware-a-perfect-beginners-guide/)
   - look through [Saga](https://ru.redux-saga.js.org/soderzhanie/introduction/beginnertutorial) and [Thunk](https://habr.com/ru/post/483314/) middlewares and select one of them
   - once you decide what middleware you whant to use, install it and setup
   - after this you need to make you 1st side effect, to make a request for getting data for random coctail (look for it in [API docs](./api_docs.md)) and write this data to Redux store.
5. Once the data is in the store, lets get it and put into the modal. Make data in the modal looks like in the design.</br>
   Tips:
   - create Redux selector to get necessary data from store
   - create container component for your modal component, [here there's an example](https://blog.jakoblind.no/are-container-components-necessary-when-using-redux/)
6. In the modal there's button `Save to Liked`, so let's hide it for now, as it'll be feature for Authorized users.
