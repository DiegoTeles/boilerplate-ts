import request from './request'

/**
 * Sets the request service
 **/
const api = new request();

let data = {};

/**
 * Get event amounts
 *
 * @param id - The event id.
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getTest = (query={}): Promise<any> => { 
    return api.get(`pokemon/ditto/`, query);
};

/* Constant object to represent Service Functions */
export const testService = {
    data,
    getTest
};
