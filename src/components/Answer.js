import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Input from "./Input";

const CREATE_ANSWER_MUTATION = gql`
  mutation($sender: Int!, $receiver: Int!, $text: String!) {
    insert_messages(
      objects: { sender: $sender, receiver: $receiver, text: $text }
    ) {
      returning {
        id
        sender
        receiver
        text
      }
    }
  }
`;

export default function Answer() {
  return (
    <Mutation mutation={CREATE_ANSWER_MUTATION}>
      {sendAnswer => {
        return <Input clickProps={sendAnswer} />;
      }}
    </Mutation>
  );
}
