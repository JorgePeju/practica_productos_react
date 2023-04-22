
export const getUrl = (env, param) => {

    let url = '';

    switch(env) {

      case import.meta.env.VITE_URL_BASE_DJSON:

        url = import.meta.env.VITE_URL_BASE_DJSON;
        break;

      case import.meta.env.VITE_URL_PRODUCT_DJSON:

        url = import.meta.env.VITE_URL_PRODUCT_DJSON;
        break;

      case import.meta.env.VITE_URL_SEARCH:

        url = import.meta.env.VITE_URL_SEARCH;
        break;

      default:

        throw new Error('Variable de entorno no definida');
    }

    return url + param;

  };
  