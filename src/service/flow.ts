/* Routes Constant */
import { ROUTES } from '../constants';

/**
 * Get path
 *
 * @return {string} pathname
 */
const getPath = (): string => {
    return window.location.pathname;
}

/**
 * Get search string
 *
 * @return {string}
 */
const getSearch = (): string => {
    return window.location.search;
}

/**
 * Get search params
 *
 * @return {object} URLSearchParams instance
 */
const getParams = (): object => {
    const search = getSearch();
    const params = new URLSearchParams(search);

    return params;
}

/**
 * Set search params
 *
 * @param {any} params
 *
 * @return {string} search params as string
 */
 const setParams = (params: any): string => {
    if (typeof params !== 'object') {
        return '';
    }

    let paramValue     = '';
    const search       = getSearch();
    const searchParams = new URLSearchParams(search);

    Object.keys(params).map((paramName): boolean => {
        paramValue = params[paramName];

        if (paramValue){
            searchParams.set(paramName, decodeURIComponent(paramValue));
        }

        paramValue = '';

        return true;
    });

    return searchParams.toString();
}

/**
 * Get specific search param
 *
 * @param {string} paramName
 *
 * @return {string} paramValue
 */
const getParam = (paramName: string): any => {
    const search     = getSearch();
    const params     = new URLSearchParams(search);
    const paramValue = params.get(paramName);

    return paramValue;
}

/**
 * Get Host
 *
 * @return {string} host domain
 */
const getHost = (): string => window.location.host

/**
 * Get flow data
 *
 * @return {object} flow data
 */
const get = (): object => {
    const path   = getPath();
    const search = getSearch();

    return {
        path,
        search,
    };
}

/**
 * Go to
 *
 * @param {string} path
 * @param {string} params
 */
const goTo = (path: string, params: string) => {
    window.location.replace(decodeURIComponent((path || ROUTES.INDEX) + (params ? params : '')));
}

/**
 * Page Reload
 *
 * @param {boolean} forceGet
 */
const reload = (forceGet: boolean = false) => {
    window.location.reload(forceGet);
}

/* Constant object to represent Service Functions */
export const flowService = {
    goTo,
    get,
    getHost,
    getPath,
    getParam,
    getParams,
    getSearch,
    reload,
    setParams,
};
