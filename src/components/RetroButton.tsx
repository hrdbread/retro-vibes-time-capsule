import React from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyber' | 'neon' | 'rainbow' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const RetroButton: React.FC<RetroButtonProps> = ({ 
  className, 
  variant = 'cyber', 
  size = 'md',
  href,
  children, 
  ...props 
}) => {
  const baseClasses = 'font-bold transition-all duration-300 transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    cyber: 'retro-button text-background',
    neon: 'bg-gradient-neon border-2 border-hot-pink text-background retro-glow',
    rainbow: 'bg-gradient-rainbow border-2 border-foreground text-background animate-rainbow',
    glow: 'bg-background border-2 border-cyber-blue text-cyber-blue retro-glow hover:bg-cyber-blue hover:text-background'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default RetroButton;