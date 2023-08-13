import axios from 'axios';

axios.defaults.baseURL = 'https://64d8087e5f9bf5b879ce1c50.mockapi.io';

const fetchPhonebook = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const addContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export { fetchPhonebook, addContact, deleteContact };
