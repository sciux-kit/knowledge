import { KnowledgeType, type Attr as Param } from "#"

export type Tool = {
  name: string
  desc: string
  type: KnowledgeType.TOOL
  params: Param[]
}

export function tool(
  name: string,
  desc: string,
) {
  const data: Tool = {
    name,
    desc,
    type: KnowledgeType.TOOL,
    params: [],
  }

  function param(
    name: string,
    desc: string,
    type: string,
    dft?: string,
  ) {
    data.params.push({
      name,
      desc,
      type,
      dft,
    })
  }

  function toData() {
    return data
  }

  return {
    param,
    toData,
  }
}

export type ToolGen = ReturnType<typeof tool>
