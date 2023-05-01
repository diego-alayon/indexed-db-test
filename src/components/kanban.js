import React, { useState, useEffect } from "react";

function Kanban() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedEmailsArray, setSelectedEmailsArray] = useState([]);

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem("selectedEmail"));
    setSelectedEmail(storedEmail);
  }, []);

  useEffect(() => {
    const storedEmailsArray = JSON.parse(localStorage.getItem("selectedEmailsArray"));
    setSelectedEmailsArray(storedEmailsArray);
  }, []);

  return (
    <div>
      <h2>Kanban</h2>
      {selectedEmail && (
        <div>
          <h3>Applying</h3>
          <ul>
            <li>Nombre: {selectedEmail.Name}</li>
            <li>Apellido: {selectedEmail.Surname}</li>
            <li>Email: {selectedEmail.email}</li>
          </ul>
        </div>
      )}
      {selectedEmailsArray && selectedEmailsArray.length > 0 && (
        <div>
          <h3>Selected emails</h3>
          <ul>
            {selectedEmailsArray.map((email, index) => (
              <li key={index}>
                <ul>
                  <li>Nombre: {email.Name}</li>
                  <li>Apellido: {email.Surname}</li>
                  <li>Email: {email.email}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Kanban;
