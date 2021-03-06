---
title: "Introduction to Create-React-App"
description: "Learn the basics of create-react-app, an amazing tool that allows you to quickly and efficiently get a React.js application up and running."
tags: ["React", "JavaScript"]
published: true
date: "2019-09-20"
featuredImage: "create-react-app.png"
featuredAlt: "React.js Logo"
---

Setting up a React.js application can be a bit of a pain in the neck. However, with modern tools like `create-react-app` you can get these types of apps set up much quicker and easier. This week you will be delving into the ins-and-outs of this tool and show how you can get a modern web application up and running with a few simple commands.

<div class="tip tip-right">

Read the documentation on [GitHub](https://github.com/facebook/create-react-app)

</div>

> "Get a modern web application up and running with a few simple commands."

Before you create your web app with `create-react-app` there are some things that you need to do to set up your development environment. First, you must have a text editor to run and edit your React.js application. My text editor of choice is [VS Code](https://code.visualstudio.com), and you will find that this editor has become extremely popular amongst web developers over that last few years. However, if you are more comfortable using other editors such as Sublime Text or Atom, feel free to use what you like. Second, you must have Node.js and npm installed on your local machine. Not sure if you have downloaded Node.js previously? No problem. Just hop onto your terminal of choice and type `node -v` and `npm -v`. If you have Node.js installed, you should see the version number that you are currently running. If you don't have it installed, just head on over to the [Node.js website](https://nodejs.org/) and download the version that says "Recommended For Most Users."

<div class="tip tip-left">

Learn better with video? Take a look at this tutorial on [YouTube](https://www.youtube.com/watch?v=T-Zxw-K0PE8)

</div>

Now that you have your development environment all set up, you can start running those simple commands that I touched on earlier. In your terminal, `cd` into the directory that you want your project to live. Again, in your terminal, type the command `npx create-react-app my-app` replacing my-app with the name of your application. You should see it grind for a little bit while it sets up the project. Once it has finished, type `cd my-app` to get into the directory where your project is now living. Now let's test the application to make sure it runs. In your terminal, type the command `npm start`, which will start up your development server. If the application doesn't automatically do so, head over to http://localhost:3000 in your browser to see the newly created React.js application running. You should see a spinning React.js logo that looks similar to the one below. Congratulations! You have officially created your first web app using `create-react-app`. Now, let's start looking into the project structure to see everything you get with your React.js application.

![React.js Logo](create-react-app.png)

Head on over to your text editor and take a look at the file structure that was created. It should look like the structure below. Note: Yours may differ a little depending on what is in the current version of `create-react-app`. The first folder that appears in the tree is `node_modules`, and if you have any experience with Node.js you know that this is where your dependencies live. In the public folder, you have a favicon, which is just the image that is used in the browser tab for the application. The `manifest.json` file is where you can specify the name of your application, which icons to use, and other information if your app were to be installed on a user's mobile device or desktop. The `robots.txt` file is for SEO, and lets crawlers know which pages on your site to index. Now, the `index.html` file is where the magic of React.js really begins. So, let's open that file and take a look.

```
my-app
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── logo.svg
│   └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

The image below shows the code within the `index.html` file. I have stripped out the comments that will be present in your file. Now, this a fairly boilerplate Html file. The area that you need to focus on here is `<div id="root"></div>` tag close to the end of the document. This root element is where your React components will be nested. So, let's take a look at the single component that is currently in your application.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Within the src folder, you will find the `App.js` file. Crack it open and let's take a look at what's inside. Notice, from the figure below, that your App component is really just a JavaScript function. As such, these components are called "functional components." Shocking, I know. Look below the `return` call from your function, and you will notice some syntax that looks a bit like Html. This syntax is called [JSX](https://reactjs.org/docs/introducing-jsx.html), and will eventually be rendered out to the page as plain Html. The cool thing about JSX is that you can write JavaScript within the Html-like syntax to make your application behave a bit more dynamic. For instance, if you have an array that you want to print to the screen as a list, you would just iterate over the array and generate a `<li></li>` tag for each of the items. Now, if your array changes in size, the list will also change in size. Pretty cool, right? Now, take a look at the `src` attribute within the `<img/>` tag. You will notice that you are setting the value to `{logo}`. Anytime you want to use JavaScript within your JSX; you escape with the curly braces. Here, you are merely setting the `src` to the image that you are importing into the file up above. Now, how does your application know that your `App.js` component needs to go into the root element in your `index.html` file? Let's answer that question.

```jsx
import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
```

Go ahead and open the `index.js` file within the src folder. Notice here, from the image below, that you are importing `react-dom`. This package allows you to access the DOM from your React.js application. Notice also, that you are importing your `App.js` component and then rendering it out to your root element. It is important to note that your component, `<App />` looks very similar to an Html tag. However, the component is capitalized, which is essential because this is how React.js knows the difference between components and JSX that should be rendered as Html. So, always capitalize your component names. And with that, you now know how your component gets rendered out to the page.

```jsx
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))
```

The last two files that I want to touch on are the `package.json` and `README.md` files. The `package.json` file contains a lot of necessary information for your application. For instance, this is where you manage any dependencies that you have, set up scripts, and set up your browser list. Whenever you install another package into your project, it will show up here under dependencies. The `README.md` is a useful resource for questions regarding the scripts and what each of them does. For instance, the `npm build` command builds the app for production and stores all of the minified javascript within a new folder called build. Go ahead and give it a shot.

> "Now you know the basics of create-react-app."

Now you know the basics of `create-react-app`. There is definitely a lot more to this tool than you covered throughout this short introduction. For instance, under the hood, the tool sets up the webpack config and babel settings, topics of which you will cover in future tutorials. But, now you know the basics of the tool and can now get started building your first React.js application. So, where do you go from here? Make sure to read more of my blog posts on the topic of [React.js](/tags/react) and hop over and subscribe to my [YouTube channel](https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w) where you will find a great library of video tutorials. There are also a ton of other great resources for learning React.js. I can personally vouch for the [React for Beginners](https://reactforbeginners.com/) course from [Wes Bos](https://wesbos.com/), which is an excellent starting point for those looking to learn this exciting technology.
