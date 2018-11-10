import App, { Container } from 'next/app'
import Page from '../components/Page'

// Extend Next.js App, not React Component
class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component /> {/* The Next.js page - e.g. - index.js or sell/js */}
        </Page>
      </Container>
    )
  }
}

export default MyApp