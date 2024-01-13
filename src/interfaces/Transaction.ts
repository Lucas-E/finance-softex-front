export interface Transaction {
  amount: number;
  type: "IN" | "OUT";
  user_id: number;
  customer_id: number;
  product_id: number;
}
