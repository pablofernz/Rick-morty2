
const Validation = (userData) => {
    const errors = {}

    if(!/\S+@\S+\.\S+/.test(userData.email) || !userData.email || userData.email.length > 35){
        errors.email = "El email ingresado es invalido"
    } 
    if (!userData.email) {
        errors.email = "Debe ingresar un email"
    }
    if (userData.email.length > 35) {
        errors.email = "El email no debe tener mas de 35 caractere"
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = "La contraseña debe tener almenos 1 número"
    }
    if (userData.password.length < 6 || userData.password.length > 10 ) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }
    
    return errors;
}

export default Validation