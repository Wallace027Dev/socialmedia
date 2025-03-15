import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Meu feed</Link>
      <Link href="/mostViewed">Mais vistos</Link>
    </nav>
  );
}
