import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({link, setLink}) {

    async function handleFileChange(ev) {
        const files = ev.target.files
        if (files?.length === 1) {
            const data = new FormData
            data.set('file', files[0])

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                if(response.ok) {
                    return response.json().then(link => {
                        setLink(link)
                    })
                }
                throw new Error('Something went wrong')
            })
            
        await toast.promise(uploadPromise, {
            loading: 'Uploading...',
            success: 'Upload Complete!',
            error: 'Upload Error',
          });       
        }
    }

    return (
        <>
        {link && (
                <Image className="rounded-lg margin-b-1" src={link} width={80} height={80} alt={'avatar'} />
            )}
            {!link && (
                <div className="bg-gray-200 p-4 text-gray-500 rounded-lg mb-1 text-center">
                    No image
                </div>
            )}
            <label>
                <input type="file" className="hidden" onChange={handleFileChange}/>
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer" >Change Image</span>
            </label>
        </>
    )
}