import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { usePageContext } from '../context/pageContext'

interface Props {
  description?: string
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any
}

const SEO: React.FC<Props> = ({ description, meta = {}, title }) => {
  const {
    location: { pathname },
  } = usePageContext()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/site-image.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
