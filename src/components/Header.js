import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Meu feed</Link>
      <Link href="/most-viewed">Mais vistos</Link>
    </nav>
  );
}
