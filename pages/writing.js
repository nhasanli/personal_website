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
          <div>
            <p className="mb-1">
              <strong>My thoughts.</strong>
            </p>
            <ul>
              <li>
                <a
                  className="hover:text-success duration-200 transition-colors"
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Journalling
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  );
}
