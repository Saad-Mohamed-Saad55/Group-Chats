import {
  Avatar,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          onClick={onOpen}
          icon={<AiFillEye />}
        />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" fontSize="40px" justifyContent="center">
            {user.firstname + " " + user.lastname}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              borderRadius="full"
              boxSize="150px"
              size="2xl"
              src={user.pic}
              name={user.firstname + " " + user.lastname}
              bg="teal.500"
              mb="20px"
            />
            <Text fontSize={{ base: "20px", md: "25px" }}>
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;