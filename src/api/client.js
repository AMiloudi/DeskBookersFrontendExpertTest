import request from 'superagent'

export default class ApiClient {

    constructor(host) {
        this.host = 'https://www.deskbookers.com/nl-nl/explore/ajax.json'
    }

    get(persons, city) {
        return request
            .get(this.createUrl("?people" + persons + "&q=" + city))
            .set(this.headers())
    }

    headers() {
        let headers = {
            Accept: 'application/json'
        }

        return headers
    }

    createUrl(path) {
        return [this.host, path].join('')
    }
}
