import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Terminos y Condiciones</h1>
          <p className="text-[#6b6b6b] mb-12">Ultima actualizacion: Enero 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">1. Aceptacion de los Terminos</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Al acceder y utilizar los servicios de Unitvent, aceptas estar sujeto a estos terminos
                y condiciones. Si no estas de acuerdo con alguna parte de estos terminos, no podras
                acceder a nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">2. Descripcion de los Servicios</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Unitvent proporciona servicios de desarrollo de software, automatizacion de procesos,
                inteligencia artificial y soluciones tecnologicas empresariales. Los servicios especificos
                se detallaran en contratos o acuerdos individuales con cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">3. Uso del Servicio</h2>
              <p className="text-[#8a8a8a] leading-relaxed mb-4">
                Al utilizar nuestros servicios, te comprometes a:
              </p>
              <ul className="list-disc list-inside text-[#8a8a8a] space-y-2">
                <li>Proporcionar informacion veraz y actualizada</li>
                <li>Mantener la confidencialidad de tus credenciales de acceso</li>
                <li>No utilizar los servicios para fines ilegales o no autorizados</li>
                <li>No interferir con el funcionamiento de nuestros sistemas</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">4. Propiedad Intelectual</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Todo el contenido, codigo fuente, disenos, marcas y materiales proporcionados por Unitvent
                son propiedad exclusiva de Unitvent o sus licenciantes. No se concede ninguna licencia
                o derecho sobre dicha propiedad intelectual excepto lo expresamente acordado por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">5. Entregables y Licencias</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Los derechos sobre el software y productos desarrollados especificamente para el cliente
                se transferiran segun lo estipulado en cada contrato de servicio. El cliente recibira
                una licencia de uso sobre los productos entregados conforme a los terminos acordados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">6. Pagos y Facturacion</h2>
              <p className="text-[#8a8a8a] leading-relaxed mb-4">
                Los terminos de pago seran especificados en cada propuesta o contrato individual:
              </p>
              <ul className="list-disc list-inside text-[#8a8a8a] space-y-2">
                <li>Los pagos deben realizarse en los plazos acordados</li>
                <li>Los precios no incluyen impuestos salvo indicacion contraria</li>
                <li>El incumplimiento de pago puede resultar en suspension de servicios</li>
                <li>Las tarifas pueden ajustarse con previo aviso de 30 dias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">7. Confidencialidad</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Ambas partes se comprometen a mantener la confidencialidad de la informacion sensible
                compartida durante la relacion comercial. Esta obligacion permanecera vigente incluso
                despues de la terminacion de los servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">8. Limitacion de Responsabilidad</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Unitvent no sera responsable por danos indirectos, incidentales, especiales o consecuentes
                que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad
                total no excedera el monto pagado por los servicios en los ultimos 12 meses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">9. Garantias</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Unitvent garantiza que los servicios se prestaran de manera profesional y conforme a
                los estandares de la industria. Ofrecemos un periodo de garantia para correccion de
                errores segun lo especificado en cada contrato de servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">10. Terminacion</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Cualquiera de las partes puede terminar la relacion comercial con previo aviso escrito
                de 30 dias. En caso de incumplimiento material de estos terminos, la parte afectada
                puede terminar inmediatamente con notificacion por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">11. Ley Aplicable</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Estos terminos se regiran e interpretaran de acuerdo con las leyes de Mexico.
                Cualquier disputa sera sometida a la jurisdiccion de los tribunales de la Ciudad de Mexico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">12. Modificaciones</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Nos reservamos el derecho de modificar estos terminos en cualquier momento. Los cambios
                entraran en vigor al publicarse en este sitio web. El uso continuado de nuestros servicios
                constituye la aceptacion de los terminos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">13. Contacto</h2>
              <p className="text-[#8a8a8a] leading-relaxed">
                Para preguntas sobre estos terminos y condiciones, contactanos en:{' '}
                <a href="mailto:legal@unitvent.com" className="text-[#e36d00] hover:underline">
                  legal@unitvent.com
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
