import { React, useState } from "react";
import ContactComponent from "../pure/Contact";
import { Contacto } from "../../models/contact.class";

const ContactList = () => {
  const [state, setState] = useState(false);
  const defaultContact = new Contacto(
    "Julian",
    "Navarro",
    "julianmn15@gmail.com",
    state
  );

  function changeState() {
    setState(!state);
  }
  return (
    <div>
      <div>
        <div>
          <h1>Contact:</h1>
        </div>
        <ContactComponent contact={defaultContact}></ContactComponent>
        <button onClick={changeState}>Cambiar</button>
      </div>
    </div>
  );
};

export default ContactList;
