import { Job } from "../models/job"

export interface JobRepository {
  getJobs(): Promise<Job>
}
