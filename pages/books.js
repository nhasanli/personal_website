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
          <p>
            <strong>My favorite books.</strong>
          </p>
          <ul>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3hLjFCo"
                target="_blank"
                rel="noreferrer"
              >
                Team of Rivals, Doris Kearns Goodwin.
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/2XydTxq"
                target="_blank"
                rel="noreferrer"
              >
                Snow Crash, Neal Stephenson.
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/2YtMfBB"
                target="_blank"
                rel="noreferrer"
              >
                Shoe Dog, Phil Knight.
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
