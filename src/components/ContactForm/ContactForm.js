import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addContact} from "../../Redux/contacts/contacts-operations";
import {getContacts} from "../../Redux/contacts/contacts-selector";
import styles from './ContactForm.module.css'


export default function ContactForm() {
    const [contactName, setContactName] = useState('');
    const [number, setNumber] = useState('')
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()


    const handleInputChange = event => {
        const {name, value} = event.currentTarget
        switch (name) {
            case 'name' :
                setContactName(value);
                break;
            case 'number' :
                setNumber(value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = event => {
        event.preventDefault()
        const isExistedName = contacts.find(
            contact => contact.name.toLowerCase() === contactName.toLowerCase(),
        )
        if (isExistedName) {
            alert(contactName + 'is already in contacts')
            return
        }
        dispatch(addContact(contactName, number))
        reset()
    }
    const reset = () => {
        setContactName('')
        setNumber('')
    }


    return (

        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}> Name
                <input className={styles.input}
                       onChange={handleInputChange}
                       value={contactName}
                       type="text"
                       name="name"
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                       required
                />
            </label>
            <label className={styles.label}> Number
                <input className={styles.input}
                       onChange={handleInputChange}
                       value={number}
                       type="tel"
                       name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                       required
                />
            </label>
            <button type="Submit" className={styles.button}>Add</button>
        </form>
    )
}
