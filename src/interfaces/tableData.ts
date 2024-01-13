export interface CustomerTableData {
    name: string,
    email:string,
    phone:string,
}

export interface ProductTableData{
    name:string,
    price:string,
    description:string,
}

export interface TransactionTableData{
    customerName:string,
    amount:number,
    executedAt:Date,
    productName:string
}
