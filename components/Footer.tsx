"use client";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-4 pb-4 mt-8 relative z-10">
      <div className="text-center pt-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Caio Bittencourt – Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
