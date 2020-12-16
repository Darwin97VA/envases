import React from 'react'
import './style.css'

const Features = () => {
  return (
    <section id="caracteristicas" className="container py-5 text-center">
        <div className="d-flex flex-column align-items-center pb-3">
            <span>Todos nuestros productos cuentan con</span>
            <h2>3 Principios</h2>
        </div>
        <div className="row justify-content-around">
            <div className="card" style={{width: "300px"}}>
                <img src="/img/caracteristicas/quality.png" className="card-img-top" alt="Calidad" />
                <div className="card-body">
                    <h5 className="card-title">Calidad</h5>
                    <p className="card-text">Para asegurar la mejor experiencia de tu cliente con tu producto.</p>
                </div>
            </div>
            <div className="card" style={{width: "300px"}}>
                <img src="/img/caracteristicas/customize.png" className="card-img-top" alt="Personalizable" />
                <div className="card-body">
                    <h5 className="card-title">Personalizable</h5>
                    <p className="card-text">Podemos personalizar el diseño fiel a tu marca.</p>
                </div>
            </div>
            <div className="card" style={{width: "300px"}}>
                <img src="/img/caracteristicas/excellence.png" className="card-img-top" alt="Excelencia" />
                <div className="card-body">
                    <h5 className="card-title">Excelencia</h5>
                    <p className="card-text">Nos enfocamos siempre en hacer lo mejor para nuestros y clientes.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features