import React, { useEffect } from 'react'
import Glider from 'glider-js'
import './style.css'

const Clients = () => {
  useEffect(() => {
    window.addEventListener('load', function() {
      const gliderElement = document.querySelector('.glider') as HTMLElement

      if(gliderElement) {
        new Glider(gliderElement, {
          slidesToScroll: 1,
          slidesToShow: 4,
          draggable: true,
          dots: '.dots',
          arrows: {
              prev: '.glider-prev',
              next: '.glider-next'
          }
        })
      }
      // carousel.dots.querySelector('button')
    })
  }, [])
  return (
<section id="clientes" className="container py-5">
    <div className="row">
        <h2 className="text-center pb-3">Ellos ya confían en nosotros!</h2>

        <div className="glider-contain">
            <div className="glider">
                <div><img src="/img/marcas/donapepa.png" alt="Doña pepa" /></div>
                <div><img src="/img/marcas/mcdonalds.png" alt="Mc Donald's" /></div>
                <div><img src="/img/marcas/starbucks.png" alt="Starbucks" /></div>
                <div><img src="/img/marcas/todinno.jpg" alt="Todinno" /></div>
                <div><img src="/img/marcas/weranda.png" alt="Weranda" /></div>
                <div><img src="/img/marcas/descarga.png" alt="Descarga" /></div>
                <div><img src="/img/marcas/dulce.png" alt="Dulce" /></div>

                <div><img src="/img/marcas/donapepa.png" alt="Doña pepa" /></div>
                <div><img src="/img/marcas/mcdonalds.png" alt="Mc Donald's" /></div>
                <div><img src="/img/marcas/starbucks.png" alt="Starbucks" /></div>
                <div><img src="/img/marcas/todinno.jpg" alt="Todinno" /></div>
                <div><img src="/img/marcas/weranda.png" alt="Weranda" /></div>
                <div><img src="/img/marcas/descarga.png" alt="Descarga" /></div>
                <div><img src="/img/marcas/dulce.png" alt="Dulce" /></div>
            </div>

            <button aria-label="Previous" className="glider-prev">«</button>
            <button aria-label="Next" className="glider-next">»</button>
            <div role="tablist" className="dots"></div>
        </div>
    </div>
</section>
  )
}

export default Clients