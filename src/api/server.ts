const token = "63b66162be584e2aff202cef757b4e4304c2bedcae181293"

export const server_calls = {
    get: async () => {
        const response = await fetch('https://contactsaver-5928.onrender.com/api/contacts',
        {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `${token}`
            }
            
        });
        if (!response.ok){
            throw new Error("Failed to fetch data from the server");   
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch("https://contactsaver-5928.onrender.com/api/contacts",
        {
            method: 'POST',
            headers: {
                'content-Type': "application/json", 
                'Access-Control-Allow-Origin': "*",
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://contactsaver-5928.onrender.com/api/contacts/${id}`,
        {
            method: 'POST',
            headers: {
                'content-Type': "application/json", 
                'Access-Control-Allow-Origin': "*",
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://contactsaver-5928.onrender.com/api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token':`${ token }`
            },
            })
            if (!response.ok) {
                throw new Error('Failed to delete data from the server')
            }
            return;
    }
    
}

