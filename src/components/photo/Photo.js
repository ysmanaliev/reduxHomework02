// import React from 'react'

import { Link } from "react-router-dom";


export default function Photo({photosInfo}) {
    
  return (
    <div>

    <p>Name photo:{photosInfo.title}</p>
    <Link to={`/info/${photosInfo.id}`}> More Info... </Link>
    <p> --------------------</p>
    </div>
  )
}
