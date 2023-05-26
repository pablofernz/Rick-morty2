import style from "./Card.module.css"
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id, setID] = useState("")

   const handleChange =(event) =>{
      setID(event.target.value)
   }
   return (
      <div >
         <input className={style.Barra} type='search'
         placeholder= " Search by ID"
         value= {id}
         onChange={handleChange}
         />
         <button className={style.BotonBuscar} onClick={() => {onSearch(id)}}>🔍︎</button>
      </div>
   );
}
