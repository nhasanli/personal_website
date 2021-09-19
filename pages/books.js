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
                    <p><strong>My favorite books</strong></p>
                    <ul>
                        <li><a href="https://amz.run/4uE1" target="_blank">Team of Rivals, Doris Kearns Goodwin </a></li>
                        <li><a href="https://amz.run/4uE2" target="_blank">Snow Crash, Neal Stephenson</a></li>
                    </ul>

                </Container>
            </Layout>
        </>
    )
}
