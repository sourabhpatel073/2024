import React from "react";
import { Button } from "@chakra-ui/react";

const ComposeButton = ({ onClick }) => {
  return (
    <Button
      colorScheme="blue"
      onClick={onClick}
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
      size={{ base: "sm", md: "md", lg: "lg" }}
      w={{ base: "100%", md: "auto" }}
    >
      Compose
    </Button>
  );
};

export default ComposeButton;

