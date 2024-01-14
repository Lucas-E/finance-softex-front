import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/logout");
    }
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FiLogOut />} variant="outline">
                Logout
            </MenuButton>
            <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileButton;
