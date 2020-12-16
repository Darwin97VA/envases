import React from 'react'
import './style.css'

const Mapa = () => (
  <div className="container">
      <div className="row">
          <div className="col">
              <div style={{position: 'relative', overflow: 'hidden', height: '250px', zIndex: 0}}>
                  <iframe title="Dirección en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15608.685609842907!2d-77.0377754!3d-12.0317182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1818b4a952b2dea2!2sEnvases%20Para%20Delivery%20y%20Derivados!5e0!3m2!1ses-419!2spe!4v1600000171500!5m2!1ses-419!2spe" width="100%" height="250" frameBorder={0}
                  style={{
                    border: 0, position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)'
                  }}
                  allowFullScreen aria-hidden="false" tabIndex={0} >
                  </iframe>
              </div>
          </div>
      </div>
  </div>
)

export default Mapa