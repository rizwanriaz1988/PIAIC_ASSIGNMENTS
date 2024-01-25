// Client-side component
import React, { useState } from 'react';

function SizeSelect(props: { size: string[] , sizeCallback: any}) {
  const [activeSize, setActiveSize] = useState<string | null>(props.size[0]);
  props.sizeCallback(activeSize)
  const handleSizeClick = (size: string) => {
    // Always keep the current button selected
    if (activeSize !== size) {
      setActiveSize(size);
      // Additional logic if needed
    }
  };

  return (
    <div className='gap-3 flex flex-col'>
      <h1 className='font-bold'>Select Size</h1>
      <div className='flex gap-6'>
        {props.size.map((size) => (
          <button
            key={size}
            className={`rounded-full size-8 shadow-lg ${activeSize === size ? 'bg-slate-500 text-white' : 'bg-slate-100 text-md'}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelect;
