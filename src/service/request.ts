import Cookies from 'js-cookie';
import axios from 'axios';
import { basePrefix, deepMerge } from '../helpers';
import { URL } from '../constants'

/**
 * Base request handler for all the API's
 * with `get`, `post`, `put` and `delete` methods
 */

export default class request {
    settings: any;
    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    
    constructor(settings: object = {}) {
        this.settings = settings;
    }

    /**
     * Set API url
     *
     * @param {string} url - Base URL, example: 'https://'
     */
    setUrl(url: string) {
        this.settings.url = url;
    }

    /**
     * Create new request promise
     *
     * @param {object} options - request options.
     *
     * @returns {Promise}
     */
    request(options: object = {}): Promise<any> {
        let promise =
            new Promise((resolve, reject) => {
                try {
                    let request: any = {};

                    request = deepMerge(request, options);
                    request.responseType = 'json';
                    request.headers = {'Authorization': 'Bearer ' + Cookies.get('token')};

                    if (!this.settings.url) {
                        this.setUrl(URL.BASEURL);
                    }

                    axios(basePrefix(this.settings.url, request)).then(response => {
                        resolve(response.data);
                    }, err => {
                        reject(err);
                    });
                }catch (error) {
                    reject(error);
                }
            });

        return promise;
    }

    /**
     * Get resource
     *
     * @param {string} path    - Request get to endpoint e.g. /api-path/1
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    get(path: string, query: object): Promise<any> {
        let request = {
            method: 'get',
            url   : path,
            params: query,
        };

        return this.request(request);
    }
    // request(_request: { method: string; url: string; params: object; }): Promise<any> {
    //     throw new Error("Method not implemented.");
    // }

    /**
     * Post resource
     *
     * @param {string} path    - Request post to endpoint e.g. /api-path
     * @param {object} data    - Data to be posted.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    post(path: string, data: object, query: object): Promise<any> {
        let request = {
            method: 'post',
            url   : path,
            params: query,
            data
        };

        return this.request(request);
    }

    /**
     * Put resource
     *
     * @param {string} path    - Request put to end endpoint e.g. /api-path/1
     * @param {object} data    - Data to be updated.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    put(path: string, data: object, query: object): Promise<any> {
        let request = {
            method: 'put',
            url   : path,
            params: query,
            data
        };

        return this.request(request);
    }

    /**
     * Delete resource
     *
     * @param {string} path    - Request delete to endpoint e.g. /api-path/1
     * @param {object} [query] - Optional request parameters.
     * @param {object} [data]  - Data to be deleted.
     *
     * @returns {Promise}
     */
    delete(path: string, data: object, query: object): Promise<any> {
        let request = {
            method: 'delete',
            url   : path,
            params: query,
            data
        };

        return this.request(request);
    }
}
