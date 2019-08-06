import { User } from '../../../models/User';
import { returnError } from '../../../service/internalError';
import { defaultHeaders } from '../../../service/defaultHeader';

export const loadUsers = async () => {
  try {
    const URL = process.env.REACT_APP_GET_USERS || '';

    const parameters = {
      method: 'GET',
      headers: {
        ...defaultHeaders()
      }
    };

    const response = await fetch(`${URL}&populate=groups`, parameters);

    if (response.status === 401) {
      throw response;
    }

    const json = await response.json();

    json.sort((b: any, a: any) => {
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      return 0;
    });

    return json;
  } catch (error) {
    return error;
  }
};

export const getUser = async (id: string) => {
  try {
    const URL = process.env.REACT_APP_GET_USER || '';

    const parameters = {
      method: 'GET',
      headers: {
        ...defaultHeaders()
      }
    };

    const response = await fetch(URL.replace('{id}', id), parameters);

    if (response.status === 401) {
      throw response;
    }

    const data = await response.json();

    return {
      ok: response.ok,
      data
    };
  } catch (error) {
    return error;
  }
};

export const checkUser = async (token: string, password: string) => {
  try {
    const URL = process.env.REACT_APP_CHECK_USER || '';

    const parameters = {
      method: 'POST',
      headers: {
        ...defaultHeaders()
      },
      body: JSON.stringify({
        password
      })
    };

    const response = await fetch(URL.replace('{token}', token), parameters);

    return response.json();
  } catch (error) {
    return returnError();
  }
};

export const createUser = async (body: any) => {
  try {
    const URL = process.env.REACT_APP_CREATE_USER || '';

    const parameters = {
      method: 'POST',
      headers: {
        ...defaultHeaders()
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(URL, parameters);

    if (response.status === 401) {
      throw response;
    }

    const data = await response.json();

    return {
      ok: response.ok,
      data
    };
  } catch (error) {
    return error;
  }
};

export const updateUser = async (body: User) => {
  try {
    const URL = process.env.REACT_APP_UPDATE_USER || '';

    const parameters = {
      method: 'PUT',
      headers: {
        ...defaultHeaders()
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(URL.replace('{id}', body._id), parameters);

    if (response.status === 401) {
      throw response;
    }

    const data = await response.json();
    return {
      ok: response.ok,
      data
    };
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (user: User) => {
  try {
    const URL = process.env.REACT_APP_DELETE_USER || '';

    const parameters = {
      method: 'DELETE',
      headers: {
        ...defaultHeaders()
      }
    };

    const response = await fetch(URL.replace('{id}', user._id), parameters);

    if (response.status === 401) {
      throw response;
    }

    const data = await response.json();

    return {
      ok: response.ok,
      data
    };
  } catch (error) {
    return error;
  }
};

export const getUserFeatures = async (id: string) => {
  try {
    const URL = process.env.REACT_APP_GET_USER_FEATURES || '';

    const parameters = {
      method: 'GET',
      headers: {
        ...defaultHeaders()
      }
    };

    const response = await fetch(URL.replace('{id}', id), parameters);

    if (response.status === 401) {
      throw response;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const sendEmailResetPassword = async (body: any) => {
  try {
    const URL = process.env.REACT_APP_RESET_PASSWORD || '';

    const parameters = {
      method: 'POST',
      headers: {
        ...defaultHeaders()
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(URL, parameters);
    const data = await response.json();
    return {
      ok: response.ok,
      data
    };
  } catch (error) {
    return returnError();
  }
};

export const checkEmail = async (token: string) => {
  try {
    const URL = process.env.REACT_APP_CHECK_EMAIL || '';

    const parameters = {
      method: 'POST',
      headers: {
        ...defaultHeaders()
      }
    };

    const response = await fetch(URL.replace('{token}', token), parameters);
    return response.json();
  } catch (error) {
    return returnError();
  }
};

export const resendEmail = async (userId: any) => {
  try {
    const URL = process.env.REACT_APP_RESEND_EMAIL || '';

    const parameters = {
      method: 'POST',
      headers: {
        ...defaultHeaders()
      }
    };
    const response = await fetch(URL.replace('{id}', userId), parameters);

    if (response.status === 401) throw response;

    return response.json();
  } catch (error) {
    return error;
  }
};
