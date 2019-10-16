import React, { Component } from "react"

class Comments extends Component {
  onSubmitComment = async e => {
    e.preventDefault()

    fetch("https://jca-comments-api.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ comments { id name slug parent_comment_id }}" }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data))
  }
  render() {
    return (
      <form onSubmit={this.onSubmitComment}>
        <input
          type="text"
          name="name"
          id="name"
          maxLength="255"
          placeholder="Name"
          required
        />
        <textarea
          rows="2"
          cols="5"
          name="text"
          id="text"
          placeholder="Comment"
          required
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Comments
