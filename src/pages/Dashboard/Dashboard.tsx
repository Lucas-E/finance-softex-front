import { Box, Flex, Image } from "@chakra-ui/react";
import StatCard from "../../components/StatCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import { generateFakeData } from "../../utils/functions/generateFakeDataTable";
import CreationMenuButton from "../../components/MenuButton/CreationMenuButton";
import ProfileButton from "../../components/ProfileButton/ProfileButton";

const Dashboard = () => {
	const customerData = generateFakeData(10);
	return (
		<Box>
			<Flex align="center" justify="space-between" p={4} bg="pink.200">
				<Image src="/logo.png" alt="Logo" width={40} />
				<ProfileButton/>
			</Flex>
			<Flex p={4} alignItems={'center'} justifyContent="space-around" mt={20} mb={10} direction={{ base: 'column', md: 'row' }}>
				<StatCard amount={100} percentage={10} label={"Clientes"} />
				<StatCard amount={100} percentage={10} label={"Vendas"} />
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
								data={customerData}
								headers={["name", "email", "phone"]}
							/>
						</TabPanel>
						<TabPanel>
							<DashboardTable
								data={null}
								headers={["name", "price", "description"]}
							/>
						</TabPanel>
						<TabPanel>
							<DashboardTable
								data={null}
								headers={[
									"customerName",
									"amount",
									"executedAt",
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
