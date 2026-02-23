import blurredImage from 'figma:asset/366478590c6615153994e36729201aaecddf2a66.png';
import { FileText, CheckCircle2, AlertCircle, Upload, Eye, XCircle, ArrowRight, ChevronDown } from 'lucide-react';

// Arrow Component - Modern Solid Arrow Style
const ArrowDown = () => (
  <div className="flex justify-center items-center py-6 relative z-10">
    <svg width="40" height="60" viewBox="0 0 40 60" className="w-10 h-14">
      {/* Vertical line */}
      <line x1="20" y1="8" x2="20" y2="42" stroke="#695aa6" strokeWidth="3" strokeLinecap="round" />
      {/* Arrow head - solid triangle */}
      <path d="M 20 52 L 14 42 L 26 42 Z" fill="#695aa6" />
    </svg>
  </div>
);

export default function FunctionPathDiagram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-8">
        <h2 
          className="text-3xl text-white mb-2"
          style={{ fontFamily: "'Leckerli One', sans-serif" }}
        >
          功能路徑圖：驗收作業流程
        </h2>
        <p 
          className="text-white/90 text-base"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          展示完整的專案驗收作業流程，包含多方審核機制與決策路徑
        </p>
      </div>

      {/* Content */}
      <div className="p-8 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Blurred Original Image */}
          <div className="flex flex-col">
            <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <h3 
                  className="text-xl font-bold text-gray-700"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  原始專案功能路徑圖
                </h3>
              </div>
              <p 
                className="text-sm text-gray-500"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                內容已模糊處理以保護機密資訊
              </p>
            </div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-md flex-1">
              <img 
                src={blurredImage}
                alt="原始功能路徑圖（模糊）"
                className="w-full h-full object-cover"
                style={{ filter: 'blur(6px) brightness(1.0)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="bg-white/95 px-6 py-3 rounded-lg shadow-xl border-2 border-gray-300">
                  <p 
                    className="text-gray-700 text-base font-bold text-center"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    🔒 保密資訊已模糊化處理
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Redrawn Function Path Diagram */}
          <div className="flex flex-col">
            <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-[#695aa6] rounded-full"></div>
                <h3 
                  className="text-xl font-bold text-[#695aa6]"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  示範：專案驗收作業功能路徑
                </h3>
              </div>
              <p 
                className="text-sm text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                通用範例，已將敏感字眼替換為通用術語
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-auto border-2 border-[#695aa6] flex-1">
              <div className="p-6 min-w-[500px]">
                {/* Function Path Title */}
                <div className="bg-gradient-to-r from-[#695aa6] to-[#8b7bb8] rounded-xl p-4 mb-6 shadow-md">
                  <h4 
                    className="text-base font-bold text-white text-center"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    📋 功能路徑：驗收管理 / 驗收確認及管理 / B3.4 成果文件管理
                  </h4>
                </div>

                <div className="relative bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
                  {/* Swimlane Labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-b from-[#695aa6] to-[#543d8d] rounded-l-xl flex flex-col overflow-hidden">
                    <div className="flex-1 flex items-center justify-center border-b-2 border-white/30 py-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xl mb-1">👤</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>專</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>案</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>負</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>責</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>人</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center border-b-2 border-white/30 py-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xl mb-1">🏢</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>管</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>理</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>單</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>位</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center py-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xl mb-1">✅</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>審</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>核</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>單</span>
                        <span className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>位</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Content */}
                  <div className="ml-28">
                    {/* Start */}
                    <div className="mb-5 flex justify-center">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-700 rounded-full px-6 py-3 shadow-lg">
                        <p className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                          🚀 開始：成果文件上傳
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mb-5 flex justify-center">
                      <ArrowDown />
                    </div>

                    {/* Step 1: 專案負責人區域 */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-blue-400 rounded-xl p-4 mb-5 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Upload size={18} className="text-blue-600" />
                          <p className="text-sm font-bold text-blue-800" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            步驟 1：上傳成果文件
                          </p>
                        </div>
                        <div className="ml-6 space-y-1">
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 填寫文件基本資料（標題、類別、版本）
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 上傳 PDF/圖檔等附件（限制 50MB）
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 設定文件存取權限
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="mb-5 flex justify-center">
                        <ArrowDown />
                      </div>

                      {/* Decision Diamond */}
                      <div className="relative mx-auto w-64 h-48 mb-5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-48 h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 shadow-lg transform rotate-45"
                          ></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <AlertCircle size={20} className="text-yellow-700 mb-2" />
                          <p className="text-sm font-bold text-yellow-800 text-center px-8" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            資料是否完整？
                          </p>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            <div className="flex items-center gap-1 text-red-600">
                              <XCircle size={12} />
                              <span>否 → 補正</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle2 size={12} />
                              <span>是 → 送審</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mb-5 flex justify-center">
                      <ArrowDown />
                    </div>

                    {/* Step 2: 管理單位區域 */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 rounded-xl p-4 mb-5 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye size={18} className="text-green-600" />
                          <p className="text-sm font-bold text-green-800" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            步驟 2：初審 - 文件格式檢查
                          </p>
                        </div>
                        <div className="ml-6 space-y-1">
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 檢查文件完整性與必填欄位
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 確認格式符合規範（PDF、命名規則）
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 驗證附件可讀性與檔案大小
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="mb-5 flex justify-center">
                        <ArrowDown />
                      </div>

                      {/* Decision Diamond */}
                      <div className="relative mx-auto w-64 h-48 mb-5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 border-4 border-orange-500 shadow-lg transform rotate-45"
                          ></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <AlertCircle size={20} className="text-orange-700 mb-2" />
                          <p className="text-sm font-bold text-orange-800 text-center px-8" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            初審是否通過？
                          </p>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            <div className="flex items-center gap-1 text-red-600">
                              <XCircle size={12} />
                              <span>退回修正</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle2 size={12} />
                              <span>送複審</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mb-5 flex justify-center">
                      <ArrowDown />
                    </div>

                    {/* Step 3: 審核單位區域 */}
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-2 border-purple-400 rounded-xl p-4 mb-5 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText size={18} className="text-purple-600" />
                          <p className="text-sm font-bold text-purple-800" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            步驟 3：複審 - 內容實質查
                          </p>
                        </div>
                        <div className="ml-6 space-y-1">
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 審查文件內容正確性與完整度
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 確認符合驗收標準與契約要求
                          </p>
                          <p className="text-xs text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            • 評估文件品質與可用性
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="mb-5 flex justify-center">
                        <ArrowDown />
                      </div>

                      {/* Decision Diamond */}
                      <div className="relative mx-auto w-64 h-48 mb-5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-48 h-48 bg-gradient-to-br from-pink-100 to-pink-200 border-4 border-pink-500 shadow-lg transform rotate-45"
                          ></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <AlertCircle size={20} className="text-pink-700 mb-2" />
                          <p className="text-sm font-bold text-pink-800 text-center px-8" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            複審是否通過？
                          </p>
                          <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            <div className="flex items-center gap-1 text-red-600">
                              <XCircle size={12} />
                              <span>退回修正</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle2 size={12} />
                              <span>核准</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="mb-5 flex justify-center">
                        <ArrowDown />
                      </div>

                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-xl p-4 shadow-md">
                        <div className="flex items-center gap-2 justify-center">
                          <CheckCircle2 size={20} className="text-green-600" />
                          <p className="text-sm font-bold text-green-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                            ✅ 核准通過，文件歸檔並通知相關人員
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mb-5 flex justify-center">
                      <ArrowDown />
                    </div>

                    {/* End */}
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-gray-700 to-gray-900 border-2 border-gray-900 rounded-full px-6 py-3 shadow-lg">
                        <p className="text-sm font-bold text-white" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                          🏁 結束：完成驗收作業
                        </p>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="mt-8 pt-6 border-t-2 border-purple-300">
                      <p className="text-xs font-bold mb-3 text-[#695aa6]" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                        📌 圖例說明：
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-xs" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-100 border-2 border-blue-400 rounded"></div>
                          <span className="text-gray-700">作業流程（專案負責人）</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded transform rotate-45"></div>
                          <span className="text-gray-700">決策判斷點</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded"></div>
                          <span className="text-gray-700">管理審核（管理單位）</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-100 border-2 border-purple-400 rounded"></div>
                          <span className="text-gray-700">複審核准（審核單位）</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-[#695aa6]">
          <h4 
            className="text-lg font-bold text-[#695aa6] mb-3"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            💡 流程設計重點
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "'Patrick Hand', cursive" }}>
            <div className="flex items-start gap-2">
              <ArrowRight className="text-[#695aa6] flex-shrink-0 mt-0.5" size={16} />
              <p className="text-gray-700">
                <span className="font-bold">多層審核機制</span>採用三階段審核，確保文件品質與合規性
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="text-[#695aa6] flex-shrink-0 mt-0.5" size={16} />
              <p className="text-gray-700">
                <span className="font-bold">明確責任歸屬：</span>使用泳道圖清楚區分各單位職責範圍
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="text-[#695aa6] flex-shrink-0 mt-0.5" size={16} />
              <p className="text-gray-700">
                <span className="font-bold">退回修正機制：</span>在每個決策點設計退回路徑，確保品質控管
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}