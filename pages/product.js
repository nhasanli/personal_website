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
              <strong>Things I love</strong>
            </p>
            <ul>
              <li>Claude Code (Soon)</li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  );
}
