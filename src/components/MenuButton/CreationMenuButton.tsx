import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button
} from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";

const CreationMenuButton = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BiPlusCircle />}>
				Actions
			</MenuButton>
			<MenuList>
				<MenuItem>Criar Cliente</MenuItem>
				<MenuItem>Criar Produto</MenuItem>
				<MenuItem>Criar Venda</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default CreationMenuButton;
