import gql from "graphql-tag"

export const ME = gql`
  query me {
    user(login: "nagai1110") {
      name
      avatarUrl
    }
  }
`