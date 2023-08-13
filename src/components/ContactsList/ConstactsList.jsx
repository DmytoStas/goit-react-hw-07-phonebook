import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader/Loader';

import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';

import { ContactsListUl, ListItemWrapp } from './ContactsList.styled';
import { useEffect } from 'react';
import { fetchPhonebook, deleteContact } from 'redux/phonebookOperations';

function ContactsList() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhonebook());
  }, [dispatch]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && !error && <Loader />}
      <ContactsListUl>
        {visibleContacts().map(contact => (
          <li key={contact.id}>
            <ListItemWrapp>
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>

              <button
                type="button"
                id={contact.id}
                onClick={() => {
                  dispatch(deleteContact(`${contact.id}`));
                }}
              >
                Delete
              </button>
            </ListItemWrapp>
          </li>
        ))}
      </ContactsListUl>
    </>
  );
}

export default ContactsList;
