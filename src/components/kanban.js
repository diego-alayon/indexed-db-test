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
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <div className='px-4 py-3 border-b border-l border-r flex justify-between'>
          <div className='font-bold text-slate-600'>Apply</div>
          <div>
          </div>
        </div>
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
          <div className="border-l border-r p-2 overflow-auto max-h-screen">
            {selectedEmailsArray.map((email, index) => (
              <div className="text-xs text-slate-600 bg-white p-2 mb-2" key={index}>
                  <div>Company: {email.company}</div>
                  <div>Job offer: {email.subject}</div>
              </div>
            ))}
          </div>
      )}
      </div>
      <div className="col-span-3">
        <div className='px-4 py-3 border-b border-r flex justify-between'>
          <div className='font-bold text-slate-600'>Stage 2</div>
          <div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className='px-4 py-3 border-b border-l border-r flex justify-between'>
          <div className='font-bold text-slate-600'>Stage 3</div>
          <div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
      <div className='px-4 py-3 border-b border-l border-r flex justify-between'>
          <div className='font-bold text-slate-600'>Stage 4</div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
