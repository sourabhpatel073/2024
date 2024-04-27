

import React from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Tooltip,
  Button,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import { MdArchive } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { DeleteIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import ArchiveIcon from "./ArchiveIcon";
import { Link } from 'react-router-dom';


const EmailItem = ({ email, onStar, onSelect, onArchive, onDelete }) => {
  console.log("email",email)
  const handleStarClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the parent
    onStar(email.id);
  };

  const handleSelectClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the parent
    onSelect(email.id);
  };

  const handleArchiveClick = () => {
    onArchive(email.id);
  };

  const handleDeleteClick = () => {
    onDelete(email.id);
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <Box
      p={4}
      borderRadius="md"
      boxShadow="md"
      bg="white"
      cursor="pointer"
      _hover={{ bg: "gray.50" }}
      onClick={handleSelectClick}
      border={"1px solid black"}
    >
    <Link to={`/emails/${email.attributes.envelope.messageId}`}>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on other screens
        justify="space-around"
        align="center"
      >
        <Flex align="center" flex="1">
          <Tooltip label="Select" aria-label="Star" mr={{ base: 0, md: 10 }}>
            <Checkbox
              isChecked={email.selected}
              onChange={handleSelectClick}
              mr={{ base: 0, md: 10 }}
            />
          </Tooltip>
          <Tooltip label="Star" aria-label="Star" mr={{ base: 0, md: 10 }}>
            <Icon
              as={FaRegStar}
              color={email.starred ? "yellow.400" : "gray.400"}
              onClick={handleStarClick}
            />
          </Tooltip>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.600"
            mr={{ base: 0, md: 10 }}
            mb={{ base: 2, md: 0 }} // Add margin bottom only on mobile
          >
          </Text>
          <Text fontWeight="bold" flexShrink={0} mr={10}>
            {email.attributes.envelope.from.host}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.600"
            mr={{ base: 0, md: 10 }}
            mb={{ base: 2, md: 0 }} // Add margin bottom only on mobile
          >
             {truncateText(email.attributes.envelope.subject, 20)}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            mb={{ base: 2, md: 0 }} // Add margin bottom only on mobile
          >
            {truncateText(email.parts[0].body, 30)}
          </Text>
        </Flex>
      
        <Flex justify="flex-end"  marginRight={'20px'}>
          <Box
            colorScheme="blue"
            onClick={handleArchiveClick}
            mr={10}
            mb={{ base: 2, md: 0 }} // Add margin bottom only on mobile
          >
            <Icon as={MdArchive} />
          </Box>
          <Box colorScheme="red" onClick={handleDeleteClick}>
            <Icon as={AiOutlineDelete} />
          </Box>
        </Flex>
      </Flex>
      </Link>
    </Box>
  );
};

export default EmailItem;
