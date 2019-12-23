const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const submitFormData = (e, data) => {
  const form = e.target
  fetch("/", {
    method: "POST",
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": form.getAttribute("name"),
      ...data,
    }),
  }).catch(err => {
    console.log(err)
  })
}

exports.submitFormData = submitFormData
