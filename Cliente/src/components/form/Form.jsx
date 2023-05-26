import style from "./Form.module.css"
import { useState } from "react"
import Validation from "./validation"

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })


    const HandleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    const logout = (event) =>{
        event.preventDefault()
        logout()

    }

    return (
        <form className={style.Contenedor}>
            <label className={style.Label}>Email: </label>
            <input name="email" value={userData.email} className={style.Email} type="email" placeholder="Email" onChange={handleChange} /> {errors.email && <p >{errors.email}</p>}

            <ul />

            <label>Password: </label>
            <input name="password" value={userData.password} className={style.Password} type="password" placeholder="Password" onChange={handleChange} /> {errors.password && <p>{errors.password}</p>}

            <ul />
            <button className={style.Login} onClick={HandleSubmit}>LOGIN</button>
        </form>
    )
}

export default Form
