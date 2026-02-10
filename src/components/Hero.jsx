import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: 'var(--spacing-xl) 0',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Decorative Organic Shapes (CSS only) */}
            <div aria-hidden="true" style={{
                position: 'absolute',
                top: '-10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                backgroundColor: 'rgba(239, 95, 5, 0.1)', // Orange accent
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                zIndex: -1
            }}></div>

            <div aria-hidden="true" style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '400px',
                height: '400px',
                backgroundColor: 'rgba(103, 137, 41, 0.1)', // Green accent
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary)',
                    fontSize: '1.25rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--spacing-sm)'
                }}>
                    Laboratorio de Territorio, Identidad y Resiliencia
                </h2>

                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    lineHeight: '1.1',
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--color-text)'
                }}>
                    Un latido colectivo para <br />
                    <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>transformar el miedo en vida.</span>
                </h1>

                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    maxWidth: '650px',
                    margin: '0 auto var(--spacing-lg)',
                    color: '#5a4a3b'
                }}>
                    Donde el miedo se transforma en proyecto de vida y oportunidad creativa.
                </p>

                <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 48px' }}>
                        Súmate al laboratorio
                    </button>
                    <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 48px' }}>
                        Apoya LATIRE
                    </button>
                </div>
            </div>

            {/* Placeholder for Imagery */}
            <div style={{ marginTop: 'var(--spacing-xl)', position: 'relative' }}>
                {/* We can place some organic shaped image placeholders here later */}
                {/* For now, just a visual indicator of where content flows */}
                <div style={{
                    opacity: 0.5,
                    transform: 'rotate(-2deg)',
                    background: 'var(--color-accent-yellow)',
                    width: '100px', height: '100px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '-20px', right: '20%',
                    zIndex: -1
                }}></div>
            </div>

        </section >
    );
};

export default Hero;
