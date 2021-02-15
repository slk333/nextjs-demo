import React from 'react'
import {useRouter} from "next/router"

export default function Person() {
  const router = useRouter();
  const {name} = router.query

  const secondary = {
    fontWeight: "300",
    color:"#95A5B5"
  }
  
  return (
    <div className="container">
       <div>
        <div style={secondary}>hello</div>
        <div>{name}</div>
      </div>
     
    </div>
  )
}
