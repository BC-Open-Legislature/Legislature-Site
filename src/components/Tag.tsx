import React from 'react';

interface tagProps {
  className: string,
  name: string,
}

const Tag = (props: tagProps) => {
  const { className, name } = props;
  return (
    <div className={`px-2 rounded-md w-min mx-auto font-bold text-black-700 ${className}`}>
      {name}
    </div>
  );
};

export default Tag;
