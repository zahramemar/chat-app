import React from "react";
import RMessage from "./RightMessage";
import LMessage from "./LeftMessage";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Answer from "./Answer";

export const MESSAGES_QUERY = gql`
  {
    messages(where: { receiver: { _in: [1, 2] }, sender: { _in: [1, 2] } }) {
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
      {/* technical debt  shoub be changed to useQuery*/}
      <Query query={MESSAGES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const mine = data.messages.filter(message => message.sender == 1);
          const other = data.messages.filter(message => message.sender == 2);

          return <></>;
        }}
      </Query>
    </div>
  );
};
