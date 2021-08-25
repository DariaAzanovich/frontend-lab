# Package Managers and Build Tools

The task here is to make some magic with your JSON Visualizer code to make it looks more like a project with some basic setups.

<div  style="float: right" align="center">
  <img src="../assets/webpack.png" width="500px"/>
</div>

### The requirements for the task:

- Setup `package.json` file and `webpack.config.js`
- Webpack config should allow to not explicitly write `<script>` and `<style>` tags in `index.html` (Hint: `HtmlWebpackPlugin`)
- Make it works with SCSS using webpack loaders
- It should allow to write code with ES6 + syntax that will compile to ES5.
- Make it possible to create 2 variants of bundle: development and production (set enviroment varibale for this). Production build should be optimized.
- To run scripts we should able to write `npm run` + command
- The structure of you JSON Visualizer folder should looks smth like this (it may differ a little):

```
node_modules/

dist/
  ... <- here will be build files

src/
  index.js
  visualizer.js
  style.scss

public/
  index.html

package.json
webpack.config.js
.gitignore
```

- Rewrite your css file/files to scss
- Load [Lodash](https://lodash.com/docs/4.17.15) libarary to toy project, use it where it'll help/minimize code

### 👇 Maybe it'll help you 👇:

☘️ [Introduction to Webpack](https://medium.com/habilelabs/introduction-to-webpack-why-do-we-need-it-f9b8d003884d)</br>
☘️ [Introduction to NPM and package.json](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)</br>
☘️ [Official NPM website](https://www.npmjs.com/)</br>
☘️ [Webpack official website](https://webpack.js.org/)</br>
