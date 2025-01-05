const createTableSqlList = [
  {
    tableCode: 'NEWS',
    tableName: '信息表',
    sql: `
    CREATE TABLE NEWS
    (
      ID                VARCHAR(50)   PRIMARY KEY      NOT NULL,
      GROUP_ID          VARCHAR(50),
      CONTENT           TEXT,
      IMP_DATE          VARCHAR(10) DEFAULT (date('now')),
      IMP_TIME          VARCHAR(19) DEFAULT (datetime('now','localtime'))
    );
    `
  }
]


export {
  createTableSqlList
}