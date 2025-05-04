import { JobRepository } from "../repositories/jobRepository"

export const fetchJobs = (repo: JobRepository) => async () => {
  return await repo.getJobs()
}
