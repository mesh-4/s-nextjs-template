import * as React from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../api-mocks")
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
