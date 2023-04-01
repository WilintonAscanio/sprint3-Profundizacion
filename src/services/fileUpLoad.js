const cloudName = "dvrjbfugj";
const uploadPreset = "cloudinaryTest";
const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const fileUpLoad = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    try {
        const response = await fetch(urlCloudinary, {
            method : "POST",
            body : formData,

        });
        if (!response.ok) {
            return null
            
        }
        const data = await response.json();
        return data.secure_url
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
};
