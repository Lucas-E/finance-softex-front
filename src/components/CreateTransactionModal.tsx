import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Button,
  useToast,
  Flex,
  Select,
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import api from "../utils/services/api";
import { useCookies } from "react-cookie";
import { useQuery, useQueryClient } from "react-query";
import { CustomerTableData } from "../interfaces/tableData";
import { Product } from "../interfaces/Product";
import { Transaction } from "../interfaces/Transaction";
import MoneyInput from "./MoneyInput";

export const CreateTransactionModal: React.FC<Omit<ModalProps, "children">> = (
  props,
) => {
  const { handleSubmit, register, setValue } = useForm<Transaction>();
  const toast = useToast();
  const [cookies] = useCookies();

  const queryClient = useQueryClient();

  const fetchCustomers = async () => {
    try {
      const { data } = await api.get("/customers");
      return data.data;
    } catch (error) {
      toast({
        title: "Erro ao buscar clientes",
        description: "Ocorreu um erro ao buscar os clientes, tente novamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      throw error;
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products/getAll");
      return data.products;
    } catch (error) {
      toast({
        title: "Erro ao buscar produtos",
        description: "Ocorreu um erro ao buscar os produtos, tente novamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      throw error;
    }
  };

  const { data: customers } = useQuery<CustomerTableData[]>({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });

  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const onSubmit = handleSubmit(async (values) => {
    console.log(values, "values");
    try {
      await api.post("/transactions", {
        ...values,
        customer_id: +values.customer_id,
        product_id: +values.product_id,
        user_id: cookies.authData.user.id,
      });
      toast({
        title: "Sucesso",
        description: "Cliente cadastrado com sucesso",
        status: "success",
      });
      queryClient.invalidateQueries("transactions");
      queryClient.invalidateQueries("transactionQuantity")
      props.onClose?.();
    } catch (error) {
      toast({
        title: "Erro ao cadastrar cliente",
        description: "Verifique os dados e tente novamente.",
      });
    }
  });

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar nova movimentação</ModalHeader>
        <ModalCloseButton onClick={props.onClose} />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Tipo</FormLabel>
              <Select {...register("type")}>
                <option value="IN">Entrada</option>
                <option value="OUT">Saída</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Valor</FormLabel>
              <MoneyInput
                onMoneyChange={(money) => {
                  setValue("amount", money);
                }}
                placeholder="R$ 0,00"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cliente</FormLabel>
              <Select {...register("customer_id")}>
                {customers?.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name} - {customer.email}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Produto</FormLabel>
              <Select {...register("product_id")}>
                {products?.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Flex mt={5} mb={3}>
              <Button colorScheme="blue" mr={3} type="submit">
                Enviar
              </Button>
              <Button variant="ghost" onClick={props.onClose}>
                Cancelar
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
