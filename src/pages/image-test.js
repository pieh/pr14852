import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const DebugImg = props => {
  return (
    <div
      style={{
        border: "2px solid red",
        display: "inline-block",
        maxWidth: 400,
        // background: "green",
        fontSize: 0,
        lineHeight: 0,
        ...props.wrapStyle,
      }}
    >
      <Img {...props} />
    </div>
  )
}

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Image test" />

    <h2>fluid(maxWidth: 300, maxHeight: 600)</h2>
    <table>
      <thead>
        <tr>
          <th>
            <code>fit: COVER</code>
          </th>
          <th>
            <code>fit: CONTAIN</code>
          </th>
          <th>
            <code>fit: FILL</code>
          </th>
          <th>
            <code>fit: INSIDE</code>
          </th>
          <th>
            <code>fit: OUTSIDE</code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DebugImg
              fluid={data.placeholderImage.childImageSharp.fluid_cover}
              wrapStyle={{ width: "100%" }}
            />
          </td>
          <td>
            <DebugImg
              fluid={data.placeholderImage.childImageSharp.fluid_contain}
              wrapStyle={{ width: "100%" }}
            />
          </td>
          <td>
            <DebugImg
              fluid={data.placeholderImage.childImageSharp.fluid_fill}
              wrapStyle={{ width: "100%" }}
            />
          </td>
          <td>
            <DebugImg
              fluid={data.placeholderImage.childImageSharp.fluid_inside}
              wrapStyle={{ width: "100%" }}
            />
          </td>
          <td>
            <DebugImg
              fluid={data.placeholderImage.childImageSharp.fluid_outside}
              wrapStyle={{ width: "100%" }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <pre>
              aspectRatio:{" "}
              {data.placeholderImage.childImageSharp.fluid_cover.aspectRatio}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              aspectRatio:{" "}
              {data.placeholderImage.childImageSharp.fluid_contain.aspectRatio}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              aspectRatio:{" "}
              {data.placeholderImage.childImageSharp.fluid_fill.aspectRatio}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              aspectRatio:{" "}
              {data.placeholderImage.childImageSharp.fluid_inside.aspectRatio}
              <br />
              main image res: 300 x 300
            </pre>
          </td>
          <td>
            <pre>
              aspectRatio:{" "}
              {data.placeholderImage.childImageSharp.fluid_outside.aspectRatio}
              <br />
              main image res: 600 x 600
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>fixed(width: 300, height: 600)</h2>
    <table>
      <thead>
        <tr>
          <th>
            <code>fit: COVER</code>
          </th>
          <th>
            <code>fit: CONTAIN</code>
          </th>
          <th>
            <code>fit: FILL</code>
          </th>
          <th>
            <code>fit: INSIDE</code>
          </th>
          <th>
            <code>fit: OUTSIDE</code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <DebugImg
              fixed={data.placeholderImage.childImageSharp.fixed_cover}
            />
          </td>
          <td>
            <DebugImg
              fixed={data.placeholderImage.childImageSharp.fixed_contain}
            />
          </td>
          <td>
            <DebugImg
              fixed={data.placeholderImage.childImageSharp.fixed_fill}
            />
          </td>
          <td>
            <DebugImg
              fixed={data.placeholderImage.childImageSharp.fixed_inside}
            />
          </td>
          <td>
            <DebugImg
              fixed={data.placeholderImage.childImageSharp.fixed_outside}
            />
          </td>
        </tr>
        <tr>
          <td>
            <pre>
              width: {data.placeholderImage.childImageSharp.fixed_cover.width}
              <br />
              height: {data.placeholderImage.childImageSharp.fixed_cover.height}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              width: {data.placeholderImage.childImageSharp.fixed_contain.width}
              <br />
              height:{" "}
              {data.placeholderImage.childImageSharp.fixed_contain.height}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              width: {data.placeholderImage.childImageSharp.fixed_fill.width}
              <br />
              height: {data.placeholderImage.childImageSharp.fixed_fill.height}
              <br />
              main image res: 300 x 600
            </pre>
          </td>
          <td>
            <pre>
              width: {data.placeholderImage.childImageSharp.fixed_inside.width}
              <br />
              height:{" "}
              {data.placeholderImage.childImageSharp.fixed_inside.height}
              <br />
              main image res: 300 x 300
            </pre>
          </td>
          <td>
            <pre>
              width: {data.placeholderImage.childImageSharp.fixed_outside.width}
              <br />
              height:{" "}
              {data.placeholderImage.childImageSharp.fixed_outside.height}
              <br />
              main image res: 600 x 600
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const q = graphql`
  {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid_cover: fluid(maxWidth: 300, maxHeight: 600, fit: COVER) {
          aspectRatio
          src
        }
        fluid_contain: fluid(maxWidth: 300, maxHeight: 600, fit: CONTAIN) {
          aspectRatio
          src
        }
        fluid_fill: fluid(maxWidth: 300, maxHeight: 600, fit: FILL) {
          aspectRatio
          src
        }
        fluid_inside: fluid(maxWidth: 300, maxHeight: 600, fit: INSIDE) {
          aspectRatio
          src
        }
        fluid_outside: fluid(maxWidth: 300, maxHeight: 600, fit: OUTSIDE) {
          aspectRatio
          src
        }
        fixed_cover: fixed(width: 300, height: 600, fit: COVER) {
          width
          height
          src
        }
        fixed_contain: fixed(width: 300, height: 600, fit: CONTAIN) {
          width
          height
          src
        }
        fixed_fill: fixed(width: 300, height: 600, fit: FILL) {
          width
          height
          src
        }
        fixed_inside: fixed(width: 300, height: 600, fit: INSIDE) {
          width
          height
          src
        }
        fixed_outside: fixed(width: 300, height: 600, fit: OUTSIDE) {
          width
          height
          src
        }
      }
    }
  }
`
