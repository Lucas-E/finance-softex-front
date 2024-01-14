export interface CustomerTableData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ProductTableData {
  id: number;
  name: string;
  price: string;
  description: string;
}

export interface TransactionTableData {
  id: number;
  customerName: string;
  amount: number;
  executedAt: Date;
  productName: string;
}

export interface TransactionQuantity{
  ok: string,
  count: number
}

export interface CustomerQuantity{
  message:string,
  data:any
}
