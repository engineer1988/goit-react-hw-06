import PropTypes from "prop-types";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ dataContacts, onDeleteContact }) => {
  return (
    <ul className={css.contact_items}>
      {dataContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact_item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  dataContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
