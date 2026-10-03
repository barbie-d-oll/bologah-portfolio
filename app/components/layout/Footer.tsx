import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-8 text-gray-400">
      <Container>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} Barbara Omaira Logah.</p>

          <p>Built with Next.js and TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}