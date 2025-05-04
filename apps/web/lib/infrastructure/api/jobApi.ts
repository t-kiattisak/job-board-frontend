export const getJobsApi = async () => {
  const res = await fetch("/api/jobs")
  if (!res.ok) throw new Error("Failed to fetch jobs")
  return res.json()
}
