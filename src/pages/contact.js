import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import FormStyles from "../styles/FormStyles"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => console.log(error))
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <HeadingStyles>Contact</HeadingStyles>
      <ParagraphStyles>
        Do you need a new website for your growing business? Are you looking to
        learn to build websites yourself? If you answered yes to either of these
        questions, you are in luck. I love building fast performant websites and
        teaching others to do the same. Fill out the form below and let me know
        what I can do for you!
      </ParagraphStyles>
      <FormStyles
        className="contact"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <input
          className="name"
          name="name"
          type="text"
          placeholder="Name"
          aria-label="Enter Name"
          onChange={handleChange}
          required
        />
        <input
          className="email"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Enter Email Address"
          onChange={handleChange}
          required
        />
        <input
          className="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          aria-label="Enter Subject"
          onChange={handleChange}
          required
        />
        <textarea
          className="message"
          name="message"
          type="text"
          placeholder="What can I create for you?"
          aria-label="Enter Message"
          onChange={handleChange}
          required
        />
        <button type="submit">Send Email</button>
      </FormStyles>
      <Social></Social>
    </Layout>
  )
}

export default ContactPage
