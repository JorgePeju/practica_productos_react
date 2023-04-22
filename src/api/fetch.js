import { getUrl } from '../helpers/getURL';

export const consultation = async (env, param) => {

  const url = env + param

  try {

    const request = await fetch(url, {

      method: 'get',
      mode: 'cors',
      cache: 'force-cache'

    });

    if (request.ok){

      return request.json();

    } else {

      throw new Error('Error al conectar con la api');

    }
        
  } catch (error) {

    console.log(error);
    throw new Error('Error al conectar con la API');
  }
};
