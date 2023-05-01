import React from 'react';
import EmailListing from '../components/emailListing';
import Email from '../components/email'


function Listing() {
  return (
    <>
        <div className='bg-white'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <EmailListing />
                </div>
                <div className='col-span-8 bg-white border-l'><Email /></div>
            </div>
        </div>
    </>

  );
}

export default Listing;
