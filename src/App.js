import './App.css';
import contacts from './contacts.json'
import {useState} from 'react'




function App() {

  
  const [contactsList, setContacts] = useState(contacts.slice(0, 5))
  
  
  
  function randomContacts() {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)]
    const newArray= [...contactsList]
    newArray.push(newContact)
    setContacts(newArray)
  }
 
  const sortByName = () => {
    const sorted = [...contactsList];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(sorted)
  };

  const sortByPopularity = () => {
    const sorted = contactsList.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    setContacts(sorted)
  };
  
  const deleteContact = contactId => {
   const filteredContacts = contactsList.filter(contact => {
      return contact.id !== contactId;
    });
 
    setContacts(filteredContacts);
  };

  return (
  <div className="App">
    <h2>Celebrities Contacts</h2>
  <button onClick={randomContacts}>Add a contact </button>
  <button onClick={sortByPopularity}>Sort by Popularity</button>
  <button onClick={sortByName}>sortByName</button>
  
    <table >
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        {contactsList.map(contact  =>
        <tbody key={contact.id}>
          <td><img src={contact.pictureUrl} className="image"></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? <img src="https://www.flaticon.com/free-icons/trophy"></img> : "No"}</td>
          <td>{contact.wonEmmy ? "Yes" : "No"}</td>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
          
        </tbody>
        )}
    </table>)
     
  </div>
  );
  
}

export default App;
