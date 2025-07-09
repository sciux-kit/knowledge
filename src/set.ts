import { AnimGen } from "./anim"
import { CompGen } from "./comp"
import { ReferGen } from "./refer"
import { ToolGen } from "./tool"

export type SetMember = AnimGen | CompGen | ReferGen | ToolGen
export interface SetType {
  members: SetMember[]
  reqs: string[]
  explainations: string[]
}

export function set(...members: SetMember[]) {
  const data: SetType = {
    members,
    reqs: [],
    explainations: [],
  }

  function member(
    ...members: SetMember[]
  ) {
    data.members.push(...members)
  }

  function req(
    ...reqs: string[]
  ) {
    data.reqs.push(...reqs)
  }

  function explain(
    ...explainations: string[]
  ) {
    data.explainations.push(...explainations)
  }

  function toData() {
    return data
  }

  return {
    member,
    req,
    explain,
    toData,
  }
}

export type SetGen = ReturnType<typeof set>
