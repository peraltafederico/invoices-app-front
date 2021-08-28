import { gql } from '@apollo/client'

export const EDIT_INVOICE = gql`
  mutation updateInvoice(
    $id: Int!
    $streetAddress: String
    $city: String
    $postCode: String
    $country: String
    $clientName: String
    $clientEmail: String
    $clientStreetAddress: String
    $clientCity: String
    $clientPostCode: String
    $clientCountry: String
    $projectDescription: String
    $invoiceDate: String
    $paymentTems: Int
    $status: String
  ) {
    updateInvoice(
      id: $id
      billFromStreet: $streetAddress
      billFromCity: $city
      billFromPostCode: $postCode
      billFromCountry: $country
      billToName: $clientName
      billToEmail: $clientEmail
      billToStreet: $clientStreetAddress
      billToCity: $clientCity
      billToPostCode: $clientPostCode
      billToCountry: $clientCountry
      description: $projectDescription
      date: $invoiceDate
      paymentTermId: $paymentTems
      status: $status
    ) {
      id
    }
  }
`
