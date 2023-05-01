import React from 'react';

function header(props) {
    return (
        <div>
            <div className='bg-blue-600 font-bold text-white p-4'>Outlook</div>
            <div className='p-4 text-blue-500 border-b'>
                <div>+ New message</div>
            </div>
        </div>
    );
}

export default header;