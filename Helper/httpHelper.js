const getParam = (req, key) => {
  return req.query[key] || req.body[key] || ''
}

export {
  getParam
}