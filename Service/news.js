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
  let rawData = await getRowsBySql(undefined, sql, {
    $groupId: groupId
  });

  if (rawData.length != 0) {
    rawData = rawData[0]
  }
  else {
    rawData = {}
  }

  let rawContent = rawData['CONTENT'] || ''
  let parsedContent = {}
  let parseedSuccessFlag = true
  try {
    parsedContent = JSON.parse(rawContent)
  }
  catch {
    parsedContent = rawContent
    parseedSuccessFlag = false
  }

  return Ok(undefined, {
    rawData,
    rawContent,
    parsedContent,
    parseedSuccessFlag
  })
}

export {
  addNews,
  getLatestNews
}