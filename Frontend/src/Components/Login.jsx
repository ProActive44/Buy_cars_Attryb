import {
  FormLabel,
  Input,
  Heading,
  Checkbox,
  Button,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box,
  Link,
  Text,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginNewUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const Login = ({ flag, goToSignup, loginSuccess, wrongDetails }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    dispatch(loginNewUser(user, navigate, loginSuccess, wrongDetails));
  };

  return (
    <Box className={`text-center ${flag ? "slide-out" : ""}`}>
      <Box
        className="bg-white text-black font-sans rounded-2xl"
        w={{ base: "90%", sm: "80%", md: "60%", lg: "40%" }}
        m="10px auto"
        p={{ base: "25px" }}
        bg={null}
      >
        <Heading fontWeight="600" fontSize="32px">
          Sign in to your Account
        </Heading>
        <br />
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel mb={"5px"}> Email </FormLabel>
            <Input
              mb={"10px"}
              type="email"
              placeholder="Email"
              focusBorderColor="blue.600"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel mb={"5px"}> Password </FormLabel>
            <InputGroup size="md">
              <Input
                type={show ? "text" : "password"}
                placeholder="Password"
                focusBorderColor="blue.600"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  colorScheme="blue"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br />
          <br />
          <FormControl>
            <Box
              className="text-left"
              mb={"10px"}
              fontSize={{ base: "sm", sm: "md" }}
            >
              <div>
                <Checkbox
                  colorScheme="blue"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  Remember Me
                </Checkbox>
              </div>

              <div className="my-1">
                <Link>Forgot your password?</Link>
              </div>
            </Box>
          </FormControl>

          <Box className="text-center" my={"10px"}>
            <Text className="font-sans text-sm text-left" color={"grey"}>
              I accept the BUYC Corp's
              <Link className="hover_text_color"> Terms of Use</Link> and
              acknowledge BUYC Corp will use my information in accordance with
              its
              <Link className="hover_text_color"> Privacy Policy.</Link>
            </Text>
          </Box>
          <br />
          <ButtonGroup variant="outline" width="100%">
            <Button
              type="submit"
              className="text-center"
              colorScheme="blue"
              m={"auto"}
            >
              Sign In
            </Button>
          </ButtonGroup>

          <br />
          <br />
          <ButtonGroup width="100%">
            <Button
              className="btn"
              colorScheme="blue"
              m={"auto"}
              onClick={goToSignup}
            >
              Create Account
            </Button>
          </ButtonGroup>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
