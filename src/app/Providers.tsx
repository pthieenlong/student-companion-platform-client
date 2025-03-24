import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import AppRouter from "../routes/AppRouter.route"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function Providers() {
  const queryClient = new QueryClient()
  return (
    <ReduxProvider
      store={store}
      children={
        <QueryClientProvider client={queryClient} children={<AppRouter />} />
      }
    />
  )
}

export default Providers
