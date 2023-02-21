// import React from 'react'
import {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Photo from './../../components/photo/Photo';

export default function PagePhotos() {

    const [photos,setPhotos]=useState([])

    const getPhotos = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const photos = await response.json()
        setPhotos(photos)
    }

    useEffect(() => {
        getPhotos()
    },[])

  return (
    <div>
        <h1>Photos</h1>

        {
            photos?.slice(0, 5).map(photos => <Photo key={photos.id} photosInfo={photos}/>)
        }
        </div>
  )
}
