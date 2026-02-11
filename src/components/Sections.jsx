import React from 'react';
import ResourcesSection from './ResourcesSection';

const Section = ({ id, title, bgColor, children, className }) => (
    <section id={id} className={className} style={{
        padding: 'var(--spacing-xl) 0',
        backgroundColor: bgColor || 'transparent',
        position: 'relative'
    }}>
        <div className="container">
            {title && <h2 style={{
                color: 'var(--color-primary)',
                fontSize: '2.5rem',
                marginBottom: 'var(--spacing-lg)',
                textAlign: 'center'
            }}>{title}</h2>}
            {children}
        </div>
    </section>
);

const Sections = () => {
    return (
        <>
            {/* 1. EL PROBLEMA */}
            <Section id="el-problema" bgColor="rgba(255,255,255,0.6)">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        color: 'var(--color-text)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        "Vivir con miedo también es una forma de violencia."
                    </h3>
                    <p style={{ fontSize: '1.25rem', color: '#5a4a3b' }}>
                        En muchos barrios de Cali, los jóvenes crecen aprendiendo a cuidarse, callar y limitar sus pasos.
                        El miedo condiciona la vida cotidiana, limita la movilidad y normaliza la violencia.
                        <br /><br />
                        <strong>LATIRE interviene ese miedo desde el territorio, la expresión y la oportunidad real.</strong>
                    </p>
                </div>
            </Section>

            {/* 2. QUÉ ES LATIRE */}
            <Section id="qué-es" bgColor="var(--color-cream)">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: 'var(--spacing-md)' }}>
                        ¿Qué es LATIRE?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#5a4a3b' }}>
                        LATIRE es un espacio seguro para sentir, expresarse y proyectarse. Un laboratorio donde el cuerpo, la palabra, el arte y la memoria se convierten en herramientas de cuidado y transformación.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)', // Enforce 2 columns for 2x2 layout
                    gap: 'var(--spacing-md)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {[
                        { text: "Un espacio seguro", color: "var(--color-accent-teal)", rotation: "-1deg" },
                        { text: "Un laboratorio creativo", color: "var(--color-accent-orange)", rotation: "2deg" },
                        { text: "Un proceso de sanación colectiva", color: "var(--color-accent-green)", rotation: "-1.5deg" },
                        { text: "Un trampolín hacia oportunidades reales", color: "var(--color-accent-yellow)", rotation: "1deg" }
                    ].map((item, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-lg)',
                            backgroundColor: '#fff',
                            color: 'var(--color-text)',
                            border: `2px solid ${item.color}`,
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: `4px 4px 0px ${item.color}`,
                            transform: `rotate(${item.rotation})`,
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '140px',
                            textAlign: 'center',
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) rotate(0deg)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${item.rotation})`}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
                {/* Responsive grid fix for mobile */}
                <style>{`
          @media (max-width: 600px) {
            #qué-es .container > div:last-child {
               grid-template-columns: 1fr !important;
            }
          }
        `}</style>
            </Section>

            {/* 3. CÓMO FUNCIONA (Metodología) */}
            <Section id="cómo-funciona" title="Cómo funciona LATIRE" bgColor="rgba(255, 255, 255, 0.6)">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {/* Card 1 */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: '#fff',
                        borderRadius: 'var(--radius-lg)',
                        borderTop: '4px solid var(--color-accent-teal)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ color: 'var(--color-accent-teal)', marginBottom: 'var(--spacing-sm)' }}>1. Entrar y Confiar</h3>
                        <p style={{ fontSize: '0.95rem' }}><strong>Objetivo:</strong> Sentirse seguro.</p>
                        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.95rem', color: '#666' }}>
                            Convocatoria barrial, círculos de palabra y escuchas sin juicio para generar confianza y pertenencia.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: '#fff',
                        borderRadius: 'var(--radius-lg)',
                        borderTop: '4px solid var(--color-accent-orange)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ color: 'var(--color-accent-orange)', marginBottom: 'var(--spacing-sm)' }}>2. Expresar el Miedo</h3>
                        <p style={{ fontSize: '0.95rem' }}><strong>Objetivo:</strong> Tramitar emocionalmente.</p>
                        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.95rem', color: '#666' }}>
                            Danza, música, escritura y teatro. El cuerpo y la voz como herramientas para transformar la emoción.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: '#fff',
                        borderRadius: 'var(--radius-lg)',
                        borderTop: '4px solid var(--color-accent-green)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--spacing-sm)' }}>3. Contar la Historia</h3>
                        <p style={{ fontSize: '0.95rem' }}><strong>Objetivo:</strong> Resignificar el territorio.</p>
                        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.95rem', color: '#666' }}>
                            Podcast barrial, archivo vivo y diálogo intergeneracional para construir memoria colectiva.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: '#fff',
                        borderRadius: 'var(--radius-lg)',
                        borderTop: '4px solid var(--color-accent-yellow)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ color: 'var(--color-accent-yellow)', marginBottom: 'var(--spacing-sm)' }}>4. Construir Futuro</h3>
                        <p style={{ fontSize: '0.95rem' }}><strong>Objetivo:</strong> Crear oportunidades reales.</p>
                        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: '0.95rem', color: '#666' }}>
                            Formación en emprendimiento creativo, proyectos colectivos y acompañamiento al proyecto de vida.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 4. IMPACTO */}
            <Section id="impacto" title="Impacto Esperado" bgColor="rgba(239, 95, 5, 0.05)">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-lg)', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-primary)' }}>+500</div>
                        <p>Jóvenes impactados</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-primary)' }}>3</div>
                        <p>Barrios intervenidos</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-primary)' }}>12</div>
                        <p>Emprendimientos creativos</p>
                    </div>
                </div>
            </Section>

            {/* 5. MANIFIESTO / VIDEO */}
            <Section id="manifiesto" bgColor="#352C23">
                <div style={{ color: '#fff', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-heading)' }}>El corazón del prototipo</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)', opacity: 0.9 }}>
                        Un latido colectivo para transformar el miedo en vida.
                    </p>

                    {/* Video Placeholder */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px dashed rgba(255,255,255,0.3)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>▶</div>
                            <p>Video Invitación (1:30 min)</p>
                        </div>
                    </div>

                    <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                        "Aquí uno aprende a vivir con miedo… pero nadie te enseña qué hacer con él."
                    </p>
                </div>
            </Section>

            {/* NUEVA SECCIÓN: RECURSOS */}
            <ResourcesSection />

            {/* 6. CALL TO ACTION (SÚMATE) */}
            <Section id="súmate" title="Súmate a LATIRE">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    marginTop: 'var(--spacing-md)'
                }}>
                    {/* Para Jóvenes */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'var(--color-cream)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                            Para Jóvenes
                        </h3>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>
                            ¿Quieres transformar lo que sientes en algo que te abra puertas? Este lugar es para ti.
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Inscribirme ahora</button>
                    </div>

                    {/* Para Aliados */}
                    <div style={{
                        padding: 'var(--spacing-lg)',
                        backgroundColor: 'rgba(35, 77, 87, 0.05)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent-teal)', marginBottom: 'var(--spacing-sm)' }}>
                            Para Aliados
                        </h3>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>
                            ¿Quieres invertir en una solución que combina impacto social y sostenibilidad?
                        </p>
                        <button className="btn btn-secondary" style={{ width: '100%', borderColor: 'var(--color-accent-teal)', color: 'var(--color-accent-teal)' }}>
                            Conviértete en aliado
                        </button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Sections;
