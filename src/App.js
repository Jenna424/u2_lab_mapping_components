import React from 'react'
import Contact from './components/Contact'
import './App.css'
import contacts from './data/contacts.json'

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      {contacts.results.map((contact) => (
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
}

export default App
