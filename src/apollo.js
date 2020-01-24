import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

import { typeDefs, defaults, resolvers } from "./clientState";

// Cache object 생성.
// apollo-boost를 쓰지않고 수동으로 작업.(Internet API online 파트 제외)
// apollo-boost는 HTTP link를 필요로 하므로 오프라인 셋팅이 잘 안됨.

const cache = new InMemoryCache();

const stateLink = withClientState({
  //앱에 필요한 모든 로직을 웹에 있는 client state에 적어야 함.
  cache,
  typeDefs,
  defaults,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;
