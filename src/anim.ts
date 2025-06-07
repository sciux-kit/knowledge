import type { Attr as Param } from "./comp"
import { KnowledgeType } from "#"

export type Anim = {
  name: string
  desc: string
  params: Param[]
  type: KnowledgeType.ANIM
}

export function anim(
  name: string,
  desc: string,
) {
  const data: Anim = {
    name,
    desc,
    params: [],
    type: KnowledgeType.ANIM,
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

export type AnimGen = ReturnType<typeof anim>
