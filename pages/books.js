import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Index() {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <br />
          <p className="mb-1">
            <strong>Unordered list of my favorite books.</strong>
          </p>
          <ul>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3hLjFCo"
                target="_blank"
                rel="noreferrer"
              >
                Team of Rivals, Doris Kearns Goodwin
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/2XydTxq"
                target="_blank"
                rel="noreferrer"
              >
                Snow Crash, Neal Stephenson
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3w8RhAk"
                target="_blank"
                rel="noreferrer"
              >
                Dune, Frank Herbert
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/2YtMfBB"
                target="_blank"
                rel="noreferrer"
              >
                Shoe Dog, Phil Knight
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3CL5MNk"
                target="_blank"
                rel="noreferrer"
              >
                Games People Play, Eric Berne
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3w9WqIt"
                target="_blank"
                rel="noreferrer"
              >
                The Virtue of Selfishness, Ayn Rand
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/2ZM7uPU"
                target="_blank"
                rel="noreferrer"
              >
                The Inner Game of Tennis, Timothy Gallwey
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3wjbm71"
                target="_blank"
                rel="noreferrer"
              >
                The Untethered Soul, Michael Singer
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3wdIihh"
                target="_blank"
                rel="noreferrer"
              >
                How to Solve it, George Polya
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3bCjYvX"
                target="_blank"
                rel="noreferrer"
              >
                Essays, Ralph Waldo Emerson
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3mE9q5H"
                target="_blank"
                rel="noreferrer"
              >
                The Timeless Way of Building, Christopher W. Alexander
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3CJg1S2"
                target="_blank"
                rel="noreferrer"
              >
                The Life of Greece, Will Durant
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3wbtHTq"
                target="_blank"
                rel="noreferrer"
              >
                High Output Management, Andrew Grove
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3mFGw5t"
                target="_blank"
                rel="noreferrer"
              >
                The Guns of August, Barbara Tuchman
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
