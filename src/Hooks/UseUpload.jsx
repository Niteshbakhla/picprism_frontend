import axios from "axios"
import toast from "react-hot-toast";


const useUpload = async ({ image }) => {

            const upload = async () => {
                        try {
                                    const formData = new FormData()
                                    formData.append("file", image)

                                    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
                                   
                                    const res = await axios.post(`https://api.cloudinary.com/v1_1/ddm0x54ac/image/upload`, formData)

                                    const data = await res.data;
                                    if (!data) return toast.error("Image upload failed")
                                    return data;

                        } catch (error) {
                                    return console.log(error)
                        }
            }

            const { public_id, secure_url } = await upload();
            return { public_id, secure_url }
};

export default useUpload;