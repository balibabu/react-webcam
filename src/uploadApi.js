export async function upload(url, recordedChunks) {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const formData = new FormData();
    formData.append("file", blob, "video.webm");

    try {
        const response = await fetch(url, { method: "POST", body: formData });
        if (response.ok) {
            console.log('uploaded');
        } else {
            console.log('Upload failed', response);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
