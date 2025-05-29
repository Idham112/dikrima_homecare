import React from 'react';

const baseStyle =
  'flex items-center justify-center min-w-[200px] font-semibold font-sans rounded-xl transition cursor-pointer'; // Added focus styles for accessibility

function Button({
  size = 'lg',
  label,
  href,
  type = 'fill',
  className,
  onClick,
  ...props
}) {
  // Added onClick and other props
  const styles = {
    fill: `${size === 'lg' ? 'h-12 text-base' : 'h-9 text-sm'} p-3 justify-center border border-primary-green bg-primary-green text-white hover:bg-primary-green-dark focus:ring-primary-green focus:outline-none focus:ring-2 focus:ring-opacity-50`, // Added hover & focus
    outline: `${size === 'lg' ? 'h-12 text-base' : 'h-9 text-sm'} p-3 justify-center border-2 border-dark-green text-dark-green hover:bg-dark-green hover:text-white focus:ring-dark-green focus:outline-none focus:ring-2 focus:ring-opacity-50`, // Added hover & focus
    text: `${size === 'lg' ? 'h-12 text-base' : 'h-9 text-sm'} p-0 justify-start text-primary-green underline hover:text-primary-green-dark `, // Added hover & focus
  };

  const appliedStyle = `${baseStyle} ${styles[type] || styles.fill} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={appliedStyle} {...props}>
        {label}
      </a>
    );
  }

  return (
    <button
      type="button" // Default to "button" to prevent accidental form submissions
      className={appliedStyle}
      onClick={onClick} // Pass onClick handler to button
      {...props} // Spread other props like disabled, aria-label, etc.
    >
      {label}
    </button>
  );
}

export default Button;
