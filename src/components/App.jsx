import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./contact-form/ContactForm";
import SearchBox from "./search-box/SearchBox";
import ContactList from "./contact-list/ContactList";

function App() {
  const dataContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [dataSearh, setDataSearch] = useState("");
  const [newDataContacts, setAddContact] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return dataContacts;
  });

  const addContact = (newContacts) => {
    setAddContact((prevDataContacts) => {
      return [...prevDataContacts, newContacts];
    });
  };

  const searchBar = newDataContacts.filter((contact) =>
    contact.name.toLowerCase().includes(dataSearh.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setAddContact((prevDataContacts) => {
      return prevDataContacts.filter((contact) => contact.id !== contactId);
    });
  };
  useEffect(() => {
    window.localStorage.setItem(
      "saved-values",
      JSON.stringify(newDataContacts)
    );
  }, [newDataContacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox dataSearh={dataSearh} setDataSearch={setDataSearch} />
      <ContactList dataContacts={searchBar} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
