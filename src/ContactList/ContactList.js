const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onRemove(id)}>Delete contact</button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactList;
