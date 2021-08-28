import { gql } from '@apollo/client'

export const DELETE_INVOICE = gql`
  mutation deleteInvoice($id: Int!) {
    deleteInvoice(id: $id) {
      id
    }
  }
`
