export default function Experience() {
  const experiences = [
    {
      position: 'right',
      title: 'UI/UX Designer',
      company: '日陞空間資訊股份公司',
      period: '2023.03 – 至今',
      description: '負責 2 項政府大型 B2B 系統之產品。',
      highlights: [
        '0-1 產品落地與獲獎：獨立主導 24 個系統模組，團隊專案曾榮獲第 21 屆金圖獎「應用系統獎」。',
        '需求工程與規格定義：參與利害關係人會議，將抽象需求解構為技術可執行的 PRD 與 User Stories，達成 100% 準時交付率。',
        '滿意度與成本優化：透過迭代優化，將使用者滿意度從 70% 提升至 93%；建立內部 UI 設計規範與模組化，縮短團隊 10-20% 的前期溝通時程。',
      ],
      projects: [
        {
          name: '直轄市級工程履約管理系統',
          details: '規模涵蓋 89 個大型功能模組與跨平台 App 的企業級管理系統。整合 5+ 個政府單位分散且衝突的需求，獨立產出 11 個功能模組的 PRD 與 Mockup。',
        },
        {
          name: '城市基礎設施管理系統 (GIS-based)',
          details: '規模 5+ 年的持續營運專案。將複雜的管線流程簡化，設計直觀的操作介面，教育訓練滿意度從 70% 提升至 93%，協助該系統榮獲第 21 屆金圖獎「應用系統獎」。',
        },
      ],
    },
    {
      position: 'left',
      title: '職能重塑與專向進修',
      company: 'Professional Development',
      period: '2021.01 – 2022.12',
      description: '針對 PM 核心硬實力（技術理解力與 UX 研究）進行全職深度進修，來降低設計與開發間的溝通鴻溝。',
      highlights: [
        '銀色大門-老人送餐平台 (UXY 自學計畫)：運用親和圖、行為光譜與顧客旅程地圖挖掘痛點，並透過 Maze 執行使用者行為數據分析。使用 Figma 製作高擬真互動原型。',
        'Lidemy 程式導師實驗計畫：理解 JavaScript、HTML/CSS 基礎，了解前後端 API 溝通規範。透過理解程式架構，能精準與工程師評估開發時程與技術可行性。',
      ],
    },
    {
      position: 'right',
      title: '北區行政內勤',
      company: '恩納德生技有限公司',
      period: '2019.03 – 2020.06',
      description: '負責營運流程優化與跨部門協調。',
      highlights: [
        '流程自動化：分析醫療產品痛點，從 0 到 1 建立新產品服務流程 SOP，提升醫院端產品認證審查效率。',
        '需求整合與客戶排除：擔任業務與客戶橋樑，透過引導式訪談精準定位痛點，提供解決方案並優化合約標案製作流程。',
        '數據與供應鏈管理：使用 ERP 系統管理高單價骨材庫存，負責財務報表製作，確保出貨與採購準確率 100%。',
      ],
    },
    {
      position: 'left',
      title: '計畫專員',
      company: '國際教育交流協會駐華辦事處',
      period: '2018.07 – 2019.01',
      description: '專案策劃與執行：負責海外計畫說明會與雇主見面會之活動規劃，控管專案時程與執行進度。',
    },
  ];

  return (
    <section id="experience" className="py-[30px] bg-[#F1F2F6]">
      <h1 className="text-center text-black text-3xl mb-8">
        Professional Experience
      </h1>
      <div className="w-[90%] max-w-[1200px] py-[50px] my-[50px] mx-auto relative overflow-hidden">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 -ml-[1px] w-[2px] h-full bg-[#CCD1D9] z-[1] md:block hidden" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`w-full md:w-[calc(50%+8px)] flex justify-between clear-both mb-10 ${
              exp.position === 'right' ? 'md:float-right' : 'md:float-left md:flex-row-reverse'
            }`}
          >
            {/* Marker */}
            <div className="w-5 h-5 rounded-full border-4 border-[#F5F7FA] bg-[#695aa6] mt-3 z-[9999] hidden md:block flex-shrink-0" />

            {/* Content */}
            <div className="w-full md:w-[95%] px-6 text-[#666] mb-6 bg-white rounded-lg shadow-sm p-5">
              {/* Header Section */}
              <div className="border-b border-gray-200 pb-3 mb-4">
                <h3 className="text-xl font-semibold text-[#695aa6] mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="text-base text-[#555]">
                    {exp.company}
                  </span>
                  {exp.period && (
                    <span className="text-sm text-[#999] italic">
                      📅 {exp.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] leading-[1.7em] text-[#666] mb-3">
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && (
                <div className="mb-4">
                  <div className="space-y-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <span className="text-[#695aa6] text-lg mt-0.5 flex-shrink-0">▪</span>
                        <span className="text-[15px] leading-[1.6em] text-[#555]">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {exp.projects && (
                <div className="mt-4 space-y-3">
                  {exp.projects.map((project, idx) => (
                    <div key={idx} className="bg-[#f9f9f9] rounded-lg p-4">
                      <div className="text-base font-semibold text-[#695aa6] mb-2">
                        📌 {project.name}
                      </div>
                      <div className="text-[14px] leading-[1.6em] text-[#666]">
                        {project.details}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}