import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  Button,
  Input,
  useToast,
  Flex,
} from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Product } from "../interfaces/Product";
import api from "../utils/services/api";
import MoneyInput from "./MoneyInput";
import { useCookies } from "react-cookie";
import { useQueryClient } from "react-query";

export const CreateProductModal: React.FC<Omit<ModalProps, "children">> = (
  props,
) => {
  const { handleSubmit, register, setValue } = useForm<Product>();
  const toast = useToast();
  const [cookies] = useCookies();

  const queryClient = useQueryClient();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await api.post("/products", {
        ...values,
        user: {
          id: cookies.authData.user.id,
        },
      });
      toast({
        title: "Sucesso",
        description: "Produto cadastrado com sucesso",
        status: "success",
      });
      queryClient.invalidateQueries("products");
      props.onClose?.();
    } catch (error) {
      toast({
        title: "Erro ao cadastrar produto",
        description: "Verifique os dados e tente novamente.",
      });
    }
  });

  const handlePriceChange = (numeric: number) => {
    setValue("price", numeric / 100);
  };

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar novo produto</ModalHeader>
        <ModalCloseButton onClick={props.onClose} />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input {...register("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>Preço</FormLabel>
              <MoneyInput onMoneyChange={handlePriceChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Input {...register("description")} />
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
