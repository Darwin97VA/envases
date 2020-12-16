import React from 'react'

const Footer = () => (
<footer className="bg-dark text-white px-5">
  <div className="container">
    <div className="row py-4">
      <div className="col-sm">
        <h4>Nosotros</h4>
        <p>Contamos con más de 13 años de experiencia en el rubro y logística para cubrir entregarte productos de mejor calidad.</p>
        <p>Puedes encontrarnos en nuestras redes sociales:</p>
        { /* eslint-disable-next-line */ }
        <a target="_blank" rel="external,ugc,nofollow" 
            style={{background: 'white', display: 'inline-flex'}}
            href="https://www.facebook.com/Envases-para-delivery-y-derivados-100488594943026">
            <i className="fab fa-facebook-square" style={{marginRight: '.3em', fontSize: '3em'}}></i>
            <span>Envases Para Delivery y Derivados</span>
        </a>
        <br/>
        <br/>
      </div> 
      <div className="col-sm">
        <h4 style={{textAlign: 'center'}}>Envases para Delivery y Derivados E.I.R.L</h4>
        <br />
        <p>Tenemos proveedores en todas partes del mundo y contamos con la logística para poder cumplir con los envíos de tus productos para que siempre estés listo para satisfacer a tu cliente.</p>
        <br />
        <p>
            Esperamos felices tu llamada: 
            <a href="tel:+51 946 591 609" style={{color: 'white'}}>
                +51 946 591 609
            </a>
        </p>
        <br/>
        <br/>
      </div>
      <div className="col-sm">
        <h4>Contacto</h4>

        <strong>Dirección: </strong>
        <p>Calle Ricardo Bentin 246, Rímac. </p>

        <strong>Horario de atención: </strong>
        <p>Lunes a Sábado de 9am a 6pm </p>

        <strong>Teléfonos de contacto: </strong>
        <p>Cel: 946591609 | Tel: 579-5540 </p>

        <strong>Correo: </strong>
        <p>ventasenvasesyderivados@hotmail.com </p>
        <br/>
      </div>
    </div>
    <div className="row">
      <span className="col-sm">
          Calle Ricardo Bentin 246, Rímac
      </span>
      <span className="col-sm" style={{textAlign: 'center'}}>
          Todos los derechos reservados a Envases para Delivery y Derivados © 2020
      </span>
      <span className="col-sm">Desarrollado por <a href="https://bulltech.club">Bulltech</a></span>
    </div>
  </div>
</footer>
)

export default Footer