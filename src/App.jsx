import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppContainer } from "./styled/main.styled";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
