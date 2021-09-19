import Link from "next/link";

export default function Header() {
  return (
    <>
      <p className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Nijat Hasanli</a>
        </Link>
      </p>
      <ul>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/books">Books</Link>
        </li>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/programming">Programming</Link>
        </li>
      </ul>
    </>
  );
}
