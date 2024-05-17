
const ENDPOINT_BASE = 'https://aerial-oo-plymouth-retrieved.trycloudflare.com/'

export const createUser = async (body: any) => {
    const postData = await fetch(`${ENDPOINT_BASE}api/v1/cliente/`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
    return postData.json()
}

export const getClientes = async () => {
    //const resp = await fetch(`${ENDPOINT_BASE}api/v1/cliente/`);
    //if (!resp.ok) throw new Error('Error en la petición');
    //const users = await resp.json();
    const fakeData = [
        {
            "id": 3,
            "nombre_comercial": "36-t",
            "telefono": "55555555",
            "correo": "hello@36-t.com"
        },
        {
            "id": 4,
            "nombre_comercial": "Axios",
            "telefono": "777777",
            "correo": "hello@36-t.com"
        },
        {
            "id": 5,
            "nombre_comercial": "36-t fake",
            "telefono": "55555555",
            "correo": "hello@36-t.com"
        },
        {
            "id": 6,
            "nombre_comercial": "Axios fake",
            "telefono": "777777",
            "correo": "hello@36-t.com"
        }
      ]
    return fakeData;
      //return users;
}

export const getClient = async (id:number) => {
    //const resp = await fetch(`${ENDPOINT_BASE}api/v1/cliente/${id}`);
    //if (!resp.ok) throw new Error('Error en la petición');
    //const users = await resp.json();
    const fakeData = 
        {
            "id": 3,
            "nombre_comercial": "36-t",
            "telefono": "55555555",
            "correo": "hello@36-t.com"
        }
      
    return fakeData;
      //return users;
}

export const updateUser = async (body: any) => {
    const postData = await fetch(`${ENDPOINT_BASE}clientes/`, {
        method: 'PATH',
        body: JSON.stringify(body)
    })
    return postData.json()
}
