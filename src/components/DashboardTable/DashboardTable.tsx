import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { CustomerTableData,ProductTableData,TransactionTableData } from "../../interfaces/tableData";

interface TableProps {
	data?: CustomerTableData[]|ProductTableData[]|TransactionTableData[]|null;
    headers: string[]
}

const DashboardTable = ({ data, headers }: TableProps) => {
	return (
		<Box borderRadius="md" overflow="hidden">
			<Table variant="simple">
				<Thead>
					<Tr>
						{headers?.map((header, index) => (
                            <Th key={index}>{header}</Th>
                        ))}
					</Tr>
				</Thead>
				<Tbody>
					{data?.map((item, index) => (
						<Tr key={index} borderRadius="md">
							{headers?.map((header, index) => (
                                <Td key={index}>{(item as any)[header]}</Td>
                            ))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default DashboardTable;
