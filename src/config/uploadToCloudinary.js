
export const uploadToCloudinary = async(image) => {
  if(image){
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'jk6qdqlp')
    data.append('cloud_name', 'daboy6hii')

    const res = await fetch('https://api.cloudinary.com/v1_1/daboy6hii/image/upload', {
      method: 'POST',
      body: data
    })
    const fileData = await res.json()
    console.log('fileData', fileData)
    return fileData.url.toString()
  }
}