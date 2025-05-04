import { JobLists } from "@/components/jobs/JobLists"
import { jobOption } from "@/lib/hooks/useJobs"
import { getQueryClient } from "@/lib/utils/get-client-query"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(jobOption)

  return (
    <div className='flex items-center justify-center min-h-svh'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>Hello World</h1>
        <Button size='sm'>Button</Button>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JobLists />
      </HydrationBoundary>
    </div>
  )
}
