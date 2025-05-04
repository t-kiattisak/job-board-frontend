import { Job } from "@domain/models/job"
import { JobRepository } from "@domain/repositories/jobRepository"
import { getJobsApi } from "@infra/api/jobApi"

export const jobRepositoryImpl: JobRepository = {
  getJobs: async (): Promise<Job[]> => {
    return await getJobsApi()
  },
}
