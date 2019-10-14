import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Input from "./Input";

const CREATE_ANSWER_MUTATION = gql`
  mutation($sender: Int!, $receiver: Int!, $text: String!) {
    insert_messages(
      objects: { sender: $sender, receiver: $receiver, text: $text }
    ) {
      returning {
        receiver
        id
        sender
        text
      }
    }
  }
`;

export default function Answer({ userId, otherUserId }) {
  const [sendAnswer] = useMutation(CREATE_ANSWER_MUTATION);

  return (
    <Input clickProps={sendAnswer} sender={userId} receiver={otherUserId} />
  );
}
