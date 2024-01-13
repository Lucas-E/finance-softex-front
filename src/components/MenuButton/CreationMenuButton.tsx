import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";
import { CreateProductModal } from "../CreateProductModal";
import { useState } from "react";
import { CreateCustomerModal } from "../CreateCustomerModal";
import { CreateTransactionModal } from "../CreateTransactionModal";

const CreationMenuButton = () => {
  const [isCreateProductModalOpen, setIsCreateProductModalOpen] =
    useState(false);

  const [isCreateCustomerModalOpen, setIsCreateCustomerModalOpen] =
    useState(false);

  const [isCreateTransactionModalOpen, setIsCreateTransactionModalOpen] =
    useState(false);

  const handleCreateProductModalOpen = () => setIsCreateProductModalOpen(true);
  const handleCreateProductModalClose = () =>
    setIsCreateProductModalOpen(false);

  const handleCreateCustomerModalOpen = () =>
    setIsCreateCustomerModalOpen(true);
  const handleCreateCustomerModalClose = () =>
    setIsCreateCustomerModalOpen(false);
  const handleCreateTransactionModalOpen = () =>
    setIsCreateTransactionModalOpen(true);
  const handleCreateTransactionModalClose = () =>
    setIsCreateTransactionModalOpen(false);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiPlusCircle />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleCreateCustomerModalOpen}>
          Criar Cliente
        </MenuItem>

        <MenuItem onClick={handleCreateProductModalOpen}>
          Criar Produto
        </MenuItem>
        <MenuItem onClick={handleCreateTransactionModalOpen}>
          Criar Venda
        </MenuItem>
      </MenuList>
      <CreateProductModal
        onClose={handleCreateProductModalClose}
        isOpen={isCreateProductModalOpen}
      />
      <CreateCustomerModal
        onClose={handleCreateCustomerModalClose}
        isOpen={isCreateCustomerModalOpen}
      />
      <CreateTransactionModal
        onClose={handleCreateTransactionModalClose}
        isOpen={isCreateTransactionModalOpen}
      />
    </Menu>
  );
};

export default CreationMenuButton;
