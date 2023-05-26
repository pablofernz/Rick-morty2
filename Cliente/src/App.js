import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import NavBar from './components/Navbar';
import { useState, useEffect, } from 'react';
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import { NavLink, useNavigate } from 'react-router-dom';
import About from './components/Routing/About';
import Home from './components/Routing/Home';
import Detail from './components/Routing/Detail';
import Form from './components/form/Form';
import { useLocation } from 'react-router-dom';
import Validation from "./components/form/validation"



function App() {
     const [characters, setCharacters] = useState([])

     function onSearch(id) {
          axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
               if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
               } else {
                    window.alert('¡No hay personajes con este ID!');
               }
          });
     }
     const onClose = (id) => {
          setCharacters(
               characters.filter((char) => {
                    return char.id !== Number(id)
               })
          )
     }

     const Location = useLocation()

     const [access, setAccess] = useState(false)
     var email = "pablodanyfer@gmail.com"
     var password = "cactus1"
     const navigate = useNavigate()

     const login = (userData) => {
          if (userData.password === password && userData.email === email) {
               setAccess(true);
               navigate('/home');
          }
     }

     const logout = () => {
          setAccess(false);
               navigate('/');
     }
     useEffect(() => {
   !access && navigate('/');
}, [access]);

     return (
          <div className='App'>
               {Location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}
              

               <Routes>
                    <Route path='/' element={<Form login={login}/>}/>
                    <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/detail/:id' element={<Detail />} />
               </Routes>

          </div>
     );
}

export default App;