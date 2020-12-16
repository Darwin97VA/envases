import React, { useEffect, useState } from 'react'
import './style.css'

const Formulario = () => {
  const [nameFile, setNameFile] = useState('Subir archivo')
  useEffect(() => {
    if(!("bootstrap" in window)) {
      class Toast {
        // eslint-disable-next-line
        constructor(_html: HTMLElement, _any: any) {}
        show(){}
        hide(){}
      }
      var bootstrap = { Toast }
    }
    document.addEventListener("DOMContentLoaded", function(event) {
      var toastSendingElement = document.getElementById('toastSending')

      if(toastSendingElement) {
        var toastSending = new bootstrap.Toast(toastSendingElement, { autohide: false })
        var showSending = () => {
            toastSending.show()
            setTimeout(() => {
                toastSending.hide()
            }, 3500);
        }
      }
      
      var toastContact = document.getElementById('toastContact')
      var toastContactTitulo = document.getElementById('toastContactTitulo')
      var toastContactMensaje = document.getElementById('toastContactMensaje')

      if( toastContact &&
        toastContactTitulo &&
        toastContactMensaje ) {
        var toast = new bootstrap.Toast(toastContact, { autohide: false })
  
        var showToastExito = () => {
          (toastContactTitulo as HTMLElement).textContent = 'Éxito!';
          (toastContactMensaje as HTMLElement).textContent = 'El mensaje se envió correctamente.';
          toast.show()
        }
        var showToastError = () => {
          (toastContactTitulo as HTMLElement).textContent = 'Falló';
          (toastContactMensaje as HTMLElement).textContent = 'Lo sentimos, por el momento estamos teniendo dificultades para enviar el mensaje. Por favor, use WhatsApp o correo.';
          toast.show()
        }

      }

      var closeToast = (timeout = 6000) => {
        setTimeout(() => {
          toast.hide()
        }, timeout)
      }

      var formContact = document.getElementById('formContact')
      var inputNombres  = document.getElementById('inputNombres') as HTMLInputElement
      var inputCorreo   = document.getElementById('inputCorreo') as HTMLInputElement
      var inputTelefono = document.getElementById('inputTelefono') as HTMLInputElement
      var inputArchivo    = document.getElementById('inputArchivo') as HTMLInputElement
      var inputAsunto   = document.getElementById('inputAsunto') as HTMLInputElement
      var inputMensaje  = document.getElementById('inputMensaje') as HTMLInputElement
      var spanArchivo  = document.getElementById('spanArchivo') as HTMLSpanElement

      var cleanInputs = () => {
        inputNombres.value  = ''
        inputCorreo.value   = ''
        inputTelefono.value = ''
        inputArchivo.value  = ''
        inputAsunto.value   = ''
        inputMensaje.value  = ''
        spanArchivo.textContent   = 'Subir archivo'
      }

      formContact?.addEventListener('submit', e => {
        e.preventDefault()
        showSending()

        var formData = new FormData()
        formData.append('nombres', inputNombres?.value)
        formData.append('correo', inputCorreo?.value)
        formData.append('telefono', inputTelefono?.value)
        formData.append('archivo', inputArchivo?.files ? inputArchivo?.files[0] : '')
        formData.append('asunto', inputAsunto?.value)
        formData.append('mensaje', inputMensaje?.value)

        fetch('api/contact.php', {
            method: 'POST',
            body: formData
        }).then(res=>res.json())
        .then(res => {
            if(res.error) {
                showToastError()
                console.error(res)
            } else {
                showToastExito()
            }
            closeToast()
        })
        .catch(res => {
            showToastError()
            closeToast()
            console.error(res)
        })

        cleanInputs()
      })
    })
  }, [])
  return (
<form className="form-signin" id="formContact">
    <div className="text-center mb-4">
        <h3 className="h3 mb-3 font-weight-normal">Envianos un mensaje</h3>
    </div>

    <div className="form-label-group">
        <input id="inputNombres" className="form-control" placeholder="Nombres y Apellidos" required />
        <label htmlFor="inputNombres">Nombres y Apellidos</label>
    </div>

    <div className="form-label-group">
        <input type="email" id="inputCorreo" className="form-control" placeholder="Correo" required />
        <label htmlFor="inputCorreo">Correo</label>
    </div>

    <div className="form-label-group">
        <input type="tel" id="inputTelefono" className="form-control" placeholder="Telefono" required />
        <label htmlFor="inputTelefono">Telefono</label>
    </div>

    <div className="form-file mb-3" style={{cursor: 'pointer'}}>
        <input type="file" className="form-file-input" id="inputArchivo" onChange={
          e => {
            const files = e.target?.files
            files && setNameFile(files[0].name)
          }
        } />
        <label className="form-file-label" htmlFor="inputArchivo">
            <span className="form-file-text" id="spanArchivo">{ nameFile }</span>
            <span className="form-file-button">Archivos</span>
        </label>
    </div>

    <div className="form-label-group">
        <input id="inputAsunto" className="form-control" placeholder="Asunto" required />
        <label htmlFor="inputTelefono">Asunto</label>
    </div>

    <div className="form-label-group">
        <textarea className="form-control" id="inputMensaje" placeholder="Mensaje" required></textarea>
        <label htmlFor="inputMensaje">Mensaje</label>
    </div>

    <button className="btn btn-lg btn-primary btn-block" type="submit" id="btnSubmitContact">Enviar Mensaje</button>
</form>
  )
}

export default Formulario