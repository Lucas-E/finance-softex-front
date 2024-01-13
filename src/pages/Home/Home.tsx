import { Box, Flex, FormControl, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
	const [isSubscribing, setIsSubscribing] = useState(false);

	function handleSetSubscribing() {
		setIsSubscribing((prev) => !prev);
	}

	return (
		<Flex height="100vh" bg="blue.500" justifyContent={"space-around"}>
			<Flex width={"100%"} flexGrow={1}>
				<Flex
					p={20}
					bg="white"
					width={"60%"}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Text fontWeight={"bold"} fontSize={"5xl"}>
						Bem vindo!
					</Text>
					<Box width={"70%"}>
						<form>
							<FormControl>
								<Input
									type="email"
									placeholder="Digite seu email"
									variant={"flushed"}
									padding={10}
								/>
							</FormControl>
							<FormControl mt={4}>
								<Input
									type="password"
									placeholder="Digite sua senha"
									padding={10}
									variant={"flushed"}
								/>
							</FormControl>
							<Button
								mt={10}
								colorScheme="green"
								width={"100%"}
								borderRadius={"10"}
							>
								Entrar
							</Button>
						</form>
					</Box>
				</Flex>
				{isSubscribing ? (
					<>
						<Flex
							width={"40%"}
							bgGradient="linear(to-r, green.400, pink.500)"
							alignItems={"center"}
							justifyContent={"center"}
							flexDirection={"column"}
							p={20}
						>
							<Flex>
								<Text
									fontWeight="bold"
									color={"white"}
									fontSize={"4xl"}
									textAlign={"center"}
                                    mb={'10'}
								>
									Informe seus dados e comece a usar!
								</Text>
							</Flex>
							<Box width={"100%"}>
								<form>
									<FormControl>
										<Input
											type="text"
											placeholder="Digite seu nome"
											padding={10}
											_placeholder={{ color: "white" }}
											color={"white"}
										/>
									</FormControl>
									<FormControl mt={4}>
										<Input
											type="email"
											placeholder="Digite seu email"
											padding={10}
											_placeholder={{ color: "white" }}
											color={"white"}
										/>
									</FormControl>
									<FormControl mt={4}>
										<Input
											type="password"
											placeholder="Digite sua senha"
											padding={10}
											_placeholder={{ color: "white" }}
											color={"white"}
										/>
									</FormControl>
									<Button
										mt={10}
										colorScheme="green"
										width={"100%"}
										borderRadius={"10"}
									>
										Cadastrar
									</Button>
								</form>
							</Box>
						</Flex>
					</>
				) : (
					<Flex
						width={"40%"}
						bgGradient="linear(to-r, green.400, pink.500)"
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
						p={20}
					>
						<Flex>
							<Text
								fontWeight="bold"
								color={"white"}
								fontSize={"4xl"}
							>
								Bem Vindo!
							</Text>
							<Text
								fontWeight="bold"
								color={"orange.400"}
								fontSize={"4xl"}
							>
								É novo por aqui?
							</Text>
						</Flex>
						<Text
							color={"white"}
							fontWeight={"bold"}
							fontSize={"xl"}
							textAlign={"center"}
							mt={15}
						>
							Se inscreva de forma gratuita e experimente um novo
							jeito de gerenciar suas finanças
						</Text>
						<Button
							mt={"40"}
							colorScheme="orange"
							width={"100%"}
							borderRadius={"10"}
							variant={"solid"}
							onClick={handleSetSubscribing}
						>
							Inscreva-se
						</Button>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};

export default Home;
