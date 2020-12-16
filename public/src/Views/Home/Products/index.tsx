import React, { useEffect, useState } from 'react'

interface DataModal {
  alt: string
  src: string
}
const Btn = (props: DataModal) => {
return <button type="button" data-toggle="modal" data-target="#modalProducto"
  style={{outline: 'none', border: 'none'}}>
  { /* eslint-disable-next-line */ }
  <img style={{height: '180px'}} {...props} />
</button>
} 

const Products = () => {
  const [show, setShow] = useState<boolean>(false)
  const [{ alt, src }, setData] = useState<DataModal>({ alt: '', src: ''})

  useEffect(()=>{
    const modalProducto = document.getElementById('modalProducto')
    const modalProducto_titulo = document.getElementById('modalProducto_titulo')
    const modalProducto_imagen = document.getElementById('modalProducto_imagen')

    if( modalProducto &&
      modalProducto_titulo &&
      modalProducto_imagen ) {
      modalProducto.addEventListener('show.bs.modal', function (event: any) {
        // Button that triggered the modal
        const button = event.relatedTarget
        const image = button.firstElementChild
        
        setData(image)
        setShow(true)
      })
    }

  }, [])

  return (
    <>
      <section id="productos" className="container text-center py-5">
        <div className="row">
          <h2>Productos</h2>
          <p>Tenemos una gran variadad de productos.</p>
          <div className="row py-3">
            <div className="col-md-3 col-sm">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="item-vasos-tab"  data-toggle="pill" href="#item-vasos"           role="tab" aria-controls="item-vasos" aria-selected="true">Vasos</a>
                    <a className="nav-link" id="item-cajas-tab"         data-toggle="pill" href="#item-cajas"           role="tab" aria-controls="item-cajas" aria-selected="false">Cajas</a>
                    <a className="nav-link" id="item-contenedores-tab"  data-toggle="pill" href="#item-contenedores"    role="tab" aria-controls="item-contenedores" aria-selected="false">Contenedores</a>
                    <a className="nav-link" id="item-bolsas-tab"        data-toggle="pill" href="#item-bolsas"          role="tab" aria-controls="item-bolsas" aria-selected="false">Bolsas</a>
                    <a className="nav-link" id="item-sorbetes-tab"      data-toggle="pill" href="#item-sorbetes"        role="tab" aria-controls="item-sorbetes" aria-selected="false">Sorbetes y Removedores</a>
                    <a className="nav-link" id="item-bases-tab"         data-toggle="pill" href="#item-bases"           role="tab" aria-controls="item-bases" aria-selected="false">Bases y Pisos</a>
                </div>
            </div>
            <div className="col-md-9 col-sm">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="item-vasos" role="tabpanel" aria-labelledby="item-vasos-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Vasos</h3>
                        <div className="d-flex">
                          <Btn src="/img/productos/vasos/size1_1.png" alt="Vasos Lisos" />
                          <Btn src="/img/productos/vasos/size2_1.png" alt="Vasos Pet" />
                        </div>
                        <div className="d-flex">
                          <Btn src="/img/productos/vasos/size1_2.png" alt="Vasos de polipapel" />
                          <Btn src="/img/productos/vasos/size2_2.png" alt="Vasos de corrugados" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="item-cajas" role="tabpanel" aria-labelledby="item-cajas-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Cajas</h3>
                        <div className="d-flex">
                          <Btn src="/img/productos/cajas/size1_1.png" alt="Cajitas para Sandwich" />
                          <Btn src="/img/productos/cajas/size2_1.png" alt="Cajitas de Tortas y Bocaditos" />
                        </div>
                        <div className="d-flex">
                          <Btn src="/img/productos/cajas/size1_2.png" alt="Cajas para Cups Cakes" />
                          <Btn src="/img/productos/cajas/size2_2.png" alt="Cajas de Tortas y Bocaditos con tu logo" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="item-contenedores" role="tabpanel" aria-labelledby="item-contenedores-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Contenedores</h3>
                        <div className="d-flex">
                          <Btn src="/img/productos/contenedores/1.png" alt="Contenedor blanco" />
                          <Btn src="/img/productos/contenedores/2.png" alt="Contenedor con tapa domo" />
                        </div>
                        <div className="d-flex">
                          <Btn src="/img/productos/contenedores/3.png" alt="Contenedores" />
                          <Btn src="/img/productos/contenedores/4.png" alt="Contenedores decorados" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="item-bolsas" role="tabpanel" aria-labelledby="item-bolsas-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Bolsas</h3>
                        <div className="d-flex">
                          <Btn src="/img/productos/bolsas/1.png" alt="Bolsas de papel blanco" />
                          <Btn src="/img/productos/bolsas/2.png" alt="Bolsa de papel kraft para sandwich" />
                        </div>
                        <div className="d-flex">
                          <Btn src="/img/productos/bolsas/3.png" alt="Bolsas de papel kraft" />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="item-sorbetes" role="tabpanel" aria-labelledby="item-sorbetes-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Sorbetes y Removedores</h3>
                        <div className="d-flex">
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/sorbetes_removedores/1.png" style={{height: '180px'}} alt="Sorbetes de cartón" />
                            </button>
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/sorbetes_removedores/2.png" style={{height: '180px'}} alt="Sorbetes de plástico" />
                            </button>
                        </div>
                        <div className="d-flex">
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/sorbetes_removedores/3.png" style={{height: '180px'}} alt="Removedores" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="item-bases" role="tabpanel" aria-labelledby="item-bases-tab">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-center pt-2 pb-3">Bases y pisos</h3>
                        <div className="d-flex">
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/bases_pisos/1.png" style={{height: '180px'}} alt="Pisos de 27, 30 y 36 cm de diámetro" />
                            </button>
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/bases_pisos/2.png" style={{height: '180px'}} alt="Pisos de 9, 22 y 25 cm de diámetro" />
                            </button>
                        </div>
                        <div className="d-flex">
                            <button type="button" data-toggle="modal" data-target="#modalProducto">
                                <img src="/img/productos/bases_pisos/3.png" style={{height: '180px'}} alt="Base de cartón paja compacto contraplacado con duplex" />
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <span className="w-100 d-flex flex-column align-items-center text-center">
              <span>¿Quieres ver todos nuestros productos?</span>
              <a href="/assets/brochure.pptx" download="Brochure - Envases para Delivery y Derivados.pptx">
                  Puedes descargar nuestro Brouchure aquí
              </a>
              <span>Recuerda que podemos personalizar todo de acuerdo a tu marca y producto.</span>
              <a href="#contacto">Acordemos una reunión</a> 
          </span>
      
        </div>
      </section>

      <div className={`modal fade ${show ? "show" : ''}`} id="modalProducto" 
        tabIndex={-1} aria-labelledby="modalProducto_titulo" aria-hidden="true">
        <div className="modal-dialog modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalProducto_titulo">{ alt }</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center">
                <img src={src} alt={alt} id="modalProducto_imagen" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products