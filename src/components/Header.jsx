import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={{
            padding: 'var(--spacing-md) 0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(245, 231, 214, 0.95)',
            backdropFilter: 'blur(5px)',
            zIndex: 1000
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    lineHeight: 1,
                    color: 'var(--color-primary)',
                    fontWeight: 700
                }}>
                    LATIRE
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    {['¿Qué es?', '¿Cómo funciona?', 'Impacto', 'Súmate'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 500,
                            fontSize: '1.1rem'
                        }}>
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="desktop-ctas" style={{ display: 'none', gap: 'var(--spacing-sm)' }}>
                    <button className="btn btn-secondary">Ser aliado</button>
                    <button className="btn btn-primary" style={{ boxShadow: '0 4px 6px rgba(186, 63, 49, 0.2)' }}>Inscribirme</button>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'block', fontSize: '1.5rem', background: 'none' }}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Simple implementation) */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-cream)',
                    padding: 'var(--spacing-lg)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)'
                }}>
                    {['¿Qué es?', '¿Cómo funciona?', 'Impacto', 'Súmate'].map((item) => (
                        <a key={item} href="#" onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                            {item}
                        </a>
                    ))}
                    <div style={{ height: '1px', width: '100%', backgroundColor: 'rgba(0,0,0,0.1)', margin: 'var(--spacing-sm) 0' }}></div>
                    <button className="btn btn-secondary" style={{ width: '100%' }}>Ser aliado</button>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Inscribirme</button>
                </div>
            )}

            {/* Responsive Styles Injection */}
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav, .desktop-ctas { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
