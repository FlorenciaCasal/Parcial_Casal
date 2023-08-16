import styles from './Card.module.css'
import React from 'react'

const Card = ({ user }) => {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>Se ha enviado exitosamente la siguiente información:</h3>
        <div className={styles.contenedor}>
          <h5 className={styles.date}>Nombre: {user.nombre.toUpperCase()}</h5>
          <h5 className={styles.date}>Apellido: {user.apellido.toUpperCase()}</h5>
          <h5 className={styles.date}>Marca Favorita: {user.marcaFavorita.toUpperCase()}</h5>
          <h5 className={styles.date}>Color Favorito: {user.colorFavorito.toUpperCase()}</h5>
          <h5 className={styles.date}>Modelo Favorita: {user.modeloFavorito.toUpperCase()}</h5>
        </div>

      </div>
    </>
  )
}
export default Card