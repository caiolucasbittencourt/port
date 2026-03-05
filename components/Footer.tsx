"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-8 max-w-4xl px-4 pb-4">
      <div className="pt-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Caio Bittencourt – Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
