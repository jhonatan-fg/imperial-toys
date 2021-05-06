import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/postLink"
import {graphql} from 'gatsby'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.css';
import fig1 from "../images/fig1.jpeg"
import fig2 from "../images/fig2.jpeg"
import fig3 from "../images/fig3.jpeg"
import fig4 from "../images/fig4.jpeg"
import fig5 from "../images/fig5.jpeg"
import fig6 from "../images/fig6.jpeg"
import fig7 from "../images/fig7.jpeg"
import fig8 from "../images/fig8.jpeg"
import fig9 from "../images/fig9.jpeg"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ 
      maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>



    <h2>Arrivals</h2>
<div className="cards">

    <div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig1} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 1</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig2} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 2</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig3} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 3</h5>
    </div>
  </div>
</div>
</div>



<div style={{ 
      maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <h2>Preventas</h2>
    <div className="cards">
    <div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig4} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 4</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig5} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 5</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig6} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 6</h5>
    </div>
  </div>
</div>
</div>



<div style={{ 
      maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <h2>Destacados</h2>
    <div className="cards">
    <div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig7} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 7</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig8} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 8</h5>
    </div>
  </div>
</div>

<div className="card1">
    <div class="card" style={{width: `18rem`}}>
    <img class="card-img-top" src={fig9} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Figura 9</h5>
    </div>
  </div>
</div>
</div>

    {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
