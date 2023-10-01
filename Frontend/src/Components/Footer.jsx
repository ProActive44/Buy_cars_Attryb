import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
    
      <Flex my={"5"}>
        <Flex w="40%" className="flex-col gap-4">
          <Text className="font-extrabold text-4xl text-left"> BUYC CORP </Text>
          <Text className="text-left font-semibold">
            It's a never ending battle of making your cars better and also
            trying to be better yourself.
          </Text>
          <div>
            <Flex gap={"5"}>
              <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Flex>
          </div>
        </Flex>
        <Box flex={"1"}>
          <Flex justify={"space-around"} >
            <Flex className="flex-col text-left gap-1">
              <Text fontSize={{ base: "lg", md: "xl" }} my={'2'} fontWeight={"bold"}>
                Account
              </Text>
              <Link>Profile</Link>
              <Link>Settings</Link>
              <Link>Billing</Link>
              <Link>Notifications</Link>
            </Flex>
            <Flex className="flex-col text-left gap-1">
              <Text fontSize={{ base: "lg", md: "xl" }} my={'2'} fontWeight={"bold"}>
                About
              </Text>
              <Link>Services</Link>
              <Link>Pricing</Link>
              <Link>Contact</Link>
              <Link>Careers</Link>
            </Flex>
            <Flex className="flex-col text-left gap-1">
              <Text fontSize={{ base: "lg", md: "xl" }} my={'2'} fontWeight={"bold"} >
                Company
              </Text>
              <Link>Community</Link>
              <Link>Help center</Link>
              <Link>Support</Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Divider />

      <div className="container mx-auto text-center font-semibold my-5">
        <p>&copy; {new Date().getFullYear()} SellCars. All rights reserved.</p>
        <div className="mt-2">
          <Link className="text-gray-300 hover:text-gray-400 mr-4">
            Privacy Policy
          </Link>
          <Link className="text-gray-300 hover:text-gray-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
