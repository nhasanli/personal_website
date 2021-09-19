import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from "../components/header"

export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>nijat</title>
                </Head>
                <Container>
                    <Header />
                    <br></br>
                    <p><strong>My languages</strong></p>
                    <ul>
                        <li><a href="https://www.typescriptlang.org/docs/">Typescript</a></li>
                        <li><a href="https://golang.org/doc/">Golang</a></li>
                    </ul>

                </Container>
            </Layout>
        </>
    )
}
