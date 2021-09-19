import Container from '../components/container'
import Link from "next/link"
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
                        <li>Team of Rivals</li>
                        <li>Snowcrash</li>
                    </ul>

                </Container>
            </Layout>
        </>
    )
}
