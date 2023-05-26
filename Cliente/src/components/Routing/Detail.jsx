import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Card from "../Card"
import style from "../Card.module.css"


const Detail = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div >
            <h1>Name: {character.name && character.name}</h1>
            <h1>Status: {character.status && character.status}</h1>
            <h1>Species: {character.species && character.species}</h1>
            <h1>Gender: {character.gender && character.gender}</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
            
        </div>
    )
}
export default Detail