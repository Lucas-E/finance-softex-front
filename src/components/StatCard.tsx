import { Stat, StatLabel, StatNumber, Box, Text } from "@chakra-ui/react";

interface props {
	amount: number;
	percentage: number;
	label: string;
}
const StatCard = ({ amount, label }: props) => {
	return (
		<>
			<Box
				width={"40%"}
				bgGradient="linear(to-br, #e908a0, #c9a21c)"
				borderRadius={10}
			>
				<Stat p={5} borderRadius={10}>
					<StatLabel>
						<Text
							fontSize={"5xl"}
							fontWeight={"bold"}
							color={"white"}
						>
							{label}
						</Text>
					</StatLabel>
					<StatNumber><Text color={'white'}>{amount || 0}</Text></StatNumber>
				</Stat>
			</Box>
		</>
	);
};

export default StatCard;
