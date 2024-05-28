"use client"

import { useState,useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [url,seturl]=useState([])

  useEffect(()=>{
    getimages()
  },[])
  const getimages= async ()=>{
    const response=await fetch('/api/mongo',{
      method:'GET',
      headers:{
        "Content-Type": "application/json",
      },
    })
    const json=await response.json()
    seturl(json.allImages)
  }
 return(
  <>
  <Navbar/>
  <div className=" my-12"><h2 className=" px-14 py-0  font-bold text-2xl">Rules and Regulations </h2></div>
  <div className="flex justify-evenly  items-center mt-4  ">
  {url.map((e)=>{
    return          <img className="" src={e.image}
            alt='image'
            width={300}
            key={e._id}
            height={200}/>
  
  })}
  </div>
  </>
 )
}
