import React from "react";
import RMessage from "./RightMessage";
import LMessage from "./LeftMessage";
import gql from "graphql-tag";
import Answer from "./Answer";
import { useSubscription, useQuery } from "@apollo/react-hooks";

export const MESSAGES_QUERY = gql`
  {
    messages(
      where: { receiver: { _in: [1, 2] }, sender: { _in: [1, 2] } }
      order_by: { created_at: asc }
    ) {
      receiver
      id
      sender
      text
    }
  }
`;

const MESSAGES_SUBSCRIPTION = gql`
  subscription {
    messages(order_by: { id: desc }, limit: 1) {
      id
      text
      sender
      receiver
    }
  }
`;

export default ({ userId, otherUserId }) => {
  const { loading, error, data, refetch } = useQuery(MESSAGES_QUERY);
  useSubscription(MESSAGES_SUBSCRIPTION);
  refetch();

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="Chat">
      <div
        className="messages"
        ref={msgList => {
          if (msgList) msgList.scrollTop = msgList.scrollHeight;
        }}
      >
        {data.messages.map(message => (
          <>
            {message.sender === parseInt(userId) ? (
              <RMessage key={message.id} data={message} />
            ) : (
              <LMessage key={message.id} data={message} />
            )}
          </>
        ))}
      </div>
      <Answer userId={userId} otherUserId={otherUserId} />
    </div>
  );
};
