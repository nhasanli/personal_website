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
            <strong>The future</strong>
          </p>
          <ul>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://bit.ly/3oSbIj8"
                target="_blank"
                rel="noreferrer"
              >
                Nuclear Power
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://go.nature.com/3myF4jT"
                target="_blank"
                rel="noreferrer"
              >
                Spintronics
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://www.longevity.vc/"
                target="_blank"
                rel="noreferrer"
              >
                Longevity
              </a>
            </li>
            <li>
              <a
                className="hover:text-success duration-200 transition-colors"
                href="https://www.nasa.gov/oem/inspacemanufacturing/"
                target="_blank"
                rel="noreferrer"
              >
                Space
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
