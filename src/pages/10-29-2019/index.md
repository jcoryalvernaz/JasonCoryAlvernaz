---
title: "Introduction to React Hooks"
description: "In this tutorial you will learn about React Hooks, what they are, and why you should be using them in your application."
tags: ["React", "JavaScript", "React Hooks"]
published: true
date: "2019-10-29"
featuredImage: "react-hooks.png"
featuredAlt: "What are React Hooks?"
---

Hooks shipped with React 16.8 and allows you to "hook" into the React runtime. These Hooks allow you to access many React features without having to write a class component. Therefore, you can easily extend function components without converting them to a class. To learn React Hooks, I found it easiest to take an existing class component and convert it over to a function component using these Hooks. This way, you learn how to equate Hooks to the features of React that you already know and love. Now, let's take a look at a class component that you will be converting in order to learn about your first Hook.

```jsx
class Subscribe extends Component {
  state = {
    email: "",
  }

  handleChange = e => {
    this.setState({ email: e.target.value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { placeholder, buttonText } = this.props
    return (
      <form className="subscribe" onSubmit={this.handleSubmit}>
        <input
          className="subscribe-email"
          name="email"
          type="email"
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.email}
          aria-label="Email Address"
        />
        <button className="subscribe-button" type="submit">
          {buttonText}
        </button>
      </form>
    )
  }
}
```

Here you have a simple form component that is using React state to keep track of the email address. Now that you have a class component to work with let's start converting it to use hooks. The first hook that you will implement is called `useState`. Just as the name suggests, this hook allows you to use state in a function component that before would not have had access to this feature of React. So, let's look at what this component looks like with the `useState` hook.

```jsx
const Subscribe = () => {
  const [state, setState] = useState({ email: "" })

  handleChange = e => {
    setState({ email: e.target.value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  const { placeholder, buttonText } = this.props

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      <input
        className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        aria-label="Email Address"
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
  )
}
```

The `useState` hook gives you a couple of things. First, it gives access to a state variable, which here you are just calling `state`. You could have named this whatever you want. I am naming it `state` to make it consistent, but you could have just as easy named it `email` since you are only tracking one state variable. Next, you get access to the function that you can use to update `state`. Here, you are calling this function `setState` but, again, you could have named it whatever you wanted. The `useState` hook takes in one argument, which is your initial state. Now, notice that inside of your `handleChange` function, you are just calling `setState` instead of `this.setState`. Because in function components, you don't have a reference to `this`. Likewise, when you update the `value` of the form input, you call `state.email`. The [React docs](https://reactjs.org/docs/hooks-state.html) also have a great walkthrough on how the `useState` Hook works. Now that you have a good handle on `useState` let's look at how lifecycle methods are implemented using Hooks.

In the class component below, you have quite a bit going on, so let's unpack it. Here you have a toggle for updating the `isDarkMode` state variable. When `isDarkMode` is true, the toggle image is a moon, and when it is false, it is a sun. However, if a user has chosen to set `isDarkMode` to true, you want a way to persist that information. This way, the user can leave the page and come back, and it will have the same state. Therefore, you can set a variable in `localStorage`, update it when the component is mounted to the page and when the component updates. While this example is a little complex, you will see just how powerful Hooks can be in helping you to trim down your components.

```jsx
class Toggle extends Component {
  state = {
    isDarkMode: false,
  }

  componentDidMount() {
    const stored = localStorage.getItem("isDarkMode")
    this.setState({ stored === "true" ? isDarkMode: true : isDarkMode: false })
  }

  componentDidUpdate() {
    const stored = localStorage.getItem("isDarkMode")
    this.setState({ stored === "true" ? isDarkMode: true : isDarkMode: false })
  }

  toggleTheme = () => {
    localStorage.setItem("isDarkMode", !isDarkMode)
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

  render() {

    const { isDarkMode } = this.state

    return (
      <>
        <input
          aria-label="Change Between Light and Dark Site Theme"
          className="switch"
          type="checkbox"
          onChange={this.toggleTheme}
          checked={isDarkMode}
        />
        <span className="slider">
          <img
            src={isDarkMode ? moon : sun}
            alt={isDarkMode ? "Moon" : "Sun"}
          />
        </span>
      </>
    )
  }
}
```

Converting the above class component to a functional component requires the use of a Hook called `useEffect`. Put simply, `useEffect` allows you to perform side effects in your function components. Comparing it to lifecycle methods, `useEffect` is like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` all rolled into one. So, what would this component look like if you used Hooks?

```jsx
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("isDarkMode")
    setIsDarkMode(stored === "true" ? true : false)
  })

  toggleTheme = () => {
    localStorage.setItem("isDarkMode", !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <input
        aria-label="Change Between Light and Dark Site Theme"
        className="switch"
        type="checkbox"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <span className="slider">
        <img src={isDarkMode ? moon : sun} alt={isDarkMode ? "Moon" : "Sun"} />
      </span>
    </>
  )
}
```

Employing the use of Hooks has allowed you to reduce the complexity of this component substantially. In the class component, you were having to look at `localStorage` and set the state twice in both `componentDidMount` and `componentDidUpdate`. Furthermore, you were able to knock out the complexity with state by having a single state variable called `isDarkMode`, so that you never have to call `state` throughout the component. Again, this example is a little complex. However, I think it truly illustrates the power of using React Hooks in your application. For a more straightforward look at the `useEffect` hook, take a look at the [React docs](https://reactjs.org/docs/hooks-effect.html). Now you know the basics of React Hooks and some of the reasons to use them in your application. If you have any questions or comments, be sure to post them below and help spread the word by sharing this post on your favorite social media below.
