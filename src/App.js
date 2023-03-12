import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Home></Home>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
