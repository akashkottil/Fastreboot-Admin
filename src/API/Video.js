import instance from "./instance"

export const Videos = async(payload) =>{
    try {
        const response = await instance.post('admin/add_video',payload)
        return response
    } catch (error) {
        return error.response
    }
}