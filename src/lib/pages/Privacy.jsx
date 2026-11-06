
export default function Privacy() {
  return (
    <main className="max-w-[900px] mx-auto px-6 py-16 text-[#1A3A2F]">
      <h1 className="font-display text-4xl font-bold mb-4">
        Política de privacidad
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Última actualización: noviembre de 2026
      </p>

      <div className="space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">1. Información que recopilamos</h2>
          <p>
            Podemos recopilar tu nombre, correo electrónico, número de teléfono
            y los datos necesarios para gestionar tus reservas y experiencias.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">2. Uso de la información</h2>
          <p>
            Utilizamos tus datos para gestionar reservas, confirmar actividades,
            responder a tus consultas y mejorar nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">3. Pagos</h2>
          <p>
            Los pagos pueden ser procesados por plataformas externas como Stripe
            o PayPal. No almacenamos los datos completos de tu tarjeta bancaria.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">4. Protección de datos</h2>
          <p>
            No vendemos tus datos personales. Solo compartimos la información
            necesaria para gestionar tu reserva y prestar los servicios solicitados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">5. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, corrección o eliminación de tus datos
            personales, de acuerdo con la legislación aplicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">6. Contacto</h2>
          <p>
            Para cualquier consulta sobre privacidad, puedes contactarnos
            a través de los medios indicados en nuestro sitio web.
          </p>
        </section>
      </div>
    </main>
  );
}
