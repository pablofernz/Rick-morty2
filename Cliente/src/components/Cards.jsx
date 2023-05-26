import Card from './Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (<div className= {style.Cartas}>
      {
         characters.map(({id, name, species, gender, image, status, origin}) =>{
            return(
               <Card 
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin}
               image = {image}
               onClose = {onClose}
               id = {id}
               />
            )
         })
      }
   </div>)
}
