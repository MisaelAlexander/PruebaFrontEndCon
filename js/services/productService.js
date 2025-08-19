/*Parte de API */
const API_URL = 'http://localhost:8080/api/products';
/*Parametros de valores por defecto*/
/*Si no se piden valores mandara la pagina 0 con los primeros 10 productos */
export async function getProducts(page = 0, size = 10) 
{
    const res = await fetch(`${API_URL}/getAllProducts?page=${page}&size${size}`);
    return res.json();    
}


/*Post */
export async function createProduct(data) 
{
    await fetch(`${API_URL}/newProduct`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data),   
        }
    );
}

/*Put */
export async function updateProduct(data) 
{
    await fetch(`${API_URL}/updateProduct/${id}`,
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data),   
        }
    );
}

/*Delete*/
export async function deleteProduct(id) 
{
    await fetch(`${API_URL}/updateProduct/${id}`,{method: 'DELETE'});    
}
/*Parte de API*/