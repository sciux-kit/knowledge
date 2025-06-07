import { KnowledgeType } from "#"

export type Refer = {
  type: KnowledgeType.REFER
  document: string
  explainations: string[]
}

export function refer(
  document: string
) {
  const data: Refer = {
    type: KnowledgeType.REFER,
    document,
    explainations: [],
  }

  function explain(
    explain: string,
  ) {
    data.explainations.push(explain)
  }

  function toData() {
    return data
  }

  return {
    explain,
    toData,
  }
}

export type ReferGen = ReturnType<typeof refer>
