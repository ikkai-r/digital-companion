import React from 'react';

const D20 = ({number}) => {
  return (
    <span className="hex">
        <div
        className='flex justify-center items-center text-center'>
            <p className='text-6xl font-bold'>
                {number}
            </p>
            </div>
    </span>
  );
};

export default D20;
