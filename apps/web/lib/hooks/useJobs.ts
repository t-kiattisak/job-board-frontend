import { queryOptions } from "@tanstack/react-query"
import { fetchJobs } from "@domain/usecases/fetchJobs"
import { jobRepositoryImpl } from "@data/jobRepositoryImpl"

export const jobOption = queryOptions({
  queryKey: ["jobs"],
  queryFn: fetchJobs(jobRepositoryImpl),
})
