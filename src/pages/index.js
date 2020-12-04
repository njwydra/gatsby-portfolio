import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import resume from "../files/NWydra_Resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => {
  return (
    <Layout>
      <div class="home-cont">
        <div class="namecard neumorph">
          <h1 class="name">Nick Wydra</h1>
          <h2 class="role">Front-End Developer</h2>
          <h2 class="location">Chicago, IL</h2>
        </div>
        <div class="button-cont">
          <a class="neumorph button" href={resume} download>
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
          <a class="neumorph button" href="https://www.linkedin.com/in/nick-wydra/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      <p>
        <Link to="/page2/">Page 2</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
