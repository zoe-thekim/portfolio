// shared resume data (loaded by both versions)
window.PF_EN = {
 "erp": {
  "title": "MES Web Migration & ERP Integration Upgrade",
  "short": "MES Web Migration · ERP",
  "client": "Hyundai Transys",
  "domain": "Web migration",
  "did": [
   "Split screens and scripts tangled inside JSP into JSP and JavaScript, rebuilt along MVC layer responsibilities",
   "Converted MSSQL queries and procedures for Tibero and verified data processing",
   "Integrated the Web Service–based ERP interface and implemented send/receive data logic"
  ],
  "result": "Brought out-of-standard subcontract material management into the web standard, enabling batch operations"
 },
 "green": {
  "title": "Green Power New AS Plant Launch",
  "short": "New Plant MES Web Setup",
  "client": "Hyundai Green Power",
  "domain": "EV batteries",
  "did": [
   "Built and configured the MES web server for the new plant",
   "Developed new screens"
  ],
  "result": "Delivered the server environment and screens for the new plant’s MES web operation single-handedly"
 },
 "transys": {
  "title": "Transys Reducer New Vehicle Model",
  "short": "Reducer New Model",
  "client": "Hyundai Transys",
  "domain": "Automotive motor reducers",
  "did": [
   "Modified PLC-linked programs and ran equipment tests",
   "Updated Java web screens",
   "Supported early-stage operation"
  ],
  "result": "Added a new vehicle model reliably, including equipment and middleware communication"
 },
 "mobis": {
  "title": "Mobis Airbag MES Conversion",
  "short": "Airbag MES Legacy Conversion",
  "client": "Hyundai Mobis Unitus",
  "domain": "Automotive airbag legacy conversion",
  "did": [
   "Converted the VB-based status board program to C#",
   "Rebuilt programs with no surviving source (shipping slips, part ID labels, etc.)",
   "Applied the common framework; on-site rollout and PLC communication testing"
  ],
  "result": "Made previously unmaintainable, source-less programs maintainable and moved them to Windows 10"
 },
 "bhmc": {
  "title": "BHMC China Plant MES Improvement",
  "short": "Paint Shop Web Viewer",
  "client": "BHMC",
  "domain": "Vehicle paint process",
  "did": [
   "Analyzed existing C# screens and logic",
   "Developed ASP.NET web screens"
  ],
  "result": "Made paint-process improvement data, once locked in a C# program, viewable anywhere on the web"
 },
 "hanwha": {
  "title": "Hanwha Solutions MES Build",
  "short": "Solar Plant MES",
  "client": "Hanwha Solutions Qcells",
  "domain": "New solar manufacturing plant",
  "did": [
   "Developed common controls and data integration screens",
   "Applied middleware communication programs"
  ],
  "result": "Improved operational efficiency through a common framework"
 },
 "wia": {
  "title": "WIA AMR Control System Development",
  "short": "AMR Robot Control",
  "client": "Hyundai WIA",
  "domain": "Manufacturing & parking robot control",
  "did": [
   "Built MQTT-based monitoring screens",
   "Reworked real-time data handling with separated threads"
  ],
  "result": "Eliminated monitoring screen lag; improved stability by extracting common controls"
 }
};
window.PF_DATA = {
  name: '김예빈', nameEn: 'KIM YE BIN', role: 'MES · 제조 IT 개발자',
  email: 'yeb.kim@hotmail.com', phone: '010-9977-2572',
  company: '대한FA시스템', dept: '개발부 · 사원', since: '2023.04 ~ 재직중',
  projects: [
    { id: 'erp', title: 'MES 웹 시스템 이관 및 ERP 연계 고도화', short: 'MES 웹 이관 · ERP 연계', period: '2026.08 — 2026.11', seg: [[2026, 8, 2026, 11]], client: '현대 트랜시스', domain: '웹 이관',
      did: ['JSP 안에 섞여 있던 화면과 스크립트를 JSP·JavaScript로 분리하고, MVC 계층별 역할에 맞춰 재개발', 'MSSQL 기반 쿼리·프로시저를 Tibero 환경에 맞게 변환하고 데이터 처리 기능 검증', 'Web Service 기반 ERP 인터페이스 연동, 송수신 데이터 처리 로직 구현'],
      result: '표준 밖에 있던 사급관리를 웹 표준에 포함해 일괄 작업이 가능하도록 개선', tech: ['Java', 'JSP', 'JavaScript', 'MSSQL', 'Tibero', 'Web Service'] },
    { id: 'green', title: '그린파워 신규 AS 공장 신설', short: '신규 공장 MES 웹 구축', period: '2026.03 — 2026.07', seg: [[2026, 3, 2026, 7]], client: '현대 그린파워', domain: '전기차 배터리',
      did: ['신규 공장 MES 웹 서버 구축 및 초기 설정', '신규 화면 개발'],
      result: '신규 공장 MES 웹 운영에 필요한 서버 환경과 화면 구성을 단독으로 진행', tech: ['MSSQL', 'IIS', 'ASP.NET'] },
    { id: 'transys', title: '트랜시스 감속기 차종 추가', short: '감속기 신규 차종 추가', period: '2025.11 — 2026.02', seg: [[2025, 11, 2026, 2]], client: '현대 트랜시스', domain: '자동차 모터 감속기',
      did: ['PLC 연동 프로그램 수정 및 설비 테스트', 'Java 웹 화면 수정', '초기 운영 지원'],
      result: '설비·미들웨어 통신을 포함해 신규 차종을 안정적으로 추가', tech: ['C#', 'Java', 'Tibero'] },
    { id: 'mobis', title: '모비스 에어백 MES 컨버전', short: '에어백 MES 레거시 전환', period: '2025.01 — 2025.10', seg: [[2025, 1, 2025, 10]], client: '현대 모비스 유니투스', domain: '자동차 에어백 레거시 전환',
      did: ['VB 기반 현황판 프로그램을 C#으로 전환', '소스가 없는 프로그램 신규 개발 (출하증 발행, 부품식별표 등)', '공통 프레임워크 적용, 현장 적용 및 PLC 통신 테스트'],
      result: '소스가 없어 수정이 어려웠던 프로그램의 유지보수성 개선, Windows 10 환경 전환', tech: ['VB', 'C#', 'MSSQL'] },
    { id: 'bhmc', title: '중국 인화 공장 MES 개선', short: '도장 공정 웹 조회', period: '2024.07 — 2024.09', seg: [[2024, 7, 2024, 9]], client: 'BHMC', domain: '완성차 도장 공정',
      did: ['기존 C# 화면·로직 분석', 'ASP.NET 웹 화면 개발'],
      result: 'C# 프로그램에만 있던 인화 공정 개선 정보를 어디서나 볼 수 있는 웹 조회 기능 구현', tech: ['ASP.NET', 'Oracle', 'IIS'] },
    { id: 'hanwha', title: '한화 솔루션 MES 구축', short: '태양광 신규 공장 MES', period: '2023.11 — 2024.06 / 2024.10 — 2024.12', seg: [[2023, 11, 2024, 6], [2024, 10, 2024, 12]], client: '한화 솔루션 큐셀', domain: '태양광 제조 신규 공장',
      did: ['공통 컨트롤 및 데이터 연계 화면 개발', '미들웨어 통신 프로그램 적용'],
      result: '공통 프레임워크로 운영 효율 개선', tech: ['C#', 'MSSQL', 'Tibco', 'DevExpress'] },
    { id: 'wia', title: '위아 AMR 관제 시스템 개발 및 개선', short: 'AMR 로봇 관제', period: '2023.04 — 2023.10', seg: [[2023, 4, 2023, 10]], client: '현대 위아', domain: '제조·주차 로봇 관제',
      did: ['MQTT 기반 관제 화면 개발', '스레드 분리로 실시간 데이터 처리 구조 개선'],
      result: '모니터링 화면 끊김 해결, 공통 컨트롤 분리로 운영 안정성 확보', tech: ['C#', 'Oracle', 'MQTT'] }
  ],
  skills: [
    { group: 'Language / Framework', items: ['C#', 'Java', 'JavaScript', 'JSP', 'ASP.NET', 'VB'] },
    { group: 'Database', items: ['MSSQL', 'Tibero', 'Oracle'] },
    { group: '통신 · 연계', items: ['MQTT', 'Web Service', 'Tibco', 'PLC 통신'] },
    { group: 'Server / UI', items: ['IIS', 'DevExpress'] }
  ]
};
