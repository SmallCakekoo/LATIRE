import React from 'react';

const ResourceBlock = ({ title, concept, items, footer, color, icon, rotation, delay }) => {
    // Generate a lighter version of the color for backgrounds (approximate)
    // Since we are using CSS variables, we can't easily alpha-blend them in inline styles without calc-mix or similar modern CSS
    // For now, we will use a white background with a colored border and shadow to keep it clean but vibrant.

    return (
        <div style={{
            backgroundColor: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            border: `2px solid ${color}`,
            boxShadow: `6px 6px 0px ${color}`,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            transform: `rotate(${rotation})`,
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotate(0deg)';
                e.currentTarget.style.boxShadow = `12px 12px 0px ${color}`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${rotation})`;
                e.currentTarget.style.boxShadow = `6px 6px 0px ${color}`;
            }}
        >
            {/* Header Icon & Title */}
            <div style={{
                color: color,
                marginBottom: 'var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
            }}>
                <div style={{
                    padding: '8px',
                    borderRadius: '50%',
                    backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`, // Modern browsers support this
                }}>
                    {icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>{title}</h3>
            </div>

            {/* Concept Phrase */}
            <p style={{
                fontWeight: '500',
                color: 'var(--color-text)',
                marginBottom: 'var(--spacing-md)',
                fontSize: '1.1rem',
                lineHeight: '1.4'
            }}>
                {concept}
            </p>

            {/* List Items as Pills */}
            <div style={{
                marginBottom: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
            }}>
                {items.map((item, index) => (
                    <span key={index} style={{
                        padding: '6px 14px',
                        backgroundColor: `color-mix(in srgb, ${color} 8%, transparent)`,
                        color: 'var(--color-text)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: `1px solid ${color}`
                    }}>
                        {item}
                    </span>
                ))}
            </div>

            {/* Footer */}
            {footer && (
                <div style={{
                    marginTop: 'var(--spacing-lg)',
                    paddingTop: 'var(--spacing-md)',
                    borderTop: `1px dashed ${color}`,
                    fontSize: '0.9rem',
                    color: '#666',
                    fontStyle: 'italic'
                }}>
                    {footer}
                </div>
            )}
        </div>
    );
};

const ResourcesSection = () => {
    return (
        <section id="recursos" style={{
            padding: 'var(--spacing-xl) 0',
            backgroundColor: 'var(--color-cream)',
            position: 'relative',
            overflow: 'hidden' // In case rotations go out of bounds slightly we don't want scrollbars
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                backgroundColor: 'rgba(239, 95, 5, 0.05)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                backgroundColor: 'rgba(35, 77, 87, 0.05)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}>
                    <h2 style={{
                        color: 'var(--color-primary)',
                        fontSize: '3rem',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        ¿Cómo LATIRE genera recursos?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#5a4a3b', maxWidth: '600px', margin: '0 auto' }}>
                        Construimos sostenibilidad desde la creatividad, el servicio y la colaboración.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    padding: '1rem' // Add padding to container so rotated items don't clip
                }}>
                    {/* Bloque 1: Economía creativa */}
                    <ResourceBlock
                        title="Economía creativa"
                        concept="Creamos valor cultural desde el territorio"
                        items={["Podcast barrial", "Obras artísticas", "Archivo vivo", "Contenidos creativos"]}
                        footer="Estos productos se contratan, se presentan y se financian."
                        color="var(--color-accent-teal)"
                        rotation="-1deg"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.26C5.19 13.47 4 11.38 4 9a7 7 0 0 1 8-7z"></path>
                                <path d="M9 21h6"></path>
                                <path d="M10 21a2 2 0 0 1 4 0"></path>
                            </svg>
                        }
                    />

                    {/* Bloque 2: Servicios LATIRE */}
                    <ResourceBlock
                        title="Servicios LATIRE"
                        concept="LATIRE presta servicios a instituciones"
                        items={["Talleres de arte y bienestar", "Procesos de memoria comunitaria"]}
                        footer="Generamos ingresos sin perder el enfoque social."
                        color="var(--color-accent-orange)"
                        rotation="1.5deg"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                            </svg>
                        }
                    />

                    {/* Bloque 3: Alianzas y fondos */}
                    <ResourceBlock
                        title="Alianzas y fondos"
                        concept="Trabajamos con aliados que creen en la juventud"
                        items={["Cooperación internacional", "Fondos culturales", "Empresas con RSE", "Sector público", "Becas universitarias"]}
                        color="var(--color-accent-green)"
                        rotation="-2deg"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        }
                    />

                    {/* Bloque 4: Eventos y muestras */}
                    <ResourceBlock
                        title="Eventos y muestras"
                        concept="El barrio se muestra, se escucha y se valora"
                        items={["Festivales", "Muestras artísticas", "Encuentros culturales"]}
                        color="var(--color-accent-yellow)"
                        rotation="1deg"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        }
                    />
                </div>
            </div>

            {/* Mobile responsiveness tweak */}
            <style>{`
                @media (max-width: 600px) {
                    #recursos .container > div:last-child {
                        grid-template-columns: 1fr;
                        padding: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default ResourcesSection;
