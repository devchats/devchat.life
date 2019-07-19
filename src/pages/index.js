import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        marginTop: 80,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image />
      <p style={{ fontSize: 28, marginBottom: 8, marginTop: 24 }}>
        A place for all developers to chat about all the things.
      </p>
      <p style={{ fontSize: 18 }}>Dev, Hobbies, Randomness, and Life!</p>

      <p style={{ fontSize: 20, fontWeight: "bold" }}>
        The chat is over. Stay tuned for the next one.
      </p>
      {/* <a
        href="https://zoom.us/j/564989895"
        style={{
          background: "#ffb961",
          color: "#fff",
          padding: "16px",
          borderRadius: 4,
          textDecoration: "none",
          margin: "20px auto  ",
          display: "block",
          width: 200,
        }}
      >
        Join the Video Chat!
      </a> */}
    </div>
  </Layout>
)

export default IndexPage
