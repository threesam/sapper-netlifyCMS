import fs from "fs"
import path from "path"
import grayMatter from "gray-matter"

const getAllFam = () => {
  try {
    return fs.readdirSync("static/fam/").map((fileName) => {
      const fam = fs.readFileSync(
        path.resolve("static/fam", fileName),
        "utf-8"
      )
      return grayMatter(fam).data
    })
  } catch (e) {
    return []
  }
}

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  })
  const fam = getAllFam()
  res.end(JSON.stringify(fam))
}