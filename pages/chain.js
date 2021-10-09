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
            <strong>Decentralisation.</strong>
          </p>
          <ul>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3AsRuia"
                target="_blank"
                rel="noreferrer"
              >
                Blockchain and Money
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3FxlUDC"
                target="_blank"
                rel="noreferrer"
              >
                Cryptographic Truth
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://proto.school/"
                target="_blank"
                rel="noreferrer"
              >
                Decentralised Networks
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3FuZAdN"
                target="_blank"
                rel="noreferrer"
              >
                Ethereum Name Service
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
