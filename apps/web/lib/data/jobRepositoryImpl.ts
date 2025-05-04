import { Job, JobSchema } from "@domain/models/job"
import { JobRepository } from "@domain/repositories/jobRepository"
import { getJobsApi } from "@infra/api/jobApi"

export const jobRepositoryImpl: JobRepository = {
  getJobs: async (): Promise<Job> => {
    const { data } = await getJobsApi()
    const parsed = JobSchema.parse(data)
    return parsed
  },
}
