import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

export default function Card({ name, status, species, gender, origin, image, onClose, id }) {
   return (

      <div className={style.Contenedor}>
         <NavLink to={`/detail/${id}`} >
         <img className={style.Img}
            src={image} alt='' />
            </NavLink>
         <div >
            <button className={style.Boton}
               onClick={() => { onClose(id) }}>CLOSE</button>
            <ul className={style.Lista}>
               <p>NAME: {name}</p>
               <p>STATUS: {status}</p>
               <p>SPECIES: {species}</p>
               <p>GENDER: {gender}</p>
               <p>ORIGIN: {origin.name}</p>
            </ul>
         </div>
         
         
      </div>

   );
}
