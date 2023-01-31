const Ok = (msg = '请求成功', data = {}) => {
  return {
    state: 'ok',
    msg: msg,
    data
  }
}

export {
  Ok
}