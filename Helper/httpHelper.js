const getParam = (req, key) => {
  return req.body[key] || ''
}

export {
  getParam
}