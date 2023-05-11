import React from 'react';
import { MdMailOutline, MdForwardToInbox } from "react-icons/md";


function navigation(props) {
    return (
        <div className='p-4 max-h-screen'>
            <div className='font-bold text-slate-600 mb-6'>Navigation</div>
            <ul className='text-sm text-slate-600'>
                <li className='mb-2 flex items-center'><MdMailOutline className='mr-3' />Inbox</li>
                <li className='mb-2 flex items-center'><MdForwardToInbox className='mr-3' />Kanban</li>
                <li className='mb-2 flex items-center'><MdForwardToInbox className='mr-3' />Draft</li>
                <li className='mb-2 flex items-center'><MdForwardToInbox className='mr-3' />Send Emails</li>
                <li className='mb-2 flex items-center'><MdForwardToInbox className='mr-3' />Kanban</li>
            </ul>
        </div>
    );
}

export default navigation;