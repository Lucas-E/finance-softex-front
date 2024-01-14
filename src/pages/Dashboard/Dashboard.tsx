import { Box, Flex, Image, useToast } from "@chakra-ui/react";
import StatCard from "../../components/StatCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import CreationMenuButton from "../../components/MenuButton/CreationMenuButton";
import { useQuery } from "react-query";
import api from "../../utils/services/api";
import {
	CustomerTableData,
	ProductTableData,
	TransactionQuantity,
	TransactionTableData,
} from "../../interfaces/tableData";
import ProfileButton from "../../components/ProfileButton/ProfileButton";

const Dashboard = () => {
	const toast = useToast();

	const fetchProducts = async () => {
		try {
			const { data } = await api.get("/products/getAll");
			return data.products;
		} catch (error) {
			toast({
				title: "Erro ao buscar produtos",
				description:
					"Ocorreu um erro ao buscar os produtos, tente novamente",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			throw error;
		}
	};

	const fetchtransactions = async () => {
		try {
			const { data } = await api.get("/transactions");
			return data.transactions;
		} catch (error) {
			toast({
				title: "Erro ao buscar vendas",
				description:
					"Ocorreu um erro ao buscar as vendas, tente novamente",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			throw error;
		}
	};

	const fetchCustomers = async () => {
		try {
			const { data } = await api.get("/customers");
			return data.data;
		} catch (error) {
			toast({
				title: "Erro ao buscar clientes",
				description:
					"Ocorreu um erro ao buscar os clientes, tente novamente",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			throw error;
		}
	};

	const fetchTransactionQuantity = async () => {
		try {
			const { data } = await api.get("/transactions/countAll");
			return data.count;
		} catch (error) {
			toast({
				title: "Erro ao buscar clientes",
				description:
					"Ocorreu um erro ao buscar os clientes, tente novamente",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			throw error;
		}
	};

	const fetchCustomerQuantity = async () => {
		try {
			const { data } = await api.get("/customers/countAll");
			return data.data;
		} catch (error) {
			toast({
				title: "Erro ao buscar clientes",
				description:
					"Ocorreu um erro ao buscar os clientes, tente novamente",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			throw error;
		}
	};

	const { data: products } = useQuery<ProductTableData[]>({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});

	const { data: transactions } = useQuery<TransactionTableData[]>({
		queryKey: ["transactions"],
		queryFn: fetchtransactions,
	});

	const { data: customers } = useQuery<CustomerTableData[]>({
		queryKey: ["customers"],
		queryFn: fetchCustomers,
	});

	const { data: transactionQuantity } = useQuery<TransactionQuantity>({
		queryKey: ["transactionQuantity"],
		queryFn: fetchTransactionQuantity,
	});

	const { data: customerQuantity } = useQuery({
		queryKey: ["customerQuantity"],
		queryFn: fetchCustomerQuantity,
	});

	return (
		<Box>
			<Flex align="center" justify="space-between" p={4} bg="pink.200">
				<Image src="/logo.png" alt="Logo" width={40} />
				<ProfileButton />
			</Flex>
			<Flex p={4} justifyContent="space-around" mt={20} mb={10}>
				<StatCard amount={customerQuantity as number} percentage={10} label={"Clientes"} />
				<StatCard amount={transactionQuantity as number} percentage={10} label={"Vendas"} />
			</Flex>
			<Flex p={4} justify="space-between" flexDirection={"column"}>
				<Box marginBottom={5}>
					<CreationMenuButton />
				</Box>
				<Tabs isFitted variant="soft-rounded" width={"100%"}>
					<TabList mb="1em">
						<Tab>Clientes</Tab>
						<Tab>Produtos</Tab>
						<Tab>Vendas</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<DashboardTable
								data={customers ?? []}
								headers={["name", "email", "phone"]}
							/>
						</TabPanel>
						<TabPanel>
							<DashboardTable
								data={products ?? []}
								headers={["name", "price", "description"]}
							/>
						</TabPanel>
						<TabPanel>
							<DashboardTable
								data={transactions ?? []}
								headers={[
									"customerName",
									"amount",
									"expectedAt",
									"productName",
								]}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	);
};

export default Dashboard;
