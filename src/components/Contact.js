// destructured props
const Contact = ({ firstName, lastName, homePhone, cellPhone, photoUrl }) => {
  return (
    <div className="contact-wrapper">
      <img src={photoUrl} alt={`photo of ${firstName} ${lastName}`} />
      <div className="contact-details">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>
          <b>Home</b>: {homePhone}
        </p>
        <p>
          <b>Cell</b>: {cellPhone}
        </p>
      </div>
    </div>
  )
}

export default Contact
