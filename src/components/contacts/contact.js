import List from "./list/list";
import Form from "./form/form";
import {useEffect, useState} from "react";
import "./styles.css"

function Contact() {
    const [contacts, setContacts] = useState([
        {name: "Hüseyin", phone: "121212"},
        {name: "Ali", phone: "2432"},
        {name: "ayse", phone: "5675"},
        {name: "fatos", phone: "345345"},
    ]);

    // useEffect( () => {
    //     console.log(contacts);
    // }, [contacts])
    return (
        <div id="container">
            <List contactsList={contacts} deleteContacts={setContacts}/>
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contact;
