import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import styles from './App.module.css'

export default function App() {
    return (
        <Section>
            <div className={styles.section}>
                <h1>Phonebook</h1>
                <ContactForm/>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
            </div>
        </Section>
    )
}


