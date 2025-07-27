import React from 'react';

interface RetroSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'construction' | 'glow';
  className?: string;
}

const RetroSection: React.FC<RetroSectionProps> = ({ 
  id, 
  title, 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'construction':
        return 'bg-acid-yellow text-background border-4 border-background animate-blink';
      case 'glow':
        return 'bg-card border-2 border-cyber-blue retro-glow';
      default:
        return 'bg-card border-2 border-hot-pink';
    }
  };

  return (
    <section id={id} className={`my-8 p-6 ${getVariantClasses()} ${className}`}>
      <h2 className="font-pixel text-xl md:text-2xl mb-4 text-center retro-rainbow">
        {variant === 'construction' && '🚧 '}
        {title}
        {variant === 'construction' && ' 🚧'}
      </h2>
      <div className="font-comic">
        {children}
      </div>
    </section>
  );
};

export default RetroSection;