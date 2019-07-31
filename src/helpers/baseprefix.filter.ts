/**
* Rquest middleware to format url with a base URL
*
* @params {string} base - Base URL for all requests.
* @returns {function}
*/
export const basePrefix = (base:string = '', request: any): string => {
    let path = request.url.replace(/^\//, '');
    base = base.replace(/\/$/, '');

    request.url = `${base}/${path}`;

    return request;
};
