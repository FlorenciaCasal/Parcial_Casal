import { useState } from "react"
import styles from './Form.module.css'
import Card from '../Card/Card'

const Form = () => {

    // Estados:
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        marcaFavorita: '',
        colorFavorito: '',
        modeloFavorito: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    // Manejador de eventos:

    const handleSubmit = (e) => {
        e.preventDefault()

        const nombreSinEspacios = usuario.nombre.trim();
        

        if ((nombreSinEspacios.length > 2) && (usuario.apellido.length > 5) && (usuario.marcaFavorita.length > 2) && (usuario.colorFavorito.length > 2) && (usuario.modeloFavorito.length > 2)) {
           
            setShow(true)
            setError(false)     
            e.target.reset()       
        }
        else {
            setShow(false)
            setError(true)
        }
        }


    return (

        // Pasamos el manejador al evento unSubmit

        <form onSubmit={handleSubmit} className={styles.formulario}>

            <div className={styles.formFondo}>

                <div className={styles.formInterior}>
                    
                    <input type="text" id="nombre" className={styles.input} placeholder="Nombre" onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} />
                </div>
                <div className={styles.formInterior}>
                    
                    <input type="text" id="apellido" className={styles.input} placeholder="Apellido" onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })} />
                </div>
                <div className={styles.formInterior}>
                    
                    <input type="text" id="marca" className={styles.input} placeholder="Marca favorita de autos" onChange={(e) => setUsuario({ ...usuario, marcaFavorita: e.target.value })} />
                </div>
                <div className={styles.formInterior}>
                    
                    <input type="text" id="color" className={styles.input} placeholder="Color favorito de autos" onChange={(e) => setUsuario({ ...usuario, colorFavorito: e.target.value })} />
                </div>
                <div className={styles.formInterior}>
                    
                    <input type="text" id="modelo" className={styles.input} placeholder="Modelo favorito de autos" onChange={(e) => setUsuario({ ...usuario, modeloFavorito: e.target.value })} />
                </div>

                {/* Mediante el type nos aseguramos que se dispare el evento onSubmit al hacer click en el botón */}

                <button className={styles.button}>Enviar</button>

            </div>

            <div className={styles.render}>

                {error && <h4 className={styles.error}>Por favor chequea que la información sea correcta</h4>}


                {show && <Card user={usuario} />}
            </div>

        </form>
    )
}

export default Form