import Contactitem from "./Contactitem";
import styles from "./ListContacts.module.css";


const ListContacts = ({Contacts ,DeletHandler}) => {

    return (
        <>
            <h2 className={styles.titer}>contacts list :</h2>

            <div className={styles.div}>
                 {Contacts.length ? (
                <ul className={styles.list}>
                  {Contacts.map((contact) => (
                    <Contactitem key={contact.id}
                     DeletHandler={DeletHandler} 
                     data={contact} />
                  ))}
                    
                </ul>
                ): ( <p className={styles.massage}> No Contact Yet!</p>)}
            </div>
           

        </>
    );
}

export default ListContacts;
