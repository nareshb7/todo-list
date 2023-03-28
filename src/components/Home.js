import React from 'react'

import { useParams } from 'react-router-dom'

const Home = () => {
    const params = useParams()
    if (params) {
        console.log(JSON.parse(params.obj))
    }
  return (
    <div>
         Welcome Home 
    </div>
  )
}

export default Home