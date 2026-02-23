import originalImage from '../assets/33db2438baad27c7d173bfe64ff2c8234fbc5656.png';
export default function UserDataReviewDiagram() {
  return <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl mb-6 text-[#695aa6] font-leckerli">
        資料建檔查核流程圖
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Original Image with Blur */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <h4 className="text-lg text-gray-600 font-patrick">
              原始文件（保密處理）
            </h4>
          </div>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50 relative">
            <img src={originalImage} alt="原始資料建檔查核流程圖（已模糊處理）" className="w-full h-auto" style={{
            filter: 'blur(8px)'
          }} />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white/90 px-6 py-3 rounded-lg shadow-lg">
                <p className="text-gray-700 text-center font-patrick">
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
            <h4 className="text-lg text-[#695aa6] font-patrick">
              去敏感化流程圖
            </h4>
          </div>
          <div className="border-2 border-[#695aa6] rounded-lg overflow-hidden bg-white">
            <svg viewBox="0 0 600 1100" className="w-full h-auto">
              {/* Background */}
              <rect width="600" height="1100" fill="#f3f0ff" />
              
              {/* Title Bar */}
              <rect x="20" y="15" width="560" height="35" fill="#695aa6" rx="4" />
              <text x="300" y="38" fontSize="16" fontWeight="bold" fill="#fff" textAnchor="middle">
                B2-4 資料建檔作業-查核項目表
              </text>

              {/* Swimlanes Labels */}
              {/* 執行單位 */}
              <rect x="25" y="70" width="45" height="110" fill="#8b7bb8" rx="4" />
              <text x="47.5" y="115" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle" writingMode="tb">
                執行單位
              </text>

              {/* 監督單位 */}
              <rect x="25" y="250" width="45" height="140" fill="#8b7bb8" rx="4" />
              <text x="47.5" y="310" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle" writingMode="tb">
                監督單位
              </text>

              {/* 管理單位A */}
              <rect x="25" y="460" width="45" height="320" fill="#8b7bb8" rx="4" />
              <text x="47.5" y="600" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle">
                <tspan x="47.5" dy="0">管</tspan>
                <tspan x="47.5" dy="16">理</tspan>
                <tspan x="47.5" dy="16">單</tspan>
                <tspan x="47.5" dy="16">位</tspan>
                <tspan x="47.5" dy="16">A</tspan>
              </text>

              {/* 管理單位B */}
              <rect x="25" y="850" width="45" height="140" fill="#8b7bb8" rx="4" />
              <text x="47.5" y="895" fontSize="12" fontWeight="600" fill="#fff" textAnchor="middle">
                <tspan x="47.5" dy="0">管</tspan>
                <tspan x="47.5" dy="16">理</tspan>
                <tspan x="47.5" dy="16">單</tspan>
                <tspan x="47.5" dy="16">位</tspan>
                <tspan x="47.5" dy="16">B</tspan>
              </text>

              {/* Dotted Separator Lines */}
              <line x1="20" y1="190" x2="580" y2="190" stroke="#a594d1" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="20" y1="400" x2="580" y2="400" stroke="#a594d1" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="20" y1="790" x2="580" y2="790" stroke="#a594d1" strokeWidth="1.5" strokeDasharray="4,4" />

              {/* Flow Steps */}
              
              {/* 1. 開始 (Start) */}
              <ellipse cx="300" cy="95" rx="45" ry="25" fill="#fff" stroke="#695aa6" strokeWidth="2" />
              <text x="300" y="100" fontSize="13" fontWeight="600" fill="#695aa6" textAnchor="middle">
                開始
              </text>

              {/* Arrow 1->2 */}
              <path d="M 300 120 L 300 145" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 2. 檢視單月用戶檔清冊 */}
              <rect x="230" y="145" width="140" height="55" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="300" y="163" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                檢視資料清冊
              </text>
              <text x="300" y="180" fontSize="10" fill="#8b7bb8" textAnchor="middle">
                狀態：尚未提送
              </text>
              <text x="300" y="194" fontSize="9" fill="#666" textAnchor="middle">
                (系統顯示待處理項目)
              </text>

              {/* Arrow 2->3 */}
              <path d="M 370 172 L 410 172" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 3. 匯出查核項目表 */}
              <rect x="410" y="145" width="120" height="55" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="163" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                匯出
              </text>
              <text x="470" y="178" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                查核項目表
              </text>
              <text x="470" y="194" fontSize="9" fill="#666" textAnchor="middle">
                (產生審查文件)
              </text>

              {/* Arrow 3->4 */}
              <path d="M 300 200 L 300 225" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 4. 提送審查 */}
              <rect x="230" y="225" width="140" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="300" y="245" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                提送審查
              </text>
              <text x="300" y="262" fontSize="9" fill="#666" textAnchor="middle">
                (送出審查申請)
              </text>

              {/* Arrow 4<->5 bidirectional */}
              <path d="M 370 250 L 410 250" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <path d="M 410 242 L 370 242" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 5. 退回確正 */}
              <rect x="410" y="225" width="120" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="245" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                退回確正
              </text>
              <text x="470" y="262" fontSize="9" fill="#666" textAnchor="middle">
                (修正後重新提送)
              </text>

              {/* Arrow 4->6 */}
              <path d="M 300 275 L 300 305" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 6. 確認各項審查內容 */}
              <rect x="230" y="305" width="140" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="300" y="325" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                確認各項
              </text>
              <text x="300" y="340" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                審查內容
              </text>

              {/* Arrow 6->7 */}
              <path d="M 300 355 L 300 420" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 7. 增算各現查核項目 */}
              <rect x="230" y="420" width="140" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="300" y="440" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                增算
              </text>
              <text x="300" y="455" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                各現查核項目
              </text>

              {/* Arrow 7->8 */}
              <path d="M 300 470 L 300 500" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 8. 審查結果 (Diamond 1) */}
              <path d="M 300 500 L 350 540 L 300 580 L 250 540 Z" fill="#fff" stroke="#695aa6" strokeWidth="2" />
              <text x="300" y="538" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                審查結果
              </text>
              <text x="300" y="553" fontSize="9" fill="#666" textAnchor="middle">
                (判斷)
              </text>

              {/* Arrow from Diamond 1 -> 不通過 */}
              <path d="M 350 540 L 410 540" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="375" y="532" fontSize="10" fill="#695aa6">
                不通過
              </text>

              {/* 填寫審查意見 Box 1 */}
              <rect x="410" y="515" width="120" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="535" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                填寫審查意見
              </text>
              <text x="470" y="552" fontSize="9" fill="#666" textAnchor="middle">
                (記錄問題點)
              </text>

              {/* Feedback arrow */}
              <path d="M 530 560 L 550 560 L 550 250 L 530 250" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* Arrow from Diamond 1 -> 通過 (down) */}
              <path d="M 300 580 L 300 610" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="310" y="598" fontSize="10" fill="#695aa6">
                通過
              </text>

              {/* 9. 審查結果 (Diamond 2) */}
              <path d="M 300 610 L 350 650 L 300 690 L 250 650 Z" fill="#fff" stroke="#695aa6" strokeWidth="2" />
              <text x="300" y="648" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                審查結果
              </text>
              <text x="300" y="663" fontSize="9" fill="#666" textAnchor="middle">
                (判斷)
              </text>

              {/* Arrow from Diamond 2 -> 不通過 */}
              <path d="M 350 650 L 410 650" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="375" y="642" fontSize="10" fill="#695aa6">
                不通過
              </text>

              {/* 填寫審查意見 Box 2 */}
              <rect x="410" y="625" width="120" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="645" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                填寫審查意見
              </text>
              <text x="470" y="662" fontSize="9" fill="#666" textAnchor="middle">
                (記錄問題點)
              </text>

              {/* Feedback arrow 2 */}
              <path d="M 530 670 L 555 670 L 555 250 L 530 250" stroke="#695aa6" strokeWidth="2" fill="none" />

              {/* Arrow from Diamond 2 -> 通過 (down) */}
              <path d="M 300 690 L 300 720" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="310" y="708" fontSize="10" fill="#695aa6">
                通過
              </text>

              {/* 10. 審查結果 (Diamond 3) */}
              <path d="M 300 720 L 350 760 L 300 800 L 250 760 Z" fill="#fff" stroke="#695aa6" strokeWidth="2" />
              <text x="300" y="758" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                審查結果
              </text>
              <text x="300" y="773" fontSize="9" fill="#666" textAnchor="middle">
                (判斷)
              </text>

              {/* Arrow from Diamond 3 -> 不通過 */}
              <path d="M 350 760 L 410 760" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="375" y="752" fontSize="10" fill="#695aa6">
                不通過
              </text>

              {/* 填寫審查意見 Box 3 */}
              <rect x="410" y="735" width="120" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="755" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                填寫審查意見
              </text>
              <text x="470" y="772" fontSize="9" fill="#666" textAnchor="middle">
                (記錄問題點)
              </text>

              {/* Feedback arrow 3 */}
              <path d="M 530 780 L 560 780 L 560 250 L 530 250" stroke="#695aa6" strokeWidth="2" fill="none" />

              {/* Arrow from Diamond 3 -> 通過 (down) */}
              <path d="M 300 800 L 300 830" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="310" y="818" fontSize="10" fill="#695aa6">
                通過
              </text>

              {/* 11. 開徵結果 (Diamond 4) */}
              <path d="M 300 830 L 350 870 L 300 910 L 250 870 Z" fill="#fff" stroke="#695aa6" strokeWidth="2" />
              <text x="300" y="868" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                開徵結果
              </text>
              <text x="300" y="883" fontSize="9" fill="#666" textAnchor="middle">
                (判斷)
              </text>

              {/* Arrow from Diamond 4 -> 不通過 */}
              <path d="M 350 870 L 410 870" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="375" y="862" fontSize="10" fill="#695aa6">
                不通過
              </text>

              {/* 填寫審查意見 Box 4 */}
              <rect x="410" y="845" width="120" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="470" y="865" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                填寫審查意見
              </text>
              <text x="470" y="882" fontSize="9" fill="#666" textAnchor="middle">
                (記錄問題點)
              </text>

              {/* Feedback arrow 4 */}
              <path d="M 530 890 L 565 890 L 565 250 L 530 250" stroke="#695aa6" strokeWidth="2" fill="none" />

              {/* Arrow from Diamond 4 -> 通過 (down) */}
              <path d="M 300 910 L 300 940" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />
              <text x="310" y="928" fontSize="10" fill="#695aa6">
                通過
              </text>

              {/* 12. 增算開徵文號與日期 */}
              <rect x="230" y="940" width="140" height="50" fill="#fff" stroke="#695aa6" strokeWidth="2" rx="4" />
              <text x="300" y="960" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                增算
              </text>
              <text x="300" y="975" fontSize="11" fontWeight="600" fill="#695aa6" textAnchor="middle">
                開徵文號與日期
              </text>

              {/* Arrow 12->13 */}
              <path d="M 300 990 L 300 1020" stroke="#695aa6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-user)" />

              {/* 13. 開徵完成 (End) */}
              <ellipse cx="300" cy="1045" rx="55" ry="28" fill="#fff" stroke="#695aa6" strokeWidth="2.5" />
              <text x="300" y="1050" fontSize="13" fontWeight="600" fill="#695aa6" textAnchor="middle">
                開徵完成
              </text>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead-user" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                  <path d="M0,0 L0,5 L7,2.5 z" fill="#695aa6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>;
}