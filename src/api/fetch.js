
const urlBaseDjson = 'https://dummyjson.com/products/category/'

export const consultation = async (category) => {

    try {

        const request = await fetch(`${urlBaseDjson}${category}`, {

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
