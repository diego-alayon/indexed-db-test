import React from 'react';

function email(props) {
    return (
        <div className='bg-white text-slate-600'>
            <div className='onePixex px-4 py-3 border-b flex'>
                <div className='font-bold mr-2'>Email</div>
                <div className='text-xs py-1 px-2 text-violet-500 bg-violet-100 rounded-sm'>Apply</div>
            </div>
            <div className='px-4 py-3 text-sm'>
                <div>Adele Vance</div>
                <div>Tue 6/25/2023 8:02</div>
                <div>Jordan Miller</div>
                <div className='mt-4'>May 9, 8am PT - Is there a method you can use to conceptualize products and features you know your customers will love before you even begin developing them? Join our guest speaker, Tony Ulwick, the pioneer of Jobs-To-Be-Done Theory and inventor of the Outcome-Driven Innovation (ODI) process, as he shares key insights that you can immediately apply to your product management practices and de-risk your innovation process.</div>
            </div>
        </div>
    );
}

export default email;