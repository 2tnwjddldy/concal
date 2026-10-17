import React, { useState } from 'react';
import './App.css';

// 프로젝트 및 경험 데이터
const projectsData = [
  {
    id: 1,
    company: "티벨 (우아한형제들 파견)",
    title: "우아한형제들 결제/선물하기/쿠폰 플랫폼 QA",
    period: "2026.04 ~ 현재",
    role: "QA Engineer (대무자 / 파트 리드)",
    icon: "src/assets/우아한형제들.png", // 이미지 파일 경로나 URL로 변경
    domain: "O2O 플랫폼 / 결제·선물하기·프로모션",
    tasks: [
      "결제, 선물하기, 쿠폰/프로모션 관련 신규 기능 및 고도화 요구사항 분석 및 테스트 설계·수행",
      "Postman을 활용한 백엔드 API 레벨 테스트(요청 파라미터 변조, 에러 응답 예외 처리, 비동기 정합성 검증)",
      "쿠폰 중복 적용, 선물하기 상태별 이행, 결제 실패 보상 트랜잭션 등 에지 케이스(Edge Case) 집중 검증",
      "대무자(소통 창구)로서 테스트 계획 수립부터 결과 보고까지 전체 QA Lifecycle 주도"
    ],
    achievements: [
      "약 6개월간 16개 핵심 프로젝트 참여 및 유효 결함(Defect) 88건 발굴·개선",
      "쿠폰 도메인 지면별·상태별 조건 매트릭스 및 Full TC 자산화 구축"
    ]
  },
  {
    id: 2,
    company: "티벨 (SBI저축은행 파견)",
    title: "SBI저축은행 사이다뱅크 멀티 플랫폼 고도화 QA",
    period: "2026.01 ~ 2026.03",
    role: "QA Engineer",
    icon: "src/assets/sbi저축은행.png",
    domain: "금융권 (모바일 뱅킹 및 저축은행 플랫폼)",
    tasks: [
      "App (Android/iOS), Mobile Web, PC Web 멀티 플랫폼 요구사항 분석 및 기획서 기반 검증",
      "사용자 조건별 이체 한도, 본인 인증, 상품 가입 플로우 등 금융 보안 정책 준수 집중 테스팅",
      "1~3차 차수별 통합 테스트(Integration Testing) 수행 및 결함 이슈 스크럼/트래킹"
    ],
    achievements: [
      "1차 테스트 시 높은 결함 발견율로 정합성을 인정받아 2~3차 통합 테스트 추가 연장 수행",
      "촉박한 일정 속 타임박싱 및 우선순위 검증을 통해 기한 내 오픈 품질 확보"
    ]
  },
  {
    id: 3,
    company: "티벨 (웅진씽크빅 파견)",
    title: "웅진씽크빅 스마트 학습 플랫폼 및 패밀리 앱 QA",
    period: "2024.07 ~ 2026.01",
    role: "QA Engineer (스프린트 리드)",
    icon: "src/assets/웅진씽크빅.png",
    domain: "에듀테크 (EdTech) 및 스마트 교육 콘텐츠 플랫폼",
    tasks: [
      "패밀리 앱(약 165개)의 짧은 업데이트 주기에 대응해 중요도별 타임박싱(3~5시간/1~2시간) 검증 수립",
      "학습 콘텐츠 개편(2회), 신규 기능 추가(2~3회), 신규 전용 단말 추가(1회) 대응 테스트 수행",
      "기획서 부재 레거시 앱의 기존 동작 및 이슈 정책 역분석을 통한 검증 기준 수립",
      "검증 소요시간 측정, 검증 항목 작성, 종료 보고 등 QA 리딩 업무 수행"
    ],
    achievements: [
      "주요 앱 37개 대상 약 6,500여 개의 Full TC 구축 및 팀 내 자산화 완료",
      "검증 항목 및 소요 시간 표준화를 통해 팀 내 검증 병목 및 품질 불균형 해소"
    ]
  }
];

// 자격증 및 학력 데이터
const infoData = {
  certs: [
    { title: "ISTQB Certified Tester Foundation Level (CTFL)", issuer: "KSTQB", date: "보유" },
    { title: "정보처리기사 (실기 준비 중 / 필기 합격)", issuer: "한국산업인력공단", date: "2025" }
  ],
  education: [
    { school: "배화여자대학교", degree: "소프트웨어학과 (학사)", period: "2025 - 2026", icon: "src/assets/배화여대로고.png" },
    { school: "배화여자대학교", degree: "보안융합학과 (전문학사)", period: "2022 - 2025", icon: "src/assets/배화여대로고.png" }
  ],
  skills: ["Postman (API Testing)", "Jira / Confluence", "Chrome DevTools", "Web/App (iOS·Android)"]
};

function App() {
  const [currentPage, setCurrentPage] = useState('main'); // 'main', 'experience', 'about'
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProject = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <div className="app-container">
      {/* 상단 화사한 헤더 & 내비게이션 */}
      <header className="navbar">
        <div className="logo" onClick={() => setCurrentPage('main')}>
          안녕하세요이수정입니다잘부탁드립니다
        </div>
        <nav className="nav-links">
          <button 
            className={`nav-btn ${currentPage === 'main' ? 'active' : ''}`} 
            onClick={() => setCurrentPage('main')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${currentPage === 'experience' ? 'active' : ''}`} 
            onClick={() => setCurrentPage('experience')}
          >
            Projects
          </button>
          <button 
            className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`} 
            onClick={() => setCurrentPage('about')}
          >
            저는 이런 사람입니다
          </button>
        </nav>
      </header>

      {/* 1. 메인 페이지 */}
      {currentPage === 'main' && (
        <main className="main-page animate-fade">
          <section className="hero-section">
            <span className="sub-badge">Software QA Engineer</span>
            <h1 className="main-title">안녕하세요 이수정입니다.</h1>
            <p className="main-subtitle">
              단순한 결함 발견을 넘어, 서비스의 가치와 비즈니스 신뢰를 지키는 
              <strong> QA 엔지니어</strong>입니다.
            </p>

            {/* 메인 키워드 노출 */}
            <div className="keywords-container">
              <span className="keyword-chip">#따뜻한 유연함</span>
              <span className="keyword-chip">#집요한 책임감</span>
              <span className="keyword-chip">#전략적 문제해결사</span>
              <span className="keyword-chip">#수학적 사고력</span>
              <span className="keyword-chip">#Postman API검증</span>
              <span className="keyword-chip">#TC 자산화 전문가</span>
            </div>

            {/* 페이지 이동 버튼 */}
            <div className="action-buttons">
              <button className="btn btn-gray" onClick={() => setCurrentPage('experience')}>
                📋 경력기술서 보기
              </button>
              <button className="btn btn-gray-outline" onClick={() => setCurrentPage('about')}>
                🙋‍♀️ 이수정 보기
              </button>
            </div>
          </section>
        </main>
      )}

      {/* 2 & 3. 경력 기술 페이지 */}
      {currentPage === 'experience' && (
        <main className="page-container animate-fade">
          <div className="page-header">
            <h2>💼 Projects</h2>
            <p>각 프로젝트 항목을 클릭하시면 상세 수행 내용과 성과를 확인하실 수 있습니다.</p>
          </div>

          <div className="projects-list">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header" onClick={() => toggleProject(project.id)}>
                  <div className="project-title-group">
                    {/* 아이콘 이미지 영역 */}
                    <div className="icon-placeholder">
                      <img src={project.icon} alt={`${project.company} 아이콘`} onError={(e) => { e.target.style.display = 'none'; }} />
                      {/* <span className="icon-fallback">🏢</span> */}
                    </div>
                    <div>
                      <span className="company-tag">{project.company}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-period">{project.period} | {project.role}</span>
                    </div>
                  </div>
                  <button className="toggle-btn">
                    {openProjectId === project.id ? '▲ 닫기' : '▼ 상세 보기'}
                  </button>
                </div>

                {/* 드롭다운 형태의 상세 내용 */}
                {openProjectId === project.id && (
                  <div className="project-dropdown-content animate-slide-down">
                    <div className="info-grid">
                      <div className="info-item">
                        <strong>도메인 / 서비스 분야:</strong> {project.domain}
                      </div>
                    </div>

                    <div className="detail-section">
                      <h4>📌 주요 담당 업무</h4>
                      <ul>
                        {project.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>🏆 주요 성과 및 기여</h4>
                      <ul>
                        {project.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* 4 & 5. 저는 이런 사람입니다 (자기소개) 페이지 */}
      {currentPage === 'about' && (
        <main className="page-container animate-fade">
          <div className="page-header">
            <h2>✨ 저는 이런 사람입니다</h2>
            <p className="intro-text">
              기술과 프로세스 너머에는 항상 '사람'과 '서비스'가 있다고 믿습니다. <br/>
              단순히 버그를 찾는 테스터를 넘어, 팀의 온도를 높이고 제품의 완성도를 다듬는 QA 엔지니어 이수정입니다.
            </p>
          </div>

          <div className="scrollable-about-content">
            {/* 프로필 및 역량 요약 세션 */}
            <section className="profile-section">
              <div className="profile-image-container">
                {/* 사진 노출 영역 */}
                <img src="src/assets/증명사진이에요.jpg" alt="이수정 프로필" className="profile-img" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="profile-img-fallback">
                  {/* <span>📸</span> */}
                  <p>profile.img</p>
                </div>
              </div>

              <div className="profile-info">
                <h3>이수정 (Lee Soo Jung)</h3>
                <p className="profile-role">소프트웨어 QA 엔지니어</p>
                
                <div className="skills-tags">
                  <h4>핵심 역량 & 스택</h4>
                  <div className="tag-cloud">
                    {infoData.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="edu-cert-grid">
                  <div className="mini-box">
                    <h4>🎓 학력</h4>
                    {infoData.education.map((edu, i) => (
                      <div key={i} className="mini-item">
                        <div className="mini-icon">
                          <img src={edu.icon} alt="학교" onError={(e) => { e.target.style.display = 'none'; }} />
                          {/* <span>🏫</span> */}
                        </div>
                        <div>
                          <strong>{edu.school}</strong> <br/> ({edu.degree})
                          <p>{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mini-box">
                    <h4>📜 자격증</h4>
                    {infoData.certs.map((cert, i) => (
                      <div key={i} className="mini-item">
                        <div className="mini-icon">🏅</div>
                        <div>
                          <strong>{cert.title}</strong>
                          <p>{cert.issuer} ({cert.date})</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 자기소개서 본문 세션 */}
            <section className="essay-card personality-section">
              <h3>✨ 스스로 정의하는 QA 엔지니어 이수정</h3>
              <div className="trait-list">
                <div className="trait-item">
                  <h4>1. <strong>따뜻한 온기와 유연함을 지닌 동료</strong></h4>
                  <p>
                    서로 다른 업무를 수행하더라도 팀원들의 부재나 어려움을 먼저 살피고, 언제든 든든한 지원군(대무자)이 되어주는 것을 주저하지 않습니다. 
                    단순히 잘못을 지적하는 테스팅이 아니라, 개발자·기획자와 함께 더 나은 답을 찾아가는 '베풀 줄 아는 따뜻한 커뮤니케이션'을 지향합니다. 
                    팀이 흔들릴 때는 유연하게 선원도 되고 선장도 되며 최상의 팀워크를 만들어냅니다.
                  </p>
                </div>

                <div className="trait-item">
                  <h4>2. <strong>제한된 환경을 뛰어넘는 전략적 문제 해결사</strong></h4>
                  <p>
                    수학 문제를 풀듯 복잡하고 얽힌 상황일수록 해결의 재미를 느낍니다. 
                    165개에 달하는 방대한 패밀리 앱이나 빡빡한 일정 속에서도 타임박싱(Time-boxing)과 탐색적 테스팅을 유연하게 조합해 리소스 한계를 극복했습니다. 
                    무작정 시간을 쏟기보다 중요한 결함에 집중할 수 있는 전략적 검증 체계를 수립해 품질을 극대화합니다.
                  </p>
                </div>

                <div className="trait-item">
                  <h4>3. <strong>끝까지 파헤치는 집요함과 높은 책임감</strong></h4>
                  <p>
                    기획서가 없거나 모호한 레거시 시스템일수록 오기와 책임감이 발동합니다. 
                    과거 동작과 정책 로그를 역추적해 6,500여 개의 Full TC로 자산화하고, 간헐적으로 발생하는 결제 에지 케이스를 끝까지 분석해 도출해냈습니다. 
                    정해진 틀에 안주하지 않고, 맡은 서비스는 출시 전까지 완벽히 사수하겠다는 집념을 가지고 있습니다.
                  </p>
                </div>

                <div className="trait-item">
                  <h4>4. <strong>지식을 나누고 함께 성장하는 든든한 조력자</strong></h4>
                  <p>
                    내가 얻은 노하우와 도메인 지식이 나 혼자만의 것으로 남는 것에 만족하지 않습니다. 
                    쿠폰 및 결제 도메인의 복잡한 조건들을 지면별·상태별 조합 매트릭스로 자산화하여 신규 동료나 팀 전체가 언제든 동일한 품질 기준으로 활용할 수 있는 단단한 기반을 만듭니다. 
                    함께 성장할 때 서비스의 품질도 지속 가능하다는 것을 잘 알고 있습니다.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;