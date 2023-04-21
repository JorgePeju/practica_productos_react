
export const consultation = async (category) => {

    try {

        const request = await consultation(`https://dummyjson.com/products/category/${category}`, {

            method: 'get',
            mode: 'cors',
            cache: 'force-cache'

        });

        if(request){

            const response = await request.json();

            return response;

        };
        
    } catch (error) {

        console.log(error);

        throw new Error('Error al conectar con la API');
        
    };
}
