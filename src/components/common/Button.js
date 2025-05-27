import React from 'react';

function Button({ label, href, className }) {
  return (
    <a
      className={`h-12 p-3 flex items-center justify-center min-w-[200px] bg-primary-green text-white font-semibold font-sans rounded-xl ${className}`}
      href={href}
    >
      {label}
    </a>
  );
}

export default Button;
