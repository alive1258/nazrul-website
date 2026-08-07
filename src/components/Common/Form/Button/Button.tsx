import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'outline',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "text-white bg-indigo-700 hover:bg-indigo-800",
    secondary: "text-indigo-700 bg-indigo-50 hover:bg-indigo-100",
    outline: "text-indigo-700 bg-transparent border border-indigo-200 hover:bg-indigo-50"
  };
  
  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;