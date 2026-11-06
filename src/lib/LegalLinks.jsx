export default function LegalLinks({ legalText }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[12px] text-white/40">
      <span>{legalText}</span>

      <span className="flex gap-4">
        <a href="#" className="hover:text-white/70">
          Privacidad
        </a>

        <a href="#" className="hover:text-white/70">
          Términos
        </a>

        <a href="#" className="hover:text-white/70">
          Aviso legal
        </a>
      </span>
    </div>
  );
}