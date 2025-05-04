"use client"
import { jobOption } from "@/lib/hooks/useJobs"
import { useSuspenseQuery } from "@tanstack/react-query"
import React from "react"

export const JobLists = () => {
  const { data } = useSuspenseQuery(jobOption)
  return (
    <div>
      JobLists
      {JSON.stringify(data, null)}
    </div>
  )
}
