import React from 'react'
import './style.css'

const Carousel = () => {
  return (
    <section id="presentacion">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="/img/slider/cafes.png" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Excelente calidad</h5>
                      <p>Asegura la mejor experiencia para tus clientes</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src="/img/slider/naranja.png" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Gran Presentación</h5>
                      <p>Somos el compañero ideal para que tu producto termine de encantar a tus clientes</p>
                  </div>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>
    </section>
  )
}
export default Carousel