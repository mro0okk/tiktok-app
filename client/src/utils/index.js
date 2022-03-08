import { Buffer } from "buffer";

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export const arrayBufferToBase64 = (buffer) => {
    let image64 = new Buffer(buffer, "base64").toString(
        "binary"
    )
    return image64
}