export const Videos = async(payload) =>{
    try {
        const response = await instance.post('videos',payload)
        return response.data
    } catch (error) {
        return error.response.data
    }
}