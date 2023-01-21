import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../../models/contact.class'

function ContactComponent({contact}) {
  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <h3>Adress: {contact.surname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>Estatus: {contact.conected ? 'ONLINE':'OFFLINE'}</h5>
    </div>
  )
}

ContactComponent.propTypes = {
  contact : PropTypes.instanceOf(Contacto),
}

export default ContactComponent
