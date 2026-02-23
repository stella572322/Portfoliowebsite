import originalImage from '../assets/6f16fbee5ca6025a7cede9936653ba076a3587a0.png';

export default function PRDSpecificationDiagram() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 
        className="text-2xl mb-6 text-[#695aa6]"
        style={{ fontFamily: "'Leckerli One', sans-serif" }}
      >
        PRD 需求規格文件範例
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
              alt="原始 PRD 規格文件（已模糊處理）"
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

        {/* Right Side - Redesigned Specification Table */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#695aa6] rounded-full"></div>
            <h4 
              className="text-lg text-[#695aa6]"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              去敏感化規格文件
            </h4>
          </div>
          <div className="border-2 border-[#695aa6] rounded-lg overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* Header */}
                <thead>
                  <tr className="bg-[#695aa6] text-white">
                    <th className="border border-[#8b7bb8] px-3 py-2 font-semibold text-left">欄位</th>
                    <th className="border border-[#8b7bb8] px-3 py-2 font-semibold text-left">輸入方式</th>
                    <th className="border border-[#8b7bb8] px-3 py-2 font-semibold text-left">說明</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 - 資料類別 */}
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top">【資料類別】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">群組欄位：關聯 XX 資料</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">【必填欄位】</span><br/>
                      ● 需比對 XXXX 資料庫<br/>
                      ● 若 XXXX 則顯示相關資訊
                    </td>
                  </tr>

                  {/* Row 2 - 資料來源 */}
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top">【資料來源】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">【必填欄位】</span><br/>
                      按鈕點擊
                    </td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      載入 XX 資料庫內容，依據 XX 條件篩選顯示<br/>
                      <span className="text-blue-600">● 自動帶入 X 項欄位資訊</span>
                    </td>
                  </tr>

                  {/* Row 3-6 - Radio Options */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">項目 A</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">radio</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">1. 功能：點選此項，顯示 XX 資料欄位【若符合條件】</span> 需提供 XX 相關文件<br/>
                      2. 當點選此項，需觸發以下邏輯：<br/>
                      &nbsp;&nbsp;<span className="text-blue-600">● 顯示資訊：X 項必填欄位</span><br/>
                      &nbsp;&nbsp;● 驗證規則：檢核 XX 格式與完整性
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">項目 B</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">radio</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      功能：點選此項，輸入 XX 資訊，觸發以下邏輯：<br/>
                      1. 當資料 X ＞ 特定標準，顯示警示訊息<br/>
                      2. 當資料 Y 符合條件，自動帶入相關參數
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">項目 C</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">radio</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">1. 功能：點選此項，顯示 XX 資料欄位【若符合條件】</span> 需提供 XX 相關文件<br/>
                      2. 當點選此項，需觸發以下邏輯：<br/>
                      &nbsp;&nbsp;<span className="text-blue-600">● 顯示資訊：X 項必填欄位</span><br/>
                      &nbsp;&nbsp;● 驗證規則：檢核 XX 格式與完整性 (限制條件)
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">項目 D</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">radio</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">1. 功能：點選此項，輸入 X 項必填欄位【若符合條件】</span> 需提供證明文件<br/>
                      2. 當點選此項，需觸發以下邏輯：<br/>
                      &nbsp;&nbsp;● 顯示資訊：輸入後需經過系統檢核<br/>
                      &nbsp;&nbsp;● 驗證規則：檢核格式是否正確<br/>
                      &nbsp;&nbsp;● 資料庫查詢：比對既有資料<br/>
                      &nbsp;&nbsp;● 欄位顯示：當符合特定條件時顯示
                    </td>
                  </tr>

                  {/* Row - 文字輸入 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">文字</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">文字輸入</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      功能：文字 + 數字，最多輸入 XX 字元，依據業務規則檢核格式，並顯示相關資訊
                    </td>
                  </tr>

                  {/* Row - 條件欄位 */}
                  <tr className="bg-pink-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top">【條件欄位】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      點擊後帶入主要資訊，需與主檔案 XX 欄位整合 <span className="text-red-600 font-semibold">【若符合條件】</span>
                    </td>
                  </tr>

                  {/* Row - 選項 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【選項】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">點擊後彈出主要資訊至主畫面或進入次頁面</td>
                  </tr>

                  {/* Row - 數據欄位 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【數據】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">點擊後顯示主要資訊與相關統計數據</td>
                  </tr>

                  {/* Row - 條件判斷欄位 */}
                  <tr className="bg-pink-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top" rowSpan={2}>【條件判斷】需檢核工程 X 標準與條件 Y</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">radio</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">符合條件設定值（即 XX 設定的條件）</span><br/>
                      ● 需顯示相關資訊<br/>
                      ● 進行特定項目檢核<br/>
                      ● 顯示數據：（需依照 X 條件進行檢核，並將數據 Y 顯示於 XX 畫面中）<br/>
                      ● 後續依條件顯示訊息
                    </td>
                  </tr>

                  <tr className="bg-pink-50">
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      <span className="text-red-600 font-semibold">符合標準數值</span><br/>
                      自動帶值
                    </td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      點擊後帶入 XX 數據，依據條件判斷是否符合標準值<br/>
                      <span className="text-blue-600">● 帶入計算公式</span><br/>
                      ● 驗證數據合理性<br/>
                      ● 檢核是否符合標準
                    </td>
                  </tr>

                  {/* Row - 狀態切換 */}
                  <tr className="bg-pink-50">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top">【狀態切換】需檢核狀態</td>
                    <td className="border border-gray-300 px-3 py-2 align-top"></td>
                    <td className="border border-gray-300 px-3 py-2 align-top"></td>
                  </tr>

                  {/* Row - 狀態類型 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">狀態類型</td>
                    <td className="border border-gray-300 px-3 py-2 align-top"></td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      (同上即可分類的各個 XX 類型，並依照用途 Y 進行統計，顯示相關 Z 統計數據)
                    </td>
                  </tr>

                  {/* Row - 主要分類 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">主要分類</td>
                    <td className="border border-gray-300 px-3 py-2 align-top"></td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      (同上分類的各個統計項目，進行統計)<br/>
                      (X 比率設定值)<br/>
                      ● 進行比率計算；<br/>
                      ● 自動計算數值；<br/>
                      ● 顯示提示：當數值 ≥ XX，進行提示；<br/>
                      ● 欄位顯示：需整合統計數據
                    </td>
                  </tr>

                  {/* Row - 資料維護 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">資料維護</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">自動帶值</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">點擊後比對主檔資料，並自動帶入相關數值或提示訊息</td>
                  </tr>

                  {/* Row - 使用程序 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【使用程序】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      點擊後顯示主要使用步驟，進行引導式操作，<span className="text-red-600">依據現有 X 規範建立【流程指引】</span>
                    </td>
                  </tr>

                  {/* Row - 附件上傳 */}
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【附件】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      點擊後開啟檔案上傳介面，進行檔案上傳、下載、預覽 <span className="text-red-600">(依據規範建立上傳檔案機制與檔案類型限制)</span>
                    </td>
                  </tr>

                  {/* Footer Section */}
                  <tr className="bg-purple-100">
                    <td className="border border-gray-300 px-3 py-2 font-semibold align-top" colSpan={3}>
                      使用者操作與系統驗證規則【備註】
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【選項】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">
                      ● 顯示 X 文字提醒，彈出 XX 訊息畫面<br/>
                      ● 點擊後顯示：進入流程 X 與流程 Y
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-3 py-2 align-top">【取消】</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">按鈕點擊</td>
                    <td className="border border-gray-300 px-3 py-2 align-top">點擊後返回主畫面並清空目前填寫的資料並提示是否儲存</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Note Section */}
          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
              <span className="font-semibold text-[#695aa6]">📋 說明：</span>
              本規格文件為示範版本，所有業務邏輯、數據標準、系統規則等資訊已進行去敏感化處理，僅展示 PRD 文件的結構與撰寫風格。實際專案中的規格文件包含更詳細的業務邏輯、UI 互動規範、資料驗證規則、異常處理流程等完整內容。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
