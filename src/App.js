import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <QueryClientProvider client={client}>
      <Layout onSearch={setSearchTerm}>
        <Home searchTerm={searchTerm} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
