import { Box, Flex, Image } from "@chakra-ui/react";
import StatCard from "../../components/StatCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
				<StatCard amount={100} percentage={10} />
				<StatCard amount={100} percentage={10} />
			</Flex>
			<Flex p={4} justify="space-between">
				<Tabs isFitted variant="soft-rounded" width={'100%'}>
					<TabList mb="1em">
						<Tab>One</Tab>
						<Tab>Two</Tab>
                        <Tab>Three</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<p>one!</p>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
                        <TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Box>
	);
};

export default Dashboard;
