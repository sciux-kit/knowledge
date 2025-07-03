import { comp } from "#";

const mindmap = comp("mindmap", "A mindmap canvas.")
mindmap.fullname("mindmap")

mindmap.attr("layout", "The layout mode of the mindmap", "'lr' | 'tb'", "lr")
mindmap.rule("The mindmap canvas need **NOT** you to define width and height, it will be auto-full of the parent container.")

export { mindmap }