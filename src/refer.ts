import { KnowledgeType } from "#"

export type Refer = {
  type: KnowledgeType.REFER
  document: string
  desc: string
  explainations: string[]
}

export function refer(
  document: string,
  desc: string,
) {
  const data: Refer = {
    type: KnowledgeType.REFER,
    document,
    desc,
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
