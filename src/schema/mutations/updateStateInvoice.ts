import { gql } from '@apollo/client'

export const UPDATE_STATE_INVOICE = gql`
  mutation updateInvoice($id: Int!, $status: String) {
    updateInvoice(id: $id, status: $status) {
      id
      status
    }
  }
`
