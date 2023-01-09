import Guid from 'guid'

const createGuid = () => {
  return Guid.create().value
}

export {
  createGuid
}