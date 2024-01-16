import {
  Box,
  Flex,
  FormControl,
  Input,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import api from "../../utils/services/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [loginUsernameInput, setLoginUsernameInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  const [registerNameInput, setRegisterNameInput] = useState("");
  const [registerUsernameInput, setRegisterUsernameInput] = useState("");
  const [registerPasswordInput, setRegisterPasswordInput] = useState("");
  const [, setCookie] = useCookies(["authData"]);

  const navigate = useNavigate();

  const toast = useToast();

  function handleSetSubscribing() {
    setIsSubscribing((prev) => !prev);
  }

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/auth/login", {
        email: loginUsernameInput,
        password: loginPasswordInput,
      });
      setTimeout(() => {
        setCookie("authData", {
          token: data.token,
          user: data.user,
        });
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Ocorreu um erro ao fazer login, tente novamente",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleSubscribe = async () => {
    try {
      await api.post("/users", {
        name: registerNameInput,
        email: registerUsernameInput,
        password: registerPasswordInput,
      });

      const { data } = await api.post("/auth/login", {
        email: registerUsernameInput,
        password: registerPasswordInput,
      });

      setCookie("authData", {
        token: data.token,
        user: data.user,
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Erro ao cadastrar",
        description: "Ocorreu um erro ao realizar cadastro, tente novamente",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh" bg="blue.500" justifyContent={"space-around"}>
      <Flex width={"100%"} flexGrow={1} direction={{base: 'column', md:'row'}}>
        <Flex
          p={20}
          bg="white"
          width={{
            base: '100%',
            md: "60%"
          }}
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
                  onChange={(e) => setLoginUsernameInput(e.target.value)}
                  value={loginUsernameInput}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  padding={10}
                  variant={"flushed"}
                  onChange={(e) => setLoginPasswordInput(e.target.value)}
                />
              </FormControl>
              <Button
                mt={10}
                colorScheme="green"
                width={"100%"}
                borderRadius={"10"}
                onClick={handleLogin}
              >
                Entrar
              </Button>
            </form>
          </Box>
        </Flex>
        {isSubscribing ? (
          <>
            <Flex
              width={{
                base: '100%',
                md: "40%"
              }}
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
                  mb={"10"}
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
                      onChange={(e) => setRegisterNameInput(e.target.value)}
                      value={registerNameInput}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <Input
                      type="email"
                      placeholder="Digite seu email"
                      padding={10}
                      _placeholder={{ color: "white" }}
                      color={"white"}
                      onChange={(e) => setRegisterUsernameInput(e.target.value)}
                      value={registerUsernameInput}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      padding={10}
                      _placeholder={{ color: "white" }}
                      color={"white"}
                      onChange={(e) => setRegisterPasswordInput(e.target.value)}
                      value={registerPasswordInput}
                    />
                  </FormControl>
                  <Button
                    mt={10}
                    colorScheme="green"
                    width={"100%"}
                    borderRadius={"10"}
                    onClick={handleSubscribe}
                  >
                    Cadastrar
                  </Button>
                </form>
              </Box>
            </Flex>
          </>
        ) : (
          <Flex
            width={{
              base: '100%',
              md: "40%"
            }}
            bgGradient="linear(to-r, green.400, pink.500)"
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            p={20}
          >
            <Flex>
              <Text fontWeight="bold" color={"white"} fontSize={"4xl"}>
                Bem Vindo!
              </Text>
              <Text fontWeight="bold" color={"orange.400"} fontSize={"4xl"}>
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
              Se inscreva de forma gratuita e experimente um novo jeito de
              gerenciar suas finanças
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
