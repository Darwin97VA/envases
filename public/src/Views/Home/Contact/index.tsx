import React from 'react'
import Formulario from './Formulario'
import Mapa from './Mapa'


const Contact = () => (
  <section className="container py-5" id="contacto">
    <div className="row">
        <div className="col-sm">
            <div className="pt-3">
                <h2 className="pb-3 text-center">Contáctenos</h2>
                <p>Puedes hacernos cualquier consulta por este medio y te responderemos a la brevedad.
                Tambien podemos agendar una reunion y resolver todas tus dudas.</p>
            </div>
            <div>
                <strong>Dirección: </strong>
                <p>Calle Ricardo Bentin 246, Rímac.</p>
                
                <strong>Horario de atención: </strong>
                <p>Lunes a Sábado de <strong>9am</strong> a <strong>6pm</strong></p>
                
                <strong>Teléfonos de contacto: </strong>
                <p>Cel: 946591609  |  Tel: 579-5540</p>

                <strong>Correo: </strong>
                <p>ventasenvasesyderivados@hotmail.com</p>

                <strong>Facebook: </strong>
                <p>
                  { /* eslint-disable-next-line */ }
                  <a target="_blank" rel="external,ugc,nofollow" 
                    href="https://www.facebook.com/Envases-para-delivery-y-derivados-100488594943026">
                    Envases Para Delivery y Derivados
                  </a>
                </p>
            </div>
        </div>
        <div className="col-sm">
          <Formulario />
        </div>
    </div>
    <div className="row">
        <div className="col">
          <Mapa />
        </div>
    </div>
  </section>
)

export default Contact