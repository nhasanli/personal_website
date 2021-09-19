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
                        <li><Link href="https://amz.run/4uE1">Team of Rivals, Doris Kearns Goodwin </Link></li>
                        <li><Link href="https://amz.run/4uE2">Snow Crash, Neal Stephenson</Link></li>
                    </ul>

                </Container>
            </Layout>
        </>
    )
}
