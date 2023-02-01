import { createGuid } from '../Helper/generatorHelper.js'
import { runSql, getRowsBySql } from '../Helper/dbHelper.js'
import { Ok } from '../Helper/returnHelper.js'

const addNews = (news) => {
  let sql = `insert into NEWS(ID,GROUP_ID,CONTENT)
              values($id,$groupId,$content)
    `

  const groupId = news["groupId"]

  if (!groupId) {
    return Ok('groupId不能为空！');
  }

  runSql(undefined, sql, {
    $id: createGuid(),
    $groupId: groupId,
    $content: news["content"]
  });

  return Ok();
}

const getLatestNews = async (groupId) => {
  if (!groupId) {
    return Ok('groupId不能为空！');
  }

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