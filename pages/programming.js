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
            <p>
              <strong>My languages.</strong>
            </p>
            <ul>
              <li>
                <a
                  className="hover:text-success duration-200 transition-colors"
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Typescript
                </a>
              </li>
              <li>
                <a
                  className="hover:text-success duration-200 transition-colors"
                  href="https://golang.org/doc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Golang
                </a>
              </li>
              <li>
                <a
                  className="hover:text-success duration-200 transition-colors"
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Python
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  );
}
