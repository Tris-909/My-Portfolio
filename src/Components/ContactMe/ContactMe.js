import React, { useState } from "react";
import Loader from "../Common/Loader/Loader";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const ContactFormContainer = styled.div`
  width: 90%;
  height: 600px;
  border-radius: 15px;
  margin: 0% 5% 5% 5%;
  background-color: #f7faff;
  font-family: "Nunito Sans", sans-serif;

  @media (max-width: 560px) {
    width: 90%;
    border-radius: 0px;
  }
`;

const MarginContainer = styled.div`
  width: 90%;
  height: 90%;
  position: relative;
  top: 5%;
  left: 5%;

  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 56px;
  margin-bottom: 10px;
`;

const SubTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 1fr;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 3%;
  }
`;

const SubTitle = styled.div`
  font-size: 40px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 800px) {
    display: none;
  }
`;

const InputContainer = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  margin-left: 20px;
  display: inline-block;
  border: none;
  text-indent: 20px;
  background-color: #30302e;
  color: white;

  &::placeholder {
    font-size: 20px;
    color: white;
    margin-top: 5px;
    display: none;

    @media (max-width: 800px) {
      display: initial;
    }
  }

  &:focus {
    outline: none;
  }
`;

const InputTextArea = styled.textarea`
  width: 90%;
  margin-left: 20px;
  display: inline-block;
  border: none;
  text-indent: 20px;
  background-color: #30302e;
  color: white;
  resize: none;

  &::placeholder {
    font-size: 20px;
    margin-top: 5px;
    color: white;
    display: none;

    @media (max-width: 800px) {
      display: initial;
    }
  }

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 19%;
  height: 60px;
  padding: 10px;
  margin-top: 10px;
  font-size: 25px;
  font-weight: 700;
  transition: all 0.3s;
  border: none;
  background: #30302e;
  color: #fff;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }

  @media (max-width: 560px) {
    width: 30%;
  }
`;

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmiting, setIsSubmitting] = useState(false);

  const HandlerNameChange = (event) => {
    setName(event.target.value);
  };

  const HandlerEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const HandlerMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateFields = () => {
    if (!email.trim() || !name.trim() || !message.trim()) {
      triggerToast("MissingFields");
      return false;
    }

    return true;
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const validateResult = validateFields();

    if (!validateResult) {
      setIsSubmitting(false);
      return "";
    }

    try {
      await axios.post(
        "https://obscure-brook-87266.herokuapp.com/sendMessage",
        null,
        {
          params: {
            name,
            email,
            message,
          },
          crossorigin: true,
          withCredentials: false,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
      triggerToast("Success");
    } catch (error) {
      console.log(error);
      triggerToast("Failed");
    }

    setEmail("");
    setMessage("");
    setName("");

    setIsSubmitting(false);
  };

  const triggerToast = (situation) => {
    switch (situation) {
      case "Success":
        toast(
          `❤ Sent message successfully ! Thank you ${name} and have a good day.`,
          {
            position: "bottom-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        break;
      case "Failed":
        toast(`🔥 Failed to send message ! Please try again later.`, {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "MissingFields":
        toast(`😞 Please fill in all fields to send message`, {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      default:
        console.log("No Toast triggered");
    }
  };

  return (
    <ContactFormContainer id="Contact">
      <MarginContainer>
        <Title>Contact Me</Title>
        <InputContainer>
          <SubTitleContainer>
            {" "}
            <SubTitle>Name : </SubTitle>
            <Input
              name="name"
              value={name}
              onChange={HandlerNameChange}
              placeholder="Your Name"
            />{" "}
          </SubTitleContainer>
          <SubTitleContainer>
            {" "}
            <SubTitle>Gmail :</SubTitle>{" "}
            <Input
              name="email"
              value={email}
              onChange={HandlerEmailChange}
              placeholder="Your Gmail"
            />{" "}
          </SubTitleContainer>
          <SubTitleContainer>
            {" "}
            <SubTitle>Messages :</SubTitle>{" "}
            <InputTextArea
              name="message"
              rows="15"
              value={message}
              onChange={HandlerMessageChange}
              placeholder="What's on your mind ?"
            />{" "}
          </SubTitleContainer>
          <ButtonContainer>
            <Button onClick={sendMessage} disabled={isSubmiting}>
              {" "}
              {isSubmiting ? <Loader /> : "Submit"}{" "}
            </Button>
          </ButtonContainer>
        </InputContainer>
      </MarginContainer>
    </ContactFormContainer>
  );
}
