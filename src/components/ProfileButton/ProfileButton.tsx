import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const ProfileButton = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FiLogOut />} variant="outline">
                Logout
            </MenuButton>
            <MenuList>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileButton;
