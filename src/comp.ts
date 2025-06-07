import { KnowledgeType } from "#"
import { AnimGen } from "./anim"

export type Comp = {
  name: string
  desc: string
  attrs: Attr[]
  type: KnowledgeType.COMP
  rules: string[]
  anims: AnimGen[]
}
export type Attr = {
  name: string
  desc: string
  type: string
  dft?: string
}

export function comp(
  name: string,
  desc: string,
) {
  const data: Comp = {
    name,
    desc,
    attrs: [],
    type: KnowledgeType.COMP,
    rules: [],
    anims: [],
  }

  function attr(
    name: string,
    desc: string,
    type: string,
    dft?: string,
  ) {
    data.attrs.push({
      name,
      desc,
      type,
      dft,
    })
  }

  function toData() {
    return data
  }

  function rule(
    rule: string,
  ) {
    data.rules.push(rule)
  }

  function anim(
    ...anims: AnimGen[]
  ) {
    data.anims.push(...anims)
  }

  return {
    attr,
    rule,
    toData,
  }
}