import { useQuery, gql } from "@apollo/client";

const QUERY_PING = gql`
  query {
    ping {
      message
      timestamp
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(QUERY_PING);
  const ping = data?.ping;
  const display = loading || error || `${ping.message} - ${ping.timestamp}`
  return (
    <>
      <h1>Budget Tracker</h1>
      <h2>coming soon!</h2>
      <p>ping: {display}</p>
    </>
  );
}

export default App;
