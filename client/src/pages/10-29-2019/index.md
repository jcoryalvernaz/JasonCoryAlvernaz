---
title: "Introduction to React Hooks"
description: "In this tutorial you will learn about React Hooks and why you should be using them."
tags: ["React", "JavaScript"]
published: false
date: "2019-10-29"
featuredImage: "ComingSoon_2.png"
featuredAlt: "YouTube Video Scene"
---

# Introduction to React Hooks

<div class="post-date">Oct- <span class="day">29</span> -2019</div>

Hooks shipped with React 16.8 and allows you to "hook" into the React runtime. These hooks allow you to access many React features without having to write a class component. Therefore, you can easily extend function components without converting them to a class. To learn React Hooks, I found it easiest to take an exisiting class component and convert it over to a function component using these hooks. This way you learn how to equate hooks to the features of React that you already know and love. Now, let's take a look at the class component that we will be converting.

```jsx
import React, { Component } from "react"

class Subscribe extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    this.setState({ email: e.target.value.trim() });
  };

  handleSubmit = e => {
      e.preventDefault();
  };

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

export default Subscribe;
```

Here we have a simple form component that is using React state to keep track of the email address. Now that you have a class component to work with, let's start converting it to use hooks. The first hook that you will implement is called useState. Just as the name suggests, this hook allows you to use state in a function component that before would not have access to this feature of React. So, let's look at what this component looks like with the useState hook.

```jsx
import React from "react"


```