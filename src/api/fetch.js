
const urlBaseDjson = import.meta.env.VITE_URL_BASE_DJSON

const urlDetailView = import.meta.env.VITE_URL_PRODUCT_DJSON

export const consultation = async (category, id) => {

    const urlFetch = category ? `${urlBaseDjson}${category}` : `${urlDetailView}${id}`;

    try {

        const request = await fetch(urlFetch, {

            method: 'get',
            mode: 'cors',
            cache: 'force-cache'

        });

        if (request.ok){

            return request.json()

        } else {

            throw 'Error al conectar con la api'

        }
        
    } catch (error) {

        console.log(error);

        throw new Error('Error al conectar con la API');
        
    };
}
