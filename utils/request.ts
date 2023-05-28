const Post = async (endpoint: string, data?: any, token?: any): Promise<any> => {
    try {
        let result = await fetch(`https://nlacha.godheranca.com/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: data
        });

        return result.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

const Get = async (endpoint: string, token?: any): Promise<any> => {
    try {
        let result = await fetch(`https://nlacha.godheranca.com/api/${endpoint}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        });

        return result.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

export { Post, Get };
