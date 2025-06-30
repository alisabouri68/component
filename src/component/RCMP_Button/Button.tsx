import React from 'react';
export interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' ;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  direction?: 'row' | 'col'; 
}

const Button: React.FC<PropsButton> = ({
  iconLeft,
  iconRight,
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className = '',
  direction = 'row',
  ...props
}) => {
  const baseStyle = 'capitalize inline-flex items-center justify-center rounded-xl font-semibold focus:outline-none transition-all duration-200 cursor-pointer';

  const variantStyle =
    variant === 'primary'
      ? ' text-[#45A0BC] '
      : variant === 'secondary'
      ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      : variant === 'danger'
      ? 'bg-red-600 text-white hover:bg-red-700'
      : 'bg-transparent text-gray-700 ';

  const sizeStyle =
    size === 'sm'
      ? 'px-3 py-1 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base';

  const disabledStyle = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  const directionStyle =
    direction === 'col'
      ? 'flex-col gap-1 text-center'
      : 'flex-row gap-2'; 

  const combinedClass = `${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle} ${directionStyle} ${className}`.trim();

  return (
    <button className={combinedClass} disabled={disabled || loading} {...props}>
      {loading ? (
        <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full" />
      ) : (
        iconLeft && <span className="text-2xl">{iconLeft}</span>
      )}
      <span className='text-sm'>{title}</span>
      {iconRight && !loading && <span className="text-2xl">{iconRight}</span>}
    </button>
  );
};

export default Button;
