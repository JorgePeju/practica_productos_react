
const urlBaseDjson = import.meta.env.VITE_URL_BASE_DJSON

const urlDetailView = import.meta.env.VITE_URL_PRODUCT_DJSON


export const consultation = async (id, category ) => {

    console.log(id)
    const urlFetch = id ?  `${urlDetailView}${id}` : `${urlBaseDjson}${category}`;
    console.log(urlFetch)
   
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
