import axios from 'axios';

const BASE_URL =
  'https://64383d92f3a0c40814ae3120.mockapi.io/contacts/contacts';

axios.defaults.baseURL = BASE_URL;

export const fetchAllContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const addContact = async data => {
  const res = await axios.post(BASE_URL, { ...data });
  return res.data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
