import React from "react";
import RMessage from "./RightMessage";
import LMessage from "./LeftMessage";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Answer from "./Answer";

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

export default () => {
  return (
    <div className="Chat">
      <Query query={MESSAGES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          return (
            <>
              <div
                className="messages"
                ref={msgList => {
                  if (msgList) msgList.scrollTop = msgList.scrollHeight;
                }}
              >
                {data.messages.map(message => (
                  <>
                    {message.sender === 1 ? (
                      <RMessage key={message.id} data={message} />
                    ) : (
                      <LMessage key={message.id} data={message} />
                    )}
                  </>
                ))}
              </div>
              <Answer />
            </>
          );
        }}
      </Query>
    </div>
  );
};
