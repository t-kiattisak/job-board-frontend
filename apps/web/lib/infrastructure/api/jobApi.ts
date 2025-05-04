import { network } from "../networks"

export const getJobsApi = () => network.get("/jobs")
