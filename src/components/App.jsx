import "./App.css";
import ContactForm from "./contact-form/ContactForm";
import SearchBox from "./search-box/SearchBox";
import ContactList from "./contact-list/ContactList";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
