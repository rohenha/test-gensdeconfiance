const axios = require('axios');

export async function getApiContent(email: string): Promise<[]> {
    try {
        const response = await axios.get("http://127.0.0.1:5000/", {
            params: {
                email: email
            }
        });
        return new Promise(resolve => {
            resolve(response.data)
        })
    } catch (error) {
        return [];
    }
};