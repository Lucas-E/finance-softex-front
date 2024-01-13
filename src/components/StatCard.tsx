import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
    Box
} from "@chakra-ui/react";
const StatCard = ({
	amount,
	percentage,
}: {
	amount: number;
	percentage: number;
}) => {
	return (
		<>
			<Box width={'40%'}>
				<Stat p={5} border={"1px solid gray"} borderRadius={10}>
					<StatLabel>Sent</StatLabel>
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
