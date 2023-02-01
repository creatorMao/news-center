const getParam = (req, key) => {
  if (req.query) {
    return req.query[key]
  }

  if (req.body) {
    return req.body[key]
  }

  return ""
}

export {
  getParam
}