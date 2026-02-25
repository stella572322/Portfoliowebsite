import image_1f560cabcf943cd4612a3bc1817d1a594e9ba1f4 from '../assets/1f560cabcf943cd4612a3bc1817d1a594e9ba1f4.png';
import image_eba95b731ea346f19e3c1d968a6963eb0a401602 from '../assets/eba95b731ea346f19e3c1d968a6963eb0a401602.png';
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  
  // PM Portfolio specific fields for Government Projects
  overview: string;
  background: string;
  challenges: string[];
  // PM challenge -> action mappings for key scenarios
  challengeActions?: {
    scene: string;
    actions: string;
  }[];
  // Consolidated sections for UI-friendly rendering (overview/background/challenges/solutions/impact/challengeActions)
  summarySections?: {
    title: string;
    content?: string;
    items?: { heading?: string; text: string }[];
  }[];
  objectives: string[];
  stakeholders: string[];
  methodology: string;
  solutions: string[];
  keyFeatures: string[];
  impact: {
    metric: string;
    value: string;
  }[];
  tools: string[];
  role: string;
  timeline: string;
  teamSize?: string;
  projectScope?: string;
  hasProcessDocumentation?: boolean; // For displaying interactive process documentation viewer
  hasProcessMapOverview?: boolean; // For displaying process map overview
  hasUseCaseDiagram?: boolean; // For displaying use case diagram
  hasBPMNDiagram?: boolean; // For displaying BPMN diagram
  hasRACIMatrix?: boolean; // For displaying RACI matrix
  hasWorkLifecycleDiagram?: boolean; // For displaying work lifecycle diagram
  hasFunctionPathDiagram?: boolean; // For displaying function path diagram
  hasPRDAndDesignSection?: boolean; // For displaying PRD and design section
  hasUserDataReviewDiagram?: boolean; // For displaying user data review diagram
  hasPRDSpecificationDiagram?: boolean; // For displaying PRD specification diagram
  hasInteractivePrototype?: boolean; // For displaying interactive prototype section
}

export const projects: Project[] = [
  {
    id: 'gov-construction-contract-system',
    title: '直轄市級工程履約管理系統',
    description: '大型工程專案管理系統,涵蓋工程計畫、招標、履約監督、驗收結案等完整生命週期管，提升工程品質與行政效率。',
    image: image_1f560cabcf943cd4612a3bc1817d1a594e9ba1f4,
    
    // PM Portfolio Details
    overview: '本專案為直轄市級政府工程管理數位化系統，整合工程專案從規劃、招標、施工到驗收的完整生命週期管理。系統規模涵蓋 89 個功能模組及跨平台行動應用程式，服務範圍包含工務、交通、水利等多個工程主管機關，大幅提升工程履約管理效率與透明度。',
    
    background: '政府公共工程涉及大量預算執行與公共利益，傳統紙本作業與分散系統造成資訊不透明、流程冗長、難以即時監督等問題。為提升工程管理效率、強化履約監督機制、確保工程品質，需建立整合性數位管理平台，將工程管理作業標準化、資訊化、行動化。',
    
    challenges: [
      '系統規模龐大：涵蓋 89 個功能模組需調多個工程主管機關的不同需求與作業流程',
      '業務複雜度高：工程履約涉及預算編列、招標評選、施工監督、變更管理、驗收結案等多階段流程',
      '法規遵循要求：需符合政府採購法、工程會相關規範、各項工程技術標準等法規要求',
      '跨平台整合：同步開發網頁系統與行動 App，支援工地現場即時作業',
      '使用者多元：服務對象包含主辦機關、監造單位、施工廠商、稽核人員等不同角色'
    ],
    // PM 的挑戰場景與對應行動 (Actions)
    challengeActions: [
      {
        scene: '嚴重的數據孤島 (Data Silo)',
        actions: '核心策略： 建立「單一事實來源 (Single Source of Truth)」。定義標準化 API 介接規範，強制實現「一次輸入、全域同步」，徹底解決資料不一致問題。'
      },
      {
        scene: '45萬筆高污染數據',
        actions: '品質管理： 設計「自動化邏輯檢核引擎」。針對高程倒流、坐標偏移等邏輯錯誤建立自動篩選機制，將清理工作從人工轉向半自動化，大幅節省人力。'
      },
      {
        scene: '複雜的跨部門協作',
        actions: '溝通協調： 主持 38 場跨單位會議。透過 User Story Mapping 梳理不同科室的重疊職權，設計 Role-Based 權限模型，平衡資料開放與資訊安全。'
      }
    ],
    // Consolidated sections to drive ProjectDetail rendering
    summarySections: [
      {
        title: 'Overview',
        content: '本專案為直轄市級政府工程管理數位化系統，整合工程專案從規劃、招標、施工到驗收的完整生命週期管理。系統規模涵蓋 89 個功能模組及跨平台行動應用程式，服務範圍包含工務、交通、水利等多個工程主管機關，提升工程履約管理效率與透明度。'
      },
      {
        title: 'Background',
        content: '傳統紙本作業與分散系統造成資訊不透明、流程冗長，難以即時監督與跨單位協作，需建立整合性數位管理平台以提升效率並確保工程品質。'
      },
      {
        title: '關鍵挑戰與 PM 行動',
        items: [
          {
            heading: '嚴重的數據孤島 (Data Silo)',
            text: '問題：資料分散、重複輸入導致不一致。\n行動：建立「單一事實來源 (Single Source of Truth)」，定義標準化 API 介接規範，實施一次輸入、全域同步機制，消除跨系統資料差異。'
          },
          {
            heading: '45萬筆高污染數據',
            text: '問題：大量圖資存在高程倒流、坐標偏移等邏輯錯誤。\n行動：設計「自動化邏輯檢核引擎」，以規則與範例自動篩選疑似錯誤，建立半自動化清理流程以降低人工作業量。'
          },
          {
            heading: '複雜的跨部門協作',
            text: '問題：職權重疊、流程缺乏一致性。\n行動：主持 38 場跨單位會議，運用 User Story Mapping 梳理需求與責任，設計 Role-Based 權限模型，平衡資料開放與資訊安全。'
          }
        ]
      },
      {
        title: 'Solutions Summary',
        items: [
          { text: '建立標準化工程管理流程，整合計畫、招標、履約與驗收等作業' },
          { text: '開發跨平台應用（Web + Mobile）以支援現場與辦公室作業' },
          { text: '設計彈性模組化架構，89 個功能模組可按需求組合' },
          { text: '導入電子化表單與自動通知機制，加速審核與稽核流程' }
        ]
      },
      {
        title: 'Impact / 成效摘要',
        items: [
          { text: '系統規模：89 個功能模組 + 跨平台 App' },
          { text: '數位化：將 150+ 種紙本表單轉為數位模組' },
          { text: '效率：審核流程從 7 天縮短至 2 天；資料登錄時間減少 60%' }
        ]
      }
    ],
    
    objectives: [
      '建立整合性工程履約管理平台，涵蓋工程全生命週期作業',
      '提供行動化管理工具，支援工地現場即時資料登錄與查詢',
      '標準化工程管理作業流程，提升作業效率與一致性',
      '強化履約監督機制，即時掌握工程進度與品質',
      '建立工程資料庫，支援決策分析與知識管理',
      '達成 80% 以上使用者滿意度，確保系統穩定性與易用性'
    ],
    
    stakeholders: [
      '工程主管機關：系統主要使用者，負責工程計畫、招標、履約管理',
      '監造單位：負責工程施工監督、品質管控、進度追蹤',
      '施工廠商：承攬工程執行，需配合系統進行資料填報',
      '稽核單位：進行工程稽核、查核作業',
      'IT 部門：系統發、維運、技術支援',
      '外部廠商：系統開發協力廠商',
      '決策層級：透過系統數據進行政策分析與決策支援'
    ],
    
    methodology: '採用敏式開發搭配分期分批上線策略。前期投入 4 個月進行跨機需求訪談與流程盤點，建立核心功能清單與優先順序。開採用 3 週一次敏捷衝刺，定期與業務單位進行 Demo 與回饋收集。因應系統規模，分為核心模組、進階功能、整合介面三階段開發，每階段進行完整測試與試辦後才正式上線。',
    
    solutions: [
      '建立標準化工程管理流程：整合計畫編製、預算管理、招標作業、履約監督、驗收結案等標準作業程序',
      '開發跨平台應用系統：提供網頁版管理後台與行動 App，支援辦公室與工地現場作業',
      '設計彈性模組架構：89 個功能模組採用模組化設計，可依機關需求彈性組合使用',
      '建立電子化表單系統：將紙本表單數位化，支援線上填寫、審核、簽章',
      '整合 GIS 地圖功能：結合地理資訊系統，視覺化呈現工程位置與進度',
      '導入即時通知機制：期限提醒、異常警示、審核通知等自動推播功能',
      '建立工程知識庫：累積工程案例、技術文件、常見問題等知識資產'
    ],
    
    keyFeatures: [
      '工程計畫管理：工程立案、計畫書編製、預算編列、時程規劃',
      '招標作業系統：招標公告、投標管理、開標作業、評選流程',
      '履約監督管理：施工進度追蹤、品質檢驗記錄、缺失改善管理',
      '變更管理機制：設計變更、契約變更、追加減帳管理',
      '付款審核流程：估驗計價、請款審核、保留款管理',
      '驗收結案作業：初驗複驗、缺失改善、驗收證明、文件歸檔',
      '行動 App 功能：現場照片上傳、即時資料查詢、行動簽核',
      '數據分析儀表板：工程進度統計、預算執行分析、品質指標追蹤',
      '文件管理系統：工程圖說、會議記錄、公文往來集中管理'
    ],
    
    impact: [
      { metric: '系統規模', value: '89 個功能模組 + 跨平台 App' },
      { metric: '數位化程度', value: '成功將 150+ 種紙本表單轉為數位模組' },
      { metric: '使用者滿意度', value: '達成 80% 以上滿意度目標' },
      { metric: '效率提升', value: '將原本紙本審核流程從 7 天縮短至 2 天' },
      { metric: '作業效率', value: '工程資料登錄時間減少 60%' },
      { metric: '節省成本', value: '減少人工核帳錯誤率達 100%，加速工程款撥付進度' }
    ],
    
    tools: [
      'Figma（UI/UX 設計）',
      'Miro（流程分析與協作）',
      'draw.io（統架構與流程圖）',
      'Excel / Google Sheets（需求整理與分析）',
			'Notion（專案管理）',
    ],
    
    role: 'Product Manager - 負責產品劃、需求分析、PRD 撰寫、跨部門溝通、UAT 規劃。獨立完成 11 個功能模組的完整需求規格文件，協調工程主管機關、監造單位、廠商等多方利害關係人需求。',
    
    timeline: '2021年 - 2025年（共 4 年，持續優化迭代）',
    
    teamSize: '20+ 人團隊（包含後端工程師、前端工程師、App 開發工程師、UI/UX 設計師、系統分析師、QA、PM...等）',
    
    projectScope: '直轄市級政府工程管理系統，服務多個工程主管機關，涵蓋數千件年度工程專案管理',
    
    hasProcessDocumentation: true,
    hasProcessMapOverview: true,
    hasUseCaseDiagram: true,
    hasBPMNDiagram: true,
    hasRACIMatrix: true,
    hasWorkLifecycleDiagram: true,
    hasFunctionPathDiagram: true,
    hasPRDAndDesignSection: true
  },
  {
    id: 'gov-infrastructure-gis-system',
    title: '城市基礎設施智慧管理系統',
    description: 'GIS 圖資整合管理系，整合 45 萬筆設施資料，榮獲政府資訊類獎項肯定，教育訓練滿意度從 70% 提升至 93%。',
    image: image_eba95b731ea346f19e3c1d968a6963eb0a401602,
    
    // PM Portfolio Details
    overview: '本專案為直轄市級基礎設施管理數位轉型計畫，整合 GIS 圖資系統與設施維護管理平台，建立雲端智慧架構。系統整合 449,021 筆設施資料，介接既有管理系統數據，透過數據治理與流程優化，大幅提升維護管理效率。專案榮獲政府資訊應用類獎項肯定，展現卓越的產品規劃與執行能力。',
    
    background: '直轄市級基礎設施管理涉及龐大的地下管線網路與維護工程，傳統作業面臨系統分散、資料重複登打、圖資品質不佳、缺乏即時決策資訊等問題。為提升管理效率、優化維護品質、強化決策支援能力，需建立整合性 GIS 智慧管理平台，實現資料標準化、流程數位化、決策視覺化。',
    
    challenges: [
      '系統孤島與資料斷層：同一筆資料需在三個不同平台重複登打，造成資料不一致與作業負擔',
      '圖資品質問題：45 萬筆 GIS 資料存在邏輯錯誤（如上游高程低於下游）與格式不一致',
      '既有系統整合：需介接舊有管理系統數據，處理不同時期建置的資料格式差異',
      '跨單位協作需求：涉及多個業務科室與外部協作單位，權限管理與流程協調複雜',
      '決策資訊缺乏：決策者無法即時掌握維護熱區分布與工程執行進度'
    ],
    
    objectives: [
      '整合 449,021 筆設施資料，建立統一 GIS 管理台',
      '消除系統孤島，實現資料一次輸入、多處應用',
      '完成 45 萬筆圖資數據治理，提升資料品質與可用性',
      '建立能維護管理機制，從被動維修轉為主動預防',
      '提供 BI 決策儀表板，支援即時監控與數據分析',
      '提升使用者滿意度，教育訓練滿意度達 90% 以上'
    ],
    
    stakeholders: [
      '主管機關：系統主要使用者，負責設施維護管理與工程執行',
      '各業務科室：不同專業領域使用者（工程、維護、規劃等）',
      '外部協作單位：承辦維護工程與巡查作業的廠商',
      'IT 部門：系統開發、維運、技術支援',
      '決策層級：透過 BI 儀表板進行政策分析與資源分配',
      '民眾：透過公開資訊平台查詢設施營運數據',
      '外部開發商：系統整合與客製化開發協力廠商'
    ],
    
    methodology: '採用使用者中心設計搭配敏捷開發模式。前期進行 21 場深度需求訪談與 17 場跨科室協調會議，深入理解各單位作業流程與痛點。開發過程建立 Role-Based 權限控管機制，解決多部門作業衝突。透過分期分批上線策略，優先處理核心維護管理功能，再逐步擴充進階分析與整合應用。',
    
    solutions: [
      '整合 GIS 圖資系統：視覺化呈現設施分布、維護熱區、工程位置等地理資訊',
      '開發維護工程智慧管理：自動介接行動巡查 APP 缺失數據，建立熱區自動判讀機制',
      '建立工程標案全生命週期管理：數位化預算分配流程，取代人工 Excel 作業',
      '執行數據治理專案：修正邏輯錯誤、去重複化、標準化，清理 45 萬筆圖資',
      '開發 Video-GIS 同步技術：點擊地圖即顯示管內影像，實現精準預防性維護',
      '導入決策儀表板：即時監控設施營運數據，支援數據公開透明'
    ],
    
    keyFeatures: [
      '維護工程通報與管理：從被動維修轉為主動熱區治理，自動判讀重複堵塞點啟動開蓋調查',
      '工程標案生命週期管理：數位化預算分配流程，人事移交指派功能防止任務斷層',
      '自動化警示系統：針對履約保證金期限、標案到期日等關鍵節點自動提醒',
      'GIS 圖資整合平台：整合 449,021 筆設施資料，支援空間查詢與圖層套疊分析',
      '數據品質管理：自動檢核邏輯錯誤（如高程異常）、重複資料、格式標準化',
      'Video-GIS 同步查詢：點擊地圖定位即顯示管內檢視影像，支援精準維護決策',
      'BI 決策儀表板：即時監控設施營運狀態、用電數據、水質指標等關鍵數據',
      '行動巡查整合：自動介接 APP 缺失數據，實現現場與後台無縫銜接',
      'Role-Based 權限管控：依科室與業務需求設定分層權限，確保資料安全'
    ],
    
    impact: [
      { metric: '資料整合規模', value: '整合 449,021 筆設施資料' },
      { metric: '系統穩定度', value: '透過分期分批策略，確保舊系統遷移期間業務零中斷' },
      { metric: '教育訓練滿意度', value: '從 70% 提升至 93%' },
      { metric: '作業效率提升', value: '消除三平台重複登打，節省 60% 作業時間' },
      { metric: '獎項肯定', value: '榮獲政府資訊應用類獎項' },
      { metric: '決策支援', value: 'BI 儀表板數據公開，提升透明度' }
    ],
    
    tools: [
      'Figma（UI/UX 設計）',
      'Miro（流程分析與協作）',
      'draw.io（統架構與流程圖）',
      'Excel / Google Sheets（需求整理與分析）',
			'Notion（專案管理）',
    ],
    
    role: 'Product Manager - 負責需求訪談與分析（21 場深度訪談、17 場跨科室協調會議）、產品規劃與功能設計、數據治理策略規劃、使用者教育訓練規劃與執行、跨部門溝通協調、專案成果管理。成功將教育訓練滿意度從 70% 提升至 93%，協助專案榮獲政府資訊應用類獎項。',
    
    timeline: '2019年 - 2024年（共 5+ 年，持續營運與優化）',
    
    teamSize: '15+ 人團隊（包含後端工程師、前端工程師、GIS 工程師、UI/UX 設計師、資料分析師、QA、PM...等）',
    
    projectScope: '直轄市級基礎設施管理系統，整合 449,021 筆設施資料，服務多個業務科室與外部協作單位',
    
    hasWorkLifecycleDiagram: true,
    hasUserDataReviewDiagram: true,
    hasPRDSpecificationDiagram: true,
    hasInteractivePrototype: true
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}