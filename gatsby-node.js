const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      invoicesAPI {
        invoices {
          billFromCity
          billFromCountry
          billFromPostCode
          billFromStreet
          billToCity
          billToCountry
          billToEmail
          billToName
          billToPostCode
          billToStreet
          bussinessId
          id
          date
          description
          items {
            id
            name
            price
            qty
          }
          paymentTerm {
            days
            id
          }
          status
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { invoices } = results.data.invoicesAPI

  const detailTemplate = path.resolve(`src/templates/detail.tsx`)
  const editTemplate = path.resolve(`src/templates/edit.tsx`)

  invoices.forEach((invoice) => {
    createPage({
      path: `/invoices/${invoice.bussinessId}`,
      component: detailTemplate,
      context: invoice,
    })

    createPage({
      path: `/invoices/${invoice.bussinessId}/edit`,
      component: editTemplate,
      context: invoice,
    })
  })
}
