import { Box, Flex, Image } from "@chakra-ui/react";
import StatCard from "../../components/StatCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import { useState } from "react";

const Dashboard = () => {
	const [tab, setTab] = useState(0)

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
			<Flex p={4} justifyContent="space-around" mt={20} mb={10}>
				<StatCard amount={100} percentage={10} label={"Clientes"} />
				<StatCard amount={100} percentage={10} label={"Vendas"} />
			</Flex>
			<Flex p={4} justify="space-between">
				<Tabs isFitted variant="soft-rounded" width={"100%"} onChange={(index) => {
                    setTab(index)
                }}>
					<TabList mb="1em">
						<Tab>Clientes</Tab>
						<Tab>Produtos</Tab>
						<Tab>Vendas</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<DashboardTable data={null} headers={['name', 'email', 'phone']} />
						</TabPanel>
						<TabPanel>
							<DashboardTable data={null} headers={['name', 'price', 'description']}/>
						</TabPanel>
						<TabPanel>
							<DashboardTable data={null} headers={['customerName', 'amount', 'executedAt', 'productName']}/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	);
};

export default Dashboard;
