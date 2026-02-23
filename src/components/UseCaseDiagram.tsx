import blurredImage from '../assets/3b78f365b20872e634a2384c1ce7160af7c14d36.png';

export default function UseCaseDiagram() {
  // Define actors (users)
  const actors = [
    { id: 'agency', label: '主管單位', position: { x: 50, y: 180 } },
    { id: 'supervisor', label: '監督單位', position: { x: 750, y: 350 } },
    { id: 'vendor', label: '執行單位', position: { x: 50, y: 520 } }
  ];

  // Define use cases
  const useCases = [
    { id: 1, label: '提交作業文件', x: 250, y: 100, width: 130, height: 55 },
    { id: 2, label: '向機關申報\n部分完工', x: 280, y: 190, width: 140, height: 55 },
    { id: 3, label: '部分驗收之前：\n提交驗收相關\n項目與資料', x: 250, y: 280, width: 160, height: 75 },
    { id: 4, label: '進行設備測試\n及驗轉', x: 280, y: 385, width: 140, height: 55 },
    { id: 5, label: '提報申報的\n驗收範圍及\n相關部分資料', x: 320, y: 480, width: 160, height: 75 },
    { id: 6, label: '部分驗收合格後：\n根據驗收結果，\n填報相關文件', x: 280, y: 580, width: 160, height: 75 },
    { id: 7, label: '待部分驗收\n合格後，辦理\n點交文件', x: 400, y: 680, width: 140, height: 75 },
    { id: 8, label: '針對部分驗收\n合格的範圍，\n申報部分付款\n計價', x: 250, y: 780, width: 180, height: 85 },
    { id: 9, label: '針對已付清尾款\n的工程，辦理\n工程保固作業', x: 280, y: 885, width: 160, height: 75 }
  ];

  // Define connections (actor to use case)
  const connections = [
    // Agency connections (主管單位)
    { from: 'agency', to: 1 },
    { from: 'agency', to: 2 },
    { from: 'agency', to: 3 },
    { from: 'agency', to: 4 },
    { from: 'agency', to: 5 },
    { from: 'agency', to: 6 },
    { from: 'agency', to: 7 },
    { from: 'agency', to: 8 },
    { from: 'agency', to: 9 },
    
    // Supervisor connections (監督單位)
    { from: 'supervisor', to: 3 },
    { from: 'supervisor', to: 5 },
    { from: 'supervisor', to: 6 },
    { from: 'supervisor', to: 7 },
    
    // Vendor connections (執行單位)
    { from: 'vendor', to: 7 },
    { from: 'vendor', to: 8 },
    { from: 'vendor', to: 9 }
  ];

  const getActorPosition = (actorId: string) => {
    const actor = actors.find(a => a.id === actorId);
    return actor ? actor.position : { x: 0, y: 0 };
  };

  const getUseCaseCenter = (useCaseId: number) => {
    const useCase = useCases.find(uc => uc.id === useCaseId);
    if (!useCase) return { x: 0, y: 0 };
    return {
      x: useCase.x + useCase.width / 2,
      y: useCase.y + useCase.height / 2
    };
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-6">
        <h2 
          className="text-3xl text-white"
          style={{ fontFamily: "'Leckerli One', sans-serif" }}
        >
          UseCase 圖（使用案例圖）
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
                原始專案 Use Case 圖
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
                alt="原始 Use Case 圖（模糊）"
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

          {/* Right Side - Redrawn Use Case Diagram */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h3 
                className="text-xl font-bold text-gray-700 text-center"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                示範：專案管理系統
              </h3>
              <p 
                className="text-sm text-gray-500 text-center mt-1"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                （通用範例，已將敏感字眼替換為通用術語）
              </p>
            </div>
            
            <div className="w-full max-w-2xl bg-gray-50 rounded-lg p-4 shadow-md overflow-auto" style={{ backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              <svg width="800" height="1000" viewBox="0 0 800 1000" className="w-full h-auto">
                {/* System Boundary Box */}
                <rect 
                  x="120" 
                  y="50" 
                  width="550" 
                  height="920" 
                  fill="none" 
                  stroke="#333" 
                  strokeWidth="2.5"
                  rx="10"
                />
                
                {/* System Title */}
                <text 
                  x="395" 
                  y="80" 
                  textAnchor="middle" 
                  fontSize="20" 
                  fontWeight="bold"
                  fill="#333"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  專案管理系統
                </text>

                {/* Draw connections first (so they appear behind) */}
                {connections.map((conn, index) => {
                  const fromPos = getActorPosition(conn.from);
                  const toPos = getUseCaseCenter(conn.to);
                  return (
                    <line
                      key={`conn-${index}`}
                      x1={fromPos.x}
                      y1={fromPos.y}
                      x2={toPos.x}
                      y2={toPos.y}
                      stroke="#666"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  );
                })}

                {/* Draw Use Cases (ellipses) */}
                {useCases.map((useCase) => (
                  <g key={`uc-${useCase.id}`}>
                    <ellipse
                      cx={useCase.x + useCase.width / 2}
                      cy={useCase.y + useCase.height / 2}
                      rx={useCase.width / 2}
                      ry={useCase.height / 2}
                      fill="white"
                      stroke="#1976D2"
                      strokeWidth="2"
                    />
                    {useCase.label.split('\n').map((line, idx, arr) => (
                      <text
                        key={idx}
                        x={useCase.x + useCase.width / 2}
                        y={useCase.y + useCase.height / 2 - (arr.length - 1) * 7 + idx * 14}
                        textAnchor="middle"
                        fontSize="12"
                        fill="#333"
                        style={{ fontFamily: "'Patrick Hand', cursive" }}
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                ))}

                {/* Draw Actors (stick figures with circles) */}
                {actors.map((actor) => (
                  <g key={`actor-${actor.id}`}>
                    {/* Head */}
                    <circle
                      cx={actor.position.x}
                      cy={actor.position.y - 30}
                      r="12"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Body */}
                    <line
                      x1={actor.position.x}
                      y1={actor.position.y - 18}
                      x2={actor.position.x}
                      y2={actor.position.y + 10}
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Arms */}
                    <line
                      x1={actor.position.x - 15}
                      y1={actor.position.y - 5}
                      x2={actor.position.x + 15}
                      y2={actor.position.y - 5}
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Left leg */}
                    <line
                      x1={actor.position.x}
                      y1={actor.position.y + 10}
                      x2={actor.position.x - 10}
                      y2={actor.position.y + 30}
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Right leg */}
                    <line
                      x1={actor.position.x}
                      y1={actor.position.y + 10}
                      x2={actor.position.x + 10}
                      y2={actor.position.y + 30}
                      stroke="#333"
                      strokeWidth="2"
                    />
                    {/* Label */}
                    <text
                      x={actor.position.x}
                      y={actor.position.y + 50}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="#333"
                      style={{ fontFamily: "'Patrick Hand', cursive" }}
                    >
                      {actor.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Explanation */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-4">
          <div>
            <h4 
              className="font-bold text-gray-700 mb-2"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Use Case 圖說明
            </h4>
            <p 
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              此圖展示了專案管理系統中三個主要角色（主管單位、監督單位、執行單位）與系統功能之間的互動流程。
              所有敏感字眼已替換為通用術語，不涉及保密資訊。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#695aa6]">
              <h5 
                className="font-bold text-gray-700 mb-1 text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                主管單位（Agency）
              </h5>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                負責專案整體規劃、核准與監督
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h5 
                className="font-bold text-gray-700 mb-1 text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                監督單位（Supervisor）
              </h5>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                負責專案執行過程的監督與查核
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <h5 
                className="font-bold text-gray-700 mb-1 text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                執行單位（Vendor）
              </h5>
              <p 
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                負責專案實際執行與交付成果
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}