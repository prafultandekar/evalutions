import React from "react";
import{ Button,Modal,ModalBody, useDisclosure} from '@chakra-ui/react';
import{ Input,Select,RadioGroup,Radio} from '@chakra-ui/react';
import { useRef } from "react";

const AddProduct = (e) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} >Add New Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title"ref={initialRef} placeholder="Title"/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Rs.Price"/>
          <Button data-cy="add-product-submit-button"onClick={onClose}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;