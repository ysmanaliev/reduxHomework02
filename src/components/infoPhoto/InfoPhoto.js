import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function InfoPhoto() {
    const {id} =useParams()
    const naVigate = useNavigate()
    const [photo,setPhoto] = useState ({})

    const getPhotoInfo = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

        const photoResponse = await response.json()
        
        setPhoto(photoResponse)
    }

    useEffect (() => {
    getPhotoInfo()
    }, [])

  return (
        <div>
                <button onClick={() => naVigate (-1)}> Go back </button>
                <h1> Name: {photo?.title}</h1>
                <img src={photo.url} alt="1" />
            
        </div>
  )
}
