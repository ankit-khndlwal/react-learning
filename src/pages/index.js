import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete course about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <br></br>
        <a>Watch the video</a>
        <div className="Logos">
          <StaticImage src="../images/logo-figma.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-framer.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-invision.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-react.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-sketch.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-studio.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          <StaticImage src="../images/logo-swift.png" alt="Figma Logo" placeholder="blurred" layout="fixed" width={40} />
          
        </div>
        <svg width="100%" height="150px" viewBox="0 0 2687 429" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="white">
          <animate repeatCount="indefinite" fill="freeze" dur="5s" attributeName="d" values="M0 87.4039C0 87.4039 412.868 -0.937344 681 0.00752584C941.968 0.92715 1343.5 87.4039 1343.5 87.4039C1343.5 87.4039 1758.42 205.337 2030.5 203.267C2290.84 201.286 2687 87.4039 2687 87.4039V428H0V87.4039Z;
      
          M0 1.63334C0 1.63334 345.868 0.44906 614 1.63334C874.968 2.78598 1343.5 1.63334 1343.5 1.63334C1343.5 1.63334 1781.92 4.22796 2054 1.6334C2314.34 -0.849237 2687 1.63334 2687 1.63334V428.53H0V1.63334Z;

          M0 92.8043C0 92.8043 352.368 216.338 620.5 217.268C881.468 218.173 1343.5 92.8043 1343.5 92.8043C1343.5 92.8043 1779.92 2.06698 2052 0.0297581C2312.34 -1.91959 2687 92.8043 2687 92.8043V428H0V92.8043Z;

          M0 87.4039C0 87.4039 412.868 -0.937344 681 0.00752584C941.968 0.92715 1343.5 87.4039 1343.5 87.4039C1343.5 87.4039 1758.42 205.337 2030.5 203.267C2290.84 201.286 2687 87.4039 2687 87.4039V428H0V87.4039Z">
          </animate>
        </path>
      </svg>
      </div> 
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage



