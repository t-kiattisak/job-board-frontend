import { useQuery } from "@tanstack/react-query"
import { fetchJobs } from "@domain/usecases/fetchJobs"
import { jobRepositoryImpl } from "@data/jobRepositoryImpl"

export const useFetchJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs(jobRepositoryImpl),
  })
}
