import Contact from '../Contact/Contact';
import { ListStyled } from './ContactList.styled';
import {  useDispatch, useSelector } from 'react-redux'
import {removeContact} from '../../redux/contacts/contacts-actions'
import toast from 'react-hot-toast';

export default function ContactList() {
  const {contacts, filter} = useSelector(state=>state.contacts)
  const dispatch = useDispatch();
  
  const deleteContact =(id)=>{
    dispatch(removeContact(id))
    toast.success('delete is complete');
  }
  return (
    <>
      <section>
        <ListStyled>
          {contacts.length>0 && contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  deleteContact={deleteContact}
                />
              </li>
            ))}
        </ListStyled>
      </section>
    </>
  );
}
