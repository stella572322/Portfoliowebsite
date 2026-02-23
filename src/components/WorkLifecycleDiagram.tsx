import originalImage from 'figma:asset/35b5789c2d837f27b437907d97838ddb2cd68815.png';

export default function WorkLifecycleDiagram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 
        className="text-2xl mb-6 text-[#695aa6]"
        style={{ fontFamily: "'Leckerli One', sans-serif" }}
      >
        作業流程生命週期圖
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Original Image with Blur */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <h4 
              className="text-lg text-gray-600"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              原始文件（保密處理）
            </h4>
          </div>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50 relative">
            <img 
              src={originalImage} 
              alt="原始作業流程圖（已模糊處理）"
              className="w-full h-auto"
              style={{ filter: 'blur(8px)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white/90 px-6 py-3 rounded-lg shadow-lg">
                <p 
                  className="text-gray-700 text-center"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  🔒 保密資訊已模糊化處理
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Redesigned Diagram */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#695aa6] rounded-full"></div>
            <h4 
              className="text-lg text-[#695aa6]"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              去敏感化流程圖
            </h4>
          </div>
          <div className="border-2 border-[#695aa6] rounded-lg overflow-hidden bg-white">
            <svg viewBox="0 0 1000 700" className="w-full h-auto">
              {/* Grid Background */}
              <defs>
                <pattern id="grid-gis" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="1000" height="700" fill="url(#grid-gis)"/>

              {/* Title */}
              <text x="30" y="35" fontSize="18" fontWeight="bold" fill="#333">
                (3) 作業流程關聯圖
              </text>

              {/* Header Row - Process Phases */}
              <rect x="150" y="60" width="840" height="40" fill="#4a5568" opacity="0.1"/>
              
              <text x="230" y="85" fontSize="13" fontWeight="600" fill="#2d3748" textAnchor="middle">
                現場資料建立
              </text>
              <text x="380" y="85" fontSize="13" fontWeight="600" fill="#2d3748" textAnchor="middle">
                提送審核階段
              </text>
              <text x="530" y="85" fontSize="13" fontWeight="600" fill="#2d3748" textAnchor="middle">
                監督審查階段
              </text>
              <text x="680" y="85" fontSize="13" fontWeight="600" fill="#2d3748" textAnchor="middle">
                資料維護階段
              </text>
              <text x="830" y="85" fontSize="13" fontWeight="600" fill="#2d3748" textAnchor="middle">
                統計應用階段
              </text>

              {/* Left Column - Roles/Units */}
              <rect x="15" y="120" width="130" height="90" fill="#fef3c7" stroke="#d69e2e" strokeWidth="1.5" rx="4"/>
              <text x="80" y="160" fontSize="13" fontWeight="600" fill="#744210" textAnchor="middle">
                執行單位
              </text>
              <text x="80" y="175" fontSize="11" fill="#744210" textAnchor="middle">
                (現場施工)
              </text>

              <rect x="15" y="230" width="130" height="90" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" rx="4"/>
              <text x="80" y="270" fontSize="13" fontWeight="600" fill="#1e40af" textAnchor="middle">
                監督單位
              </text>

              <rect x="15" y="340" width="130" height="90" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" rx="4"/>
              <text x="80" y="375" fontSize="13" fontWeight="600" fill="#9f1239" textAnchor="middle">
                管理單位
              </text>
              <text x="80" y="390" fontSize="11" fill="#9f1239" textAnchor="middle">
                (A 部門)
              </text>

              <rect x="15" y="450" width="130" height="90" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" rx="4"/>
              <text x="80" y="485" fontSize="13" fontWeight="600" fill="#3730a3" textAnchor="middle">
                管理單位
              </text>
              <text x="80" y="500" fontSize="11" fill="#3730a3" textAnchor="middle">
                (B 部門)
              </text>

              <rect x="15" y="560" width="130" height="90" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" rx="4"/>
              <text x="80" y="595" fontSize="13" fontWeight="600" fill="#15803d" textAnchor="middle">
                查詢使用者
              </text>
              <text x="80" y="610" fontSize="11" fill="#15803d" textAnchor="middle">
                (儀表板)
              </text>

              {/* Process Boxes */}
              
              {/* Row 1 - 執行單位 */}
              <g>
                <rect x="170" y="130" width="120" height="70" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" rx="3"/>
                <text x="230" y="150" fontSize="11" fontWeight="600" fill="#7c2d12" textAnchor="middle">
                  F1.1
                </text>
                <text x="230" y="163" fontSize="9" fill="#7c2d12" textAnchor="middle">
                  現場工程資料
                </text>
                <text x="230" y="174" fontSize="9" fill="#7c2d12" textAnchor="middle">
                  登錄(APP)
                </text>
                <text x="230" y="185" fontSize="8" fill="#7c2d12" textAnchor="middle">
                  使用者可透過行動端登錄</text>
                <text x="230" y="196" fontSize="8" fill="#7c2d12" textAnchor="middle">
                  現場基本資訊與附件
                </text>
              </g>

              {/* Horizontal Flow Bar - 可新增或修改資料階段 */}
              <rect x="170" y="215" width="510" height="30" fill="#86efac" opacity="0.3" stroke="#16a34a" strokeWidth="1" rx="3"/>
              <text x="425" y="233" fontSize="12" fontWeight="600" fill="#15803d" textAnchor="middle">
                可新增或修改資料階段
              </text>

              {/* Row 2 - 執行單位 (continued) */}
              <g>
                <rect x="320" y="255" width="130" height="70" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" rx="3"/>
                <text x="385" y="275" fontSize="11" fontWeight="600" fill="#1e3a8a" textAnchor="middle">
                  F1.2
                </text>
                <text x="385" y="288" fontSize="9" fill="#1e3a8a" textAnchor="middle">
                  工程確認提送(WEB)
                </text>
                <text x="385" y="299" fontSize="8" fill="#1e3a8a" textAnchor="middle">
                  審核前資料整理
                </text>
                <text x="385" y="310" fontSize="8" fill="#1e3a8a" textAnchor="middle">
                  與檢核確認
                </text>

                <rect x="550" y="255" width="130" height="70" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" rx="3"/>
                <text x="615" y="275" fontSize="11" fontWeight="600" fill="#1e3a8a" textAnchor="middle">
                  F2.1
                </text>
                <text x="615" y="288" fontSize="9" fill="#1e3a8a" textAnchor="middle">
                  資料建檔作業(WEB)
                </text>
                <text x="615" y="299" fontSize="8" fill="#1e3a8a" textAnchor="middle">
                  彙整後建檔
                </text>
                <text x="615" y="310" fontSize="8" fill="#1e3a8a" textAnchor="middle">
                  與歸檔管理
                </text>
              </g>

              {/* Row 3 - 監督單位 */}
              <g>
                <rect x="470" y="350" width="130" height="70" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="1.5" rx="3"/>
                <text x="535" y="370" fontSize="11" fontWeight="600" fill="#312e81" textAnchor="middle">
                  F1.3
                </text>
                <text x="535" y="383" fontSize="9" fill="#312e81" textAnchor="middle">
                  工程審核確認(WEB)
                </text>
                <text x="535" y="394" fontSize="8" fill="#312e81" textAnchor="middle">
                  審核提送資料內容
                </text>
                <text x="535" y="405" fontSize="8" fill="#312e81" textAnchor="middle">
                  並確認流程
                </text>

                <rect x="470" y="460" width="130" height="70" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="1.5" rx="3"/>
                <text x="535" y="480" fontSize="11" fontWeight="600" fill="#312e81" textAnchor="middle">
                  F1.4
                </text>
                <text x="535" y="493" fontSize="9" fill="#312e81" textAnchor="middle">
                  查核與回饋(WEB)
                </text>
                <text x="535" y="504" fontSize="8" fill="#312e81" textAnchor="middle">
                  檢查資料品質
                </text>
                <text x="535" y="515" fontSize="8" fill="#312e81" textAnchor="middle">
                  並提供回饋
                </text>
              </g>

              {/* Row 4 - 管理單位 A */}
              <g>
                <rect x="720" y="350" width="130" height="60" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" rx="3"/>
                <text x="785" y="368" fontSize="11" fontWeight="600" fill="#831843" textAnchor="middle">
                  F2.2
                </text>
                <text x="785" y="381" fontSize="9" fill="#831843" textAnchor="middle">
                  資料維護作業(WEB)
                </text>
                <text x="785" y="392" fontSize="8" fill="#831843" textAnchor="middle">
                  維護與更新資料庫
                </text>
                <text x="785" y="403" fontSize="8" fill="#831843" textAnchor="middle">
                  確保資料正確性
                </text>
              </g>

              {/* Row 5 - 管理單位 B */}
              <g>
                <rect x="720" y="460" width="130" height="70" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" rx="3"/>
                <text x="785" y="480" fontSize="11" fontWeight="600" fill="#4c1d95" textAnchor="middle">
                  F2.3
                </text>
                <text x="785" y="493" fontSize="9" fill="#4c1d95" textAnchor="middle">
                  資料狀態管理(WEB)
                </text>
                <text x="785" y="504" fontSize="8" fill="#4c1d95" textAnchor="middle">
                  依業務需求管理
                </text>
                <text x="785" y="515" fontSize="8" fill="#4c1d95" textAnchor="middle">
                  資料狀態與權限
                </text>
              </g>

              {/* Row 6 - 查���使用者 */}
              <g>
                <rect x="870" y="570" width="115" height="70" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" rx="3"/>
                <text x="927" y="590" fontSize="11" fontWeight="600" fill="#15803d" textAnchor="middle">
                  F2.4
                </text>
                <text x="927" y="603" fontSize="9" fill="#15803d" textAnchor="middle">
                  統計查詢應用
                </text>
                <text x="927" y="614" fontSize="9" fill="#15803d" textAnchor="middle">
                  (儀表板/網頁)
                </text>
                <text x="927" y="625" fontSize="8" fill="#15803d" textAnchor="middle">
                  提供數據查詢
                </text>
                <text x="927" y="636" fontSize="8" fill="#15803d" textAnchor="middle">
                  與統計分析功能
                </text>
              </g>

              {/* Flow Arrows */}
              {/* F1.1 -> F1.2 */}
              <path d="M 290 165 L 320 290" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-blue)"/>
              
              {/* F1.2 -> F2.1 */}
              <path d="M 450 290 L 550 290" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-blue)"/>
              
              {/* F2.1 -> F1.3 */}
              <path d="M 615 325 L 535 350" stroke="#4f46e5" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-purple)"/>
              
              {/* F1.3 -> F1.4 */}
              <path d="M 535 420 L 535 460" stroke="#4f46e5" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-purple)"/>
              
              {/* F2.1 -> F2.2 */}
              <path d="M 680 290 L 785 350" stroke="#db2777" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-pink)"/>
              
              {/* F2.2 -> F2.3 */}
              <path d="M 785 410 L 785 460" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-violet)"/>
              
              {/* F2.3 -> F2.4 */}
              <path d="M 850 495 L 870 605" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#arrow-gis-green)"/>

              {/* Arrow Markers */}
              <defs>
                <marker id="arrow-gis-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6"/>
                </marker>
                <marker id="arrow-gis-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#4f46e5"/>
                </marker>
                <marker id="arrow-gis-pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#db2777"/>
                </marker>
                <marker id="arrow-gis-violet" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#7c3aed"/>
                </marker>
                <marker id="arrow-gis-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#16a34a"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}