import { gql } from '@apollo/client'

export const UPDATE_STATE_INVOICE = gql`
  mutation updateStatusInvoice($id: Int!, $status: String) {
    updateStatusInvoice(id: $id, status: $status) {
      id
      status
    }
  }
`
