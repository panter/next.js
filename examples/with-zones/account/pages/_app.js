import App, {Container} from 'next/app'
import React from 'react'
import Link from "next/link";

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
        <Link href="/account"><a>index</a></Link>
        <br />
        <Link href="/account/password"><a>password</a></Link>
      <Component {...pageProps} />
    </Container>
  }
}
