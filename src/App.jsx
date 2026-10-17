import React from "react";
import './App.css'

function App() {
  const items = ["Confluence", "JIRA", "Postman","Charles","Slack"];

  return (
    <div>
      <h1>경력</h1>
      <div>
        <p>(주)티벨</p>
        <p>2024.03 - 재직중 (2년 8개월) | 정규직 | QA 테스트 | 사원</p>
      </div>
      <hr/>
      <div style={{ whiteSpace: "pre-line" }}>
        <strong>우아한형제들</strong> 2026.04 - 수행중 (6개월)

        [담당 업무]
        - 결제/선물하기/쿠폰 과제에 참여하여 테스트 설계 및 수행
        - API 테스트 설계 및 postman을 활용하여 테스트 수행

        [성과 및 기여]
        - 약 6개월동안 16개의 프로젝트에 참여하였으며 총 88개의 유효이슈 등록 및 개선
        - 쿠폰 과제를 기반으로 FullTC 생성에 참여하였으며 이후 지면/상태별 케이스 상세 구축을 통해 자료화
      
      <strong>SBI저축은행(사이다뱅크)</strong> 2026.01 - 2026.03 (2개월)
      
        [담당 업무]
        - 사이다APP, Movile Web, Pc Web 서비스에 대해 기획자 작성 케이스와 기획 문서 기반으로 요구사항 분석
        - 사용자 조건 별 이체, 상품 가입 플로우 등 금융 보안 정책 관련 테스트 수행
        - 1~3차 통합테스크 수행 및 차수별 결함 관리

        [성과 및 기여]
        - 1차 통합테스트만 진행하는것으로 계약된 단기 프로젝트였으나, 높은 결함 발견율로 2~3차 통합테스트 추가 진행하는것으로 계약 연장
        - 방대한 테스트 케이스로 빡빡한 일정이였지만 집중적인 일정 관리와 팀워크를 통해 기한 내 완수
      
        <strong>웅진씽크빅</strong> 2024.07 - 2025.12 (1년 5개월)

        [담당 업무]
        - 패밀리 앱(약 165개)에 대해 잦은 업데이트 주기에 대응하여 업데이트 변경점 및 영향 범위 파악하여 타임박싱과 탐색적 테스트 수행
        - 대규모 학습 콘텐츠 개편 2회, 신규 기능 추가 2-3회, 신규 단말 추가 1회에 대응하여 TC작성 및 테스트 수행
        - 오래된 앱의 경우 기획서 미비하여 기존 동작 및 이슈 내 정책 기반으로 FullTC 구축에 참여

        [성과 및 기여]
        - 패밀리 앱 검증 시 소요시간 측정, 검증 항목 작성, 검증 종료 시 결과 보고 등의 리딩 업무 수행
        - 주요앱 50개 중 37개에 대해 약 6500개의 테스트 케이스 작성하여 자산화
      
        <strong>SKT open API</strong> 2024.03 - 2024.07 (3개월)

        [담당 업무]
        - user 사이트와 admin 사이트 사이의 상호작용 검증에 대한 TC작성 및 테스트 수행
        - API 사용량에 따른 금액 책정 및 사용 초과로 인한 차단 검증 및 사이트 미리보기 내 데이터 용량 초과 테스트 진행
      </div>
      <hr/>
      <h1>학력</h1>
      <div style={{ whiteSpace: "pre-line" }}>
        <strong>배화여자대학교</strong>
        2025.03 - 2026.02 | 소프트웨어공학과 | 졸업
        - 학사 자격 취득

        2021.03 - 2025.02 | 정보보안학과 | 졸업
        - 전문학사 자격 취득
      </div>
      <hr/>
      <h2>기술능력</h2>
      <div className="chip-container">
      {items.map((item, index) => (
        <div key={index} className="chip">
          {item}
        </div>
      ))}
      </div>
      <hr/>
      <h2>수상/자격증/기타</h2>
      <div style={{ whiteSpace: "pre-line" }}>
        <strong>ISTQB Certified Tester Foundation Level (CTFL)</strong>
        2026.04 | 자격증
        <strong>NCS직무능력인증서</strong>
        2025.02 | 교육
      </div>
    </div>
  );
}

export default App;
