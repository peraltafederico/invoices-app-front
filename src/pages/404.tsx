import * as React from 'react'
import { PageProps, Link } from 'gatsby'

import Layout from '../components/layout'
import NoContent from '../components/noContent'
import Text from '../components/text'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <NoContent title="We couldn't find what you're looking for :(">
        <Link to="/invoices/">
          <Text as="span" variant="body2" isMuted>
            Click here to go to the main list
          </Text>
        </Link>
      </NoContent>
    </Layout>
  )
}

export default NotFoundPage
