"use client"
import Image from "next/image"
import style from "./foto.module.css"
import { useEffect, useState } from "react";

function Foto(){
    const[perrito,setperrito]=useState("/vercel.svg");
    const[estado,setestado]=useState("esperando");
    const url = "https://dog.ceo/api/breeds/image/random";
    useEffect (()=> {fetch (url).then(res=>res.json())
        .then(data=>{setperrito(data.message),setestado(data.status)})},[]);
    return(
<div className={style.contenedor}>
    <h1>{estado}</h1>
    <Image src={perrito} alt="perrito" width={500} height={500}/>
</div>
    );
}

export default Foto;