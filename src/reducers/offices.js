import { FETCH_SEARCH_DATA } from '../actions/offices/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_SEARCH_DATA :
    return payload

    default :
    return state
  }
}
