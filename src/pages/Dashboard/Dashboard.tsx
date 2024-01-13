import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
} from "@chakra-ui/react";

const Dashboard = () => {
	return (
		<Box>
			<Flex align="center" justify="space-between" p={4} bg="pink.200">
				<Image src="/logo.png" alt="Logo" w={100} h={50} />
				<Image
					src="/avatar.png"
					alt="Avatar"
					w={50}
					h={50}
					borderRadius="full"
				/>
			</Flex>
			<Flex p={4} justifyContent="space-between">
					<Stat>
						<StatLabel>Sent</StatLabel>
						<StatNumber>345,670</StatNumber>
						<StatHelpText>
							<StatArrow type="increase" />
							23.36%
						</StatHelpText>
					</Stat>

					<Stat>
						<StatLabel>Clicked</StatLabel>
						<StatNumber>45</StatNumber>
						<StatHelpText>
							<StatArrow type="decrease" />
							9.05%
						</StatHelpText>
					</Stat>
			</Flex>
			<Flex p={4} justify="space-between">
				<Box bg="purple.200" p={4} borderRadius="md" flexBasis="30%">
					<Text fontSize="xl" fontWeight="bold">
						Clientes
					</Text>
					{/* Renderizar itens para clientes */}
				</Box>
				<Box bg="orange.200" p={4} borderRadius="md" flexBasis="30%">
					<Text fontSize="xl" fontWeight="bold">
						Produtos
					</Text>
					{/* Renderizar itens para produtos */}
				</Box>
				<Box bg="pink.200" p={4} borderRadius="md" flexBasis="30%">
					<Text fontSize="xl" fontWeight="bold">
						Vendas
					</Text>
					{/* Renderizar itens para vendas */}
				</Box>
			</Flex>
		</Box>
	);
};

export default Dashboard;
