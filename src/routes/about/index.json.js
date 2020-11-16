import fs from "fs"
import path from "path"
import grayMatter from "gray-matter"

const getAllContributors = () => {
  try {
    return fs.readdirSync("static/contributors/").map((fileName) => {
      const contributors = fs.readFileSync(
        path.resolve("static/contributors", fileName),
        "utf-8"
      )
      return grayMatter(contributors).data
    })
  } catch (e) {
    return []
  }
}

export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  })
  const contributors = getAllContributors()
  res.end(JSON.stringify(contributors))
}