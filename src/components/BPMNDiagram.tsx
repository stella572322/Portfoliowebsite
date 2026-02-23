import blurredImage from 'figma:asset/cc466b5338593319c6651b8b4346b626fee6f562.png';

export default function BPMNDiagram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-6">
        <h2 
          className="text-3xl text-white"
          style={{ fontFamily: "'Leckerli One', sans-serif" }}
        >
          BPMN 圖（業務流程模型與標記法）
        </h2>
        <p 
          className="text-white/90 text-sm mt-2"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          左：原始專案示意｜右：通用系統範例（已去敏感化）
        </p>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Blurred Original Image */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h3 
                className="text-xl font-bold text-gray-700 text-center"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                原始專案 BPMN 圖
              </h3>
              <p 
                className="text-sm text-gray-500 text-center mt-1"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                （內容已模糊處理以保護機密資訊）
              </p>
            </div>
            <div className="relative w-full max-w-md bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img 
                src={blurredImage}
                alt="原始 BPMN 圖（模糊）"
                className="w-full h-auto"
                style={{ filter: 'blur(4px) brightness(1.0)' }}
              />
              <div className="absolute top-4 right-4">
                <div className="bg-black/70 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30">
                  <p 
                    className="text-white text-xs font-bold text-center"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    🔒 圖片模糊化處理
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Redrawn BPMN Diagram */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h3 
                className="text-xl font-bold text-gray-700 text-center"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                示範：專案管理系統流程
              </h3>
              <p 
                className="text-sm text-gray-500 text-center mt-1"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                （通用範例，已將敏感字眼替換為通用術語）
              </p>
            </div>
            
            <div className="w-full max-w-2xl bg-gray-50 rounded-lg p-4 shadow-md overflow-auto" style={{ backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              <svg width="900" height="1100" viewBox="0 0 900 1100" className="w-full h-auto">
                {/* Title */}
                <text 
                  x="450" 
                  y="30" 
                  textAnchor="middle" 
                  fontSize="18" 
                  fontWeight="bold"
                  fill="#333"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  BPMN 圖（階段性作業流程）
                </text>

                {/* Pool - Main Container */}
                <rect 
                  x="50" 
                  y="60" 
                  width="800" 
                  height="1000" 
                  fill="none" 
                  stroke="#333" 
                  strokeWidth="3"
                  rx="5"
                />

                {/* Pool Label */}
                <text 
                  x="70" 
                  y="90" 
                  fontSize="16" 
                  fontWeight="bold"
                  fill="#333"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  專案管理系統
                </text>

                {/* Lane 1 - 執行單位 */}
                <rect 
                  x="50" 
                  y="110" 
                  width="400" 
                  height="950" 
                  fill="#E3F2FD" 
                  stroke="#1976D2" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <text 
                  x="70" 
                  y="140" 
                  fontSize="14" 
                  fontWeight="bold"
                  fill="#1976D2"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  執行單位
                </text>

                {/* Lane 2 - 監督單位 */}
                <rect 
                  x="450" 
                  y="110" 
                  width="200" 
                  height="950" 
                  fill="#FFF3E0" 
                  stroke="#F57C00" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <text 
                  x="470" 
                  y="140" 
                  fontSize="14" 
                  fontWeight="bold"
                  fill="#F57C00"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  監督單位
                </text>

                {/* Lane 3 - 主管單位 */}
                <rect 
                  x="650" 
                  y="110" 
                  width="200" 
                  height="950" 
                  fill="#F3E5F5" 
                  stroke="#7B1FA2" 
                  strokeWidth="2"
                  opacity="0.3"
                />
                <text 
                  x="670" 
                  y="140" 
                  fontSize="14" 
                  fontWeight="bold"
                  fill="#7B1FA2"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  主管單位
                </text>

                {/* Horizontal Dividers for Phases */}
                <line x1="50" y1="160" x2="850" y2="160" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="60" y="175" fontSize="11" fill="#666" style={{ fontFamily: "'Patrick Hand', cursive" }}>段 1：選擇作業類型</text>

                <line x1="50" y1="310" x2="850" y2="310" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="60" y="306" fontSize="11" fill="#666" style={{ fontFamily: "'Patrick Hand', cursive" }}>階段 2：提交及上傳</text>

                <line x1="50" y1="520" x2="850" y2="520" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="60" y="535" fontSize="11" fill="#666" style={{ fontFamily: "'Patrick Hand', cursive" }}>階段 3：提交審核</text>

                <line x1="50" y1="680" x2="850" y2="680" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="60" y="695" fontSize="11" fill="#666" style={{ fontFamily: "'Patrick Hand', cursive" }}>階段 4：填寫資料及上傳文件</text>

                <line x1="50" y1="900" x2="850" y2="900" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="60" y="915" fontSize="11" fill="#666" style={{ fontFamily: "'Patrick Hand', cursive" }}>階段 5：提交審核</text>

                {/* Start Event - Circle */}
                <circle cx="250" cy="220" r="20" fill="white" stroke="#4CAF50" strokeWidth="3" />
                <text x="250" y="195" textAnchor="middle" fontSize="11" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>開始</text>

                {/* Arrow */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#666" />
                  </marker>
                </defs>

                {/* Flow 1: Start to Task 1 */}
                <line x1="250" y1="240" x2="250" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 1: 選擇部分施工 */}
                <rect x="180" y="280" width="140" height="60" rx="10" fill="white" stroke="#1976D2" strokeWidth="2" />
                <text x="250" y="307" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>選擇</text>
                <text x="250" y="322" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>部分作業項目</text>

                {/* Flow 2: Task 1 to Task 2 */}
                <line x1="250" y1="340" x2="250" y2="380" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 2: 填寫報告表 */}
                <rect x="180" y="380" width="140" height="60" rx="10" fill="white" stroke="#1976D2" strokeWidth="2" />
                <text x="250" y="407" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>填寫</text>
                <text x="250" y="422" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>「報告表」</text>

                {/* Flow 3: Task 2 to Task 3 */}
                <line x1="250" y1="440" x2="250" y2="480" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 3: 上傳附件 */}
                <rect x="180" y="480" width="140" height="60" rx="10" fill="white" stroke="#1976D2" strokeWidth="2" />
                <text x="250" y="507" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>上傳「附件」+</text>
                <text x="250" y="522" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>「其他文件」</text>

                {/* Flow 4: Task 3 to Task 4 */}
                <line x1="250" y1="540" x2="250" y2="580" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 4: 前置審核 */}
                <rect x="180" y="580" width="140" height="60" rx="10" fill="white" stroke="#1976D2" strokeWidth="2" />
                <text x="250" y="607" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>前置審核</text>

                {/* Flow 5: Task 4 to Lane 2 */}
                <line x1="320" y1="610" x2="550" y2="750" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />

                {/* Task 5: 上傳報告等日記 (Lane 2) */}
                <rect x="480" y="750" width="140" height="80" rx="10" fill="white" stroke="#F57C00" strokeWidth="2" />
                <text x="550" y="772" textAnchor="middle" fontSize="11" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>上傳「報告」、</text>
                <text x="550" y="786" textAnchor="middle" fontSize="11" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>「日記」+相關之</text>
                <text x="550" y="800" textAnchor="middle" fontSize="11" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>作業紀錄表</text>

                {/* Flow 6: Task 5 to Task 6 */}
                <line x1="550" y1="830" x2="550" y2="870" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 6: 填寫認證單 */}
                <rect x="480" y="870" width="140" height="60" rx="10" fill="white" stroke="#F57C00" strokeWidth="2" />
                <text x="550" y="897" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>填寫</text>
                <text x="550" y="912" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>「認證單」</text>

                {/* Flow 7: Task 6 split to Task 7 and 8 */}
                <line x1="550" y1="930" x2="550" y2="960" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
                
                {/* Gateway Diamond - Parallel */}
                <g transform="translate(550, 985) rotate(45)">
                  <rect x="-20" y="-20" width="40" height="40" fill="white" stroke="#666" strokeWidth="2" />
                </g>
                <text x="550" y="1018" textAnchor="middle" fontSize="18" fill="#666" fontWeight="bold">+</text>

                {/* Flow to Task 7 */}
                <line x1="530" y1="1010" x2="470" y2="1010" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 7: 審查審核 (Lane 2) */}
                <rect x="360" y="980" width="110" height="60" rx="10" fill="white" stroke="#F57C00" strokeWidth="2" />
                <text x="415" y="1007" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>審查審核</text>

                {/* Flow to Task 8 */}
                <line x1="570" y1="1010" x2="680" y2="1010" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Task 8: 核定審核 (Lane 3) */}
                <rect x="680" y="980" width="110" height="60" rx="10" fill="white" stroke="#7B1FA2" strokeWidth="2" />
                <text x="735" y="1007" textAnchor="middle" fontSize="12" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>核定審核</text>

                {/* Flow back to End */}
                <line x1="360" y1="1010" x2="280" y2="1010" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* End Event - Double Circle */}
                <circle cx="250" cy="1010" r="20" fill="white" stroke="#F44336" strokeWidth="3" />
                <circle cx="250" cy="1010" r="16" fill="white" stroke="#F44336" strokeWidth="3" />
                <text x="250" y="1050" textAnchor="middle" fontSize="11" fill="#333" style={{ fontFamily: "'Patrick Hand', cursive" }}>結束</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}