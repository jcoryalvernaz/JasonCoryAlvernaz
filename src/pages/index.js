import FlashMessage from 'components/Homepage/FlashMessage'
import Layout from 'components/layout'
import PageHeader from 'components/page-header'
import ParagraphStyles from 'styles/ParagraphStyles'
import React from 'react'
import SEO from 'components/seo'
import { SectionStyles } from 'styles'
import Social from 'components/social'
import styled from 'styled-components'
import {
  Link,
  graphql,
  useStaticQuery,
} from 'gatsby'

const ConsultWrapper = styled.div`
  display: grid;
  justify-self: center;
  justify-items: center;
  h2 {
    margin-bottom: 0;
    font-size: 2.5rem;
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    padding-bottom: 0.5rem;
  }
`

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query ValueItemsQuery {
      allValueItemsJson {
        nodes {
          id
          name
          image {
            publicURL
          }
          description
        }
      }
    }
  `)

  const values = [...data.allValueItemsJson.nodes]

  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Home" />
      <PageHeader>Jason Cory Alvernaz</PageHeader>
      <FlashMessage />
      <ParagraphStyles>
        I love building fast, responsive, modern websites and helping others
        grow in their careers. Whether you need a website for your growing
        business or looking to learn web development, you&apos;ve come to the right
        place. Take a look at <Link to="/projects">my work</Link>,{' '}
        <Link to="/blog">read my blog</Link>, or{' '}
        <Link to="/contact">contact me</Link> for more information!
      </ParagraphStyles>
      <SectionStyles className="about">
        <div className="inner">
          <h2>About Me</h2>
          <br />
          <ParagraphStyles>
            I am a web developer based out of Reno, NV, with a passion for
            building beautiful sites for my clients. As a graduate from the
            University of Nevada, Reno with Bachelor of Science degrees in both
            Business Management and Information Systems, I understand the
            technical and business needs for the websites I create and the
            businesses for which I work. So, reach out and let me put my
            expertise to work for your business!
          </ParagraphStyles>
        </div>
      </SectionStyles>
      <ConsultWrapper>
        <h2>Free Consultations</h2>
        <br />
        <ParagraphStyles>
          Reach out for a completely free discussion on how we can improve the
          reach and impact of your brand by creating a stunning modern website
          for your business.
        </ParagraphStyles>
      </ConsultWrapper>
      <SectionStyles className="value">
        <div className="inner">
          <ul className="values">
            {values.map(value => {
              return (
                <li key={value.id}>
                  <object
                    className="icon"
                    data={value.image.publicURL}
                    type="image/svg+xml"
                  >
                    {value.name}
                  </object>
                  <h2>{value.name}</h2>
                  <p>{value.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </SectionStyles>
      <Social />
    </Layout>
  )
}

export default IndexPage
