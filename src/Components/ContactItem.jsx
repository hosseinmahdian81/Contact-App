import styles from "./ContactItem.module.css";

import { FaRegTrashCan } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactitem = ({data :{Name ,LastName,id,Email,Phone} ,DeletHandler}) => {
    return (
        <li className={styles.row}  key={id}>

            <p>{Name} {LastName}</p>
            
            <p><span> <MdEmail/> </span> {Email}</p>
            
            <p><span><FaPhone/></span> {Phone}</p>

            <button onClick={() => DeletHandler(id)}><span> <FaRegTrashCan /> </span></button>
        </li>
    );
}

export default Contactitem;
