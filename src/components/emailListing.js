import React, { useState, useEffect } from "react";

function EmailListing() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedEmailsArray, setSelectedEmailsArray] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/8j5e9kr29c94q")
      .then((response) => response.json())
      .then((data) => setEmails(data));
  }, []);

  const handleSelectorChange = (e, email) => {
    setSelectedEmail(email);
  };

  const handleAddToSelectedEmails = (email) => {
    setSelectedEmailsArray([...selectedEmailsArray, email]);
  };

  const handleSendSelectedEmails = () => {
    // Enviar correos electrónicos seleccionados a página Kanban
    localStorage.setItem("selectedEmailsArray", JSON.stringify(selectedEmailsArray));
    console.log(selectedEmailsArray);
  };

  const handleDeleteEmail = () => {
    // Eliminar correo seleccionado
    localStorage.removeItem("selectedEmail");
    console.log(selectedEmail);
  };

  return (
    <>
      <div className='px-4 py-3 border-b flex justify-between'>
        <div className='font-bold text-slate-600'>Focused</div>
        <div>
          <button className="text-xs mr-2 py-1 px-2 text-white bg-blue-600 rounded-sm" onClick={handleSendSelectedEmails}>Send kanban</button>
          <button className="text-xs py-1 px-2 text-slate-600 bg-slate-200 rounded-sm" onClick={handleDeleteEmail}>Delete selected</button>
        </div>
      </div>
      <div className="text-xs text-slate-600 overflow-auto max-h-screen">
        {emails?.map((email) => (
        <div className="p-4 border-b" key={email?.id}>
          <div className="flex flex-row">
            <div className="font-bold mr-1">{email.name}</div>
            <div className="font-bold">{email.surname}</div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="mr-4">{email.subject}</div>
            <div className="text-blue-600">{email.time}</div>
          </div>

          <div>
            <select
              className="bg-white p-1 mr-2 border rounded-sm"
              value={selectedEmail === email ? "eliminar" : "enviar"}
              onChange={(e) => handleSelectorChange(e, email)}
            >
              <option selected>Choice one option</option>
              <option value="enviar">Apply</option>
              <option value="eliminar">Eliminar</option>
            </select>
            <button className="p-1 py-1 px-2 text-slate-600 bg-slate-200 rounded-sm" onClick={() => handleAddToSelectedEmails(email)}>Confirm</button>
          </div>
        </div>
      ))}
    

      </div>


    </>
  );
}

export default EmailListing;
