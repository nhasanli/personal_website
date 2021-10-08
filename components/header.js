import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <p className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-2 mt-8">
        <Link href="/">
          <a className="hover:underline">Nijat Hasanli</a>
        </Link>
      </p>
      <div>
        <a
          className="hover:text-success duration-200 transition-colors"
          href="https://www.linkedin.com/in/nijat-h-46b21061/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>{" "}
        <a
          className="hover:text-success duration-200 transition-colors"
          href="https://twitter.com/nhasanli"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>{" "}
        <a
          className="hover:text-success duration-200 transition-colors"
          href="https://github.com/nhasanli"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="mt-4 mb-7">I want to build awesome products.</p>
      <ul>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/books">Books</Link>
        </li>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/programming">Programming</Link>
        </li>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/science">Science</Link>
        </li>
        <li className="underline hover:text-success duration-200 transition-colors">
          <Link href="/chain">On-Chain</Link>
        </li>
      </ul>
    </>
  );
}
