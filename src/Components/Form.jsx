import { useState } from "react";
import { v4 } from "uuid";

import styles from "./Form.module.css";
import ListContacts from "./ListContacts";
import inputs from "../Constants/input";

const Form = () => {
    const [Alert,setAlert] = useState("");
    const [Contacts, setContacts] = useState([]);
    const [Contact, setContact] = useState({
        Name:"",
        LastName:"",
        Email:"",
        Phone:"",
        id:"",
    });

    const DeletHandler = (id) =>{
        const NweContacts =  Contacts.filter((item) => item.id !== id)
        setContacts(NweContacts)
    }

    const ChengeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name] : value , id:v4() }) )
    }
    
    const AddHandler = () => {
        
        if(!Contact.Name || !Contact.LastName || !Contact.Phone || !Contact.Email  )
        {
           setAlert("Please enter valuid data!") 
           return;
        }

        setAlert("")
        setContacts((Contacts) => ([...Contacts, Contact ]))
        setContact({
            Name:"",
            LastName:"",
            Email:"",
            Phone:"",
        })
    }

    return (
        <>
            <div className={styles.contaner}>
                <div className={styles.form}>
                    
                    {inputs.map((inputs, index) => (

                            <input type={inputs.type}
                            name={inputs.name} 
                            value={Contact[inputs.name]} 
                            placeholder={inputs.placeholder}
                            key={index}
                            onChange={ChengeHandler} />

                    ))}
                    
                    <button onClick={AddHandler}>Add Contact</button>

                </div>

                <div className={styles.alert} >
                    {Alert && <p> {Alert} </p> }
                </div>

                <ListContacts Contacts={Contacts} DeletHandler={DeletHandler}/>
            </div>
            
        </>
    );
}

export default Form;
