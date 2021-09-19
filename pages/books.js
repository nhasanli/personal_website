import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from "../components/header"

export default function Index() {
    return (
        <>
            <Layout>
                <Container>
                    <Header />
                    <br></br>
                    <p><strong>My favorite books</strong></p>
                    <ul>
                        <li><a href="https://bit.ly/3hLjFCo" target="_blank" rel="noreferrer">Team of Rivals, Doris Kearns Goodwin </a></li>
                        <li><a href="https://bit.ly/2XydTxq" target="_blank" rel="noreferrer">Snow Crash, Neal Stephenson</a></li>
                    </ul>

                </Container>
            </Layout>
        </>
    )
}
