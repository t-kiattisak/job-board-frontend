"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "@/lib/utils/get-client-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </NextThemesProvider>
  )
}
