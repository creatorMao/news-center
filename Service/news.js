import { createGuid } from '../Helper/generatorHelper.js'
import { runSql, getRowsBySql } from '../Helper/dbHelper.js'
import { Ok } from '../Helper/returnHelper.js'

const addNews = (news) => {
  let sql = `insert into NEWS(ID,GROUP_ID,CONTENT)
              values($id,$groupId,$content)
    `
  runSql(undefined, sql, {
    $id: createGuid(),
    $groupId: news["groupId"],
    $content: news["content"]
  });

  return Ok();
}

const getLatestNews = async (groupId) => {
  let sql = `
   select * from NEWS where GROUP_ID=$groupId order by imp_time desc limit 1
`
  return Ok(undefined, await getRowsBySql(undefined, sql, {
    $groupId: groupId
  }))
}

export {
  addNews,
  getLatestNews
}