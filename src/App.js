import {  useEffect } from 'react';
import {  useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  // const contacts = useSelector(state=>state.contacts.contacts)
  
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  
  return (
    <>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </>
  );
}

export default App;
