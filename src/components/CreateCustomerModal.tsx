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
import api from "../utils/services/api";
import { useCookies } from "react-cookie";
import { useQueryClient } from "react-query";
import { CustomerTableData } from "../interfaces/tableData";

export const CreateCustomerModal: React.FC<Omit<ModalProps, "children">> = (
  props,
) => {
  const { handleSubmit, register } = useForm<CustomerTableData>();
  const toast = useToast();
  const [cookies] = useCookies();

  const queryClient = useQueryClient();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await api.post("/customers", {
        ...values,
        userId: cookies.authData.user.id,
      });
      toast({
        title: "Sucesso",
        description: "Cliente cadastrado com sucesso",
        status: "success",
      });
      queryClient.invalidateQueries("customers");
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
        <ModalHeader>Cadastrar novo cliente</ModalHeader>
        <ModalCloseButton onClick={props.onClose} />
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input {...register("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email")} />
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
