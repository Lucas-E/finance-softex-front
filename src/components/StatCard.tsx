import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	Box,
} from "@chakra-ui/react";

interface props {
	amount: number;
	percentage: number;
	label: string;
}
const StatCard = ({ amount, percentage, label }: props) => {
	return (
		<>
			<Box width={"40%"}>
				<Stat p={5} border={"1px solid gray"} borderRadius={10}>
					<StatLabel>{label}</StatLabel>
					<StatNumber>{amount}</StatNumber>
					<StatHelpText>
						<StatArrow type="increase" />
						{percentage}
					</StatHelpText>
				</Stat>
			</Box>
		</>
	);
};

export default StatCard;
