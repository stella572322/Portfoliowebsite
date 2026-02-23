import blurredImage from '../assets/bd3899decaef770835511e3459c28f8bb4046694.png';

export default function RACIMatrix() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-6">
        <h2 
          className="text-3xl text-white"
          style={{ fontFamily: "'Leckerli One', sans-serif" }}
        >
          RACI 表（責任分配矩陣）
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
                原始專案 RACI 表
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
                alt="原始 RACI 表（模糊）"
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

          {/* Right Side - Redrawn RACI Matrix */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h3 
                className="text-xl font-bold text-gray-700 text-center"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                示範：專案階段性提交流程
              </h3>
              <p 
                className="text-sm text-gray-500 text-center mt-1"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                （通用範例，已將敏感字眼替換為通用術語）
              </p>
            </div>
            
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-auto">
              <div className="p-4">
                {/* Title */}
                <h4 
                  className="text-center text-lg font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  RACI 表（責任分配矩陣）
                </h4>
                <p 
                  className="text-center text-sm text-gray-600 mb-4"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  【階段性作業提交流程】
                </p>

                {/* RACI Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border-2 border-gray-400">
                    <thead>
                      <tr className="bg-[#695aa6]">
                        <th 
                          className="border-2 border-gray-400 p-3 text-white text-left min-w-[200px]"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          Task \ Role
                        </th>
                        <th 
                          className="border-2 border-gray-400 p-3 text-white text-center min-w-[100px]"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          執行單位<br/>(設計)
                        </th>
                        <th 
                          className="border-2 border-gray-400 p-3 text-white text-center min-w-[100px]"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          執行單位<br/>(作業)
                        </th>
                        <th 
                          className="border-2 border-gray-400 p-3 text-white text-center min-w-[100px]"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          監督單位
                        </th>
                        <th 
                          className="border-2 border-gray-400 p-3 text-white text-center min-w-[100px]"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          協力廠商
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Row 1 */}
                      <tr className="bg-gray-50">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          選擇階段性作業項目
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            R
                          </span>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="bg-white">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          填寫「作業報告表」
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            R
                          </span>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="bg-gray-50">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          上傳「照片」、「其他文件」
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            R
                          </span>
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="bg-white">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          辦理簽核
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            R
                          </span>
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr className="bg-gray-50">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold text-sm"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          上傳「照片」、「其他文件」、「紀錄表」
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            A
                          </span>
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                      </tr>

                      {/* Row 6 */}
                      <tr className="bg-white">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          填寫「紀錄」
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            A
                          </span>
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                      </tr>

                      {/* Row 7 */}
                      <tr className="bg-gray-50">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          審查簽核
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            A
                          </span>
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                      </tr>

                      {/* Row 8 */}
                      <tr className="bg-white">
                        <td 
                          className="border-2 border-gray-400 p-3 font-semibold"
                          style={{ fontFamily: "'Patrick Hand', cursive" }}
                        >
                          核定簽核
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center">
                          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                            A
                          </span>
                        </td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                        <td className="border-2 border-gray-400 p-3 text-center"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Explanation */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  A
                </span>
                <h5 
                  className="font-bold text-gray-700 text-sm"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  Accountable
                </h5>
              </div>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                最終負責人，對結果負最終責任
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  R
                </span>
                <h5 
                  className="font-bold text-gray-700 text-sm"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  Responsible
                </h5>
              </div>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                執行者，實際執行工作的人
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  C
                </span>
                <h5 
                  className="font-bold text-gray-700 text-sm"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  Consulted
                </h5>
              </div>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                諮詢者，需要被諮詢意見的人
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-gray-400 text-white px-3 py-1 rounded-full font-bold text-sm">
                  I
                </span>
                <h5 
                  className="font-bold text-gray-700 text-sm"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  Informed
                </h5>
              </div>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                知會者，需要被告知進度的人
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
