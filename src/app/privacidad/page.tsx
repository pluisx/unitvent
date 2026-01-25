import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#212121]">
        <div className="container-custom py-6">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e36d00] to-[#ffb168] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">U</span>
            </div>
            <span className="text-lg font-medium text-white">Unitvent</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Politica de Privacidad</h1>
          <p className="text-[#6b6b6b] mb-12">Ultima actualizacion: Enero 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">1. Introduccion</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                En Unitvent, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
                Esta politica de privacidad te informara sobre como cuidamos tus datos personales cuando
                visitas nuestro sitio web y te informara sobre tus derechos de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">2. Datos que Recopilamos</h2>
              <p className="text-[#8a8a8a] leading-relaxed mb-4">
                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti:
              </p>
              <ul className="list-disc list-inside text-[#8a8a8a] space-y-2">
                <li>Datos de identidad: nombre, apellido, nombre de usuario</li>
                <li>Datos de contacto: direccion de correo electronico, numero de telefono</li>
                <li>Datos tecnicos: direccion IP, tipo de navegador, zona horaria</li>
                <li>Datos de uso: informacion sobre como usas nuestro sitio web y servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">3. Como Usamos tus Datos</h2>
              <p className="text-[#8a8a8a] leading-relaxed mb-4">
                Utilizamos tus datos personales para los siguientes propositos:
              </p>
              <ul className="list-disc list-inside text-[#8a8a8a] space-y-2">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Notificarte sobre cambios en nuestros servicios</li>
                <li>Brindarte soporte al cliente</li>
                <li>Recopilar analisis para mejorar nuestros servicios</li>
                <li>Enviarte comunicaciones de marketing (con tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">4. Compartir tus Datos</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                No vendemos tus datos personales a terceros. Podemos compartir tus datos con proveedores
                de servicios que nos ayudan a operar nuestro negocio, siempre bajo estrictos acuerdos
                de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">5. Seguridad de los Datos</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales
                se pierdan, usen o accedan de manera no autorizada. Limitamos el acceso a tus datos
                personales a aquellos empleados y terceros que tienen una necesidad comercial legitima.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">6. Tus Derechos</h2>
              <p className="text-[#8a8a8a] leading-relaxed mb-4">
                Bajo ciertas circunstancias, tienes derechos sobre tus datos personales:
              </p>
              <ul className="list-disc list-inside text-[#8a8a8a] space-y-2">
                <li>Derecho de acceso a tus datos personales</li>
                <li>Derecho de rectificacion de datos inexactos</li>
                <li>Derecho de eliminacion de tus datos</li>
                <li>Derecho a oponerte al procesamiento</li>
                <li>Derecho a la portabilidad de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">7. Cookies</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Nuestro sitio web utiliza cookies para mejorar tu experiencia. Las cookies son pequenos
                archivos de texto que se almacenan en tu dispositivo. Puedes configurar tu navegador
                para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">8. Cambios a esta Politica</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Podemos actualizar esta politica de privacidad periodicamente. Te notificaremos sobre
                cualquier cambio publicando la nueva politica en esta pagina y actualizando la fecha
                de &quot;ultima actualizacion&quot;.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">9. Contacto</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Si tienes preguntas sobre esta politica de privacidad o sobre como manejamos tus datos
                personales, contactanos en:{' '}
                <a href="mailto:privacidad@unitvent.com" className="text-[#e36d00] hover:underline">
                  privacidad@unitvent.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-[#212121]">
            <Link href="/" className="text-[#e36d00] hover:underline text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
