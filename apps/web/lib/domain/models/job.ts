import { z } from "zod"

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const JobSkillSchema = z.object({
  jobId: z.string(),
  skillId: z.string(),
  skill: SkillSchema,
})

export const ClientSchema = z.object({
  id: z.string(),
  email: z.string(),
})

export const JobDetailsSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  title: z.string(),
  description: z.string(),
  budget: z.number(),
  selectedUserId: z.string().nullable(),
  createdAt: z.string(),
  status: z.string(),
  skills: z.array(JobSkillSchema),
  client: ClientSchema,
})

export const JobSchema = z.object({
  success: z.boolean(),
  jobs: z.array(JobDetailsSchema),
})

export type Job = z.infer<typeof JobSchema>
