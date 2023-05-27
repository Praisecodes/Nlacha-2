const Post = async (endpoint: string, data?: any): Promise<any> => {
    try {
        let result = await fetch(`https://nlacha.godheranca.com/api/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        });

        return result.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

export { Post };
