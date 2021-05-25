export type InvoiceStatus = 'paid' | 'pending' | 'draft'
export type InvoiceFormMode = 'create' | 'edit'

export interface Invoice {
  id: number
  bussinessId: string
  billFromStreet: string
  billFromCity: string
  billFromPostCode: string
  billFromCountry: string
  billToName: string
  billToEmail: string
  billToStreet: string
  billToCity: string
  billToPostCode: string
  billToCountry: string
  description: string
  status: InvoiceStatus
  date: string
  paymentTermId: number
  items: Item[]
}

export interface Item {
  id: number
  name: string
  qty: number
  price: string
}
