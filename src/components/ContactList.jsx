import Contact from './Contact'

const ContactList = ({ contactsArray }) => (
  <div className="contact-list">
    {contactsArray.map((contact) => (
      <Contact
        // key={`${contact.name.first} ${contact.name.last}`}
        key={contact.login.uuid}
        firstName={contact.name.first}
        lastName={contact.name.last}
        homePhone={contact.phone}
        cellPhone={contact.cell}
        photoUrl={contact.picture.thumbnail}
      />
    ))}
  </div>
)

export default ContactList