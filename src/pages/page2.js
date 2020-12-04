import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Page2Page = () => {
  return (
    <Layout>
      <h1>Page 2</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default Page2Page
