type CriteriaType = {
  [index: string]: string,
  salary: string,
  domain: string,
  location: string,
  welfare: string,
  company: string,
  growth: string,
  culture: string
}

const noticeCriteria: CriteriaType = {
  salary: '연봉',
  domain: '산업군/도메인',
  location: '위치/출퇴근시간',
  welfare: '워라밸/복지',
  company: '회사 규모/네임밸류',
  growth: '성장 가능성',
  culture: '사내문화/좋은 동료'
}

export default noticeCriteria;
