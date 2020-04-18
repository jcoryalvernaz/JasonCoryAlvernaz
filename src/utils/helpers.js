const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[parseInt(key)]))
    .join('&')
}

const submitFormData = (e, data) => {
  const form = e.target
  fetch('/', {
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...data,
    }),
  }).catch(err => {
    /* eslint-disable-next-line */
    console.log(err)
  })
}

exports.submitFormData = submitFormData
