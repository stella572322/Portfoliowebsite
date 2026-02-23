import { FileText, Maximize2, Calendar, Users, Target } from 'lucide-react';
import { useState } from 'react';
import prdDocumentImage from '../assets/3f5d28e415f03d6079c05c22ea0c3b42e535d0e5.png';
import figmaDesign1 from '../assets/c2df20eac803f32b07aa2856fb572a859504e539.png';
import figmaDesign2 from '../assets/de9cbcc2228cdc696557db2f501cf9796b179335.png';
import figmaDesign3 from '../assets/dd1300fbfead8ce0856b521772b65eabca36952e.png';

export default function PRDAndDesignSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const figmaDesigns = [
    {
      id: 1,
      title: '互動原型設計 - B3.4 流程',
      description: '部分竣工驗收申請流程設計',
      imageUrl: figmaDesign1,
      phase: '設計階段 - Flow 2'
    },
    {
      id: 2,
      title: '互動原型設計 - B3.5 流程',
      description: '部分竣工驗收審核流程設計',
      imageUrl: figmaDesign2,
      phase: '設計階段 - Flow 2'
    },
    {
      id: 3,
      title: '互動原型設計 - B3.7 流程',
      description: '部分竣工驗收結案流程設計',
      imageUrl: figmaDesign3,
      phase: '設計階段 - Flow 2'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-6">
        <h2 
          className="text-3xl text-white"
          style={{ fontFamily: "'Leckerli One', sans-serif" }}
        >
          PRD 文件與設計稿展示
        </h2>
        <p 
          className="text-white/90 text-sm mt-2"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          產品需求文件分析與 Figma 設計流程記錄
        </p>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* PRD Document Section */}
        <div className="mb-8">
          <h3 
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            📄 PRD 分析文件摘要
          </h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200 shadow-md mb-6">
            {/* PRD Content Highlights */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-[#695aa6]" size={20} />
                <h4 className="font-bold text-gray-800" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                  核心需求分析重點
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#695aa6] font-bold">●</span>
                  <span><strong>功能需求：</strong>涵蓋驗收管理、履約追蹤、文件管理等 89 個功能模組</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#695aa6] font-bold">●</span>
                  <span><strong>使用者故事：</strong>針對專案負責人、管理單位、審核單位等角色定義 Use Cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#695aa6] font-bold">●</span>
                  <span><strong>流程設計：</strong>完整 BPMN 流程圖、RACI 責任矩陣、功能路徑圖</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#695aa6] font-bold">●</span>
                  <span><strong>資料模型：</strong>ER Diagram 實體關聯圖、資料庫 Schema 設計</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PRD Document Screenshot */}
        <div className="mb-8">
          <div 
            className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-300 hover:border-[#695aa6] cursor-pointer"
            onClick={() => setSelectedImage(prdDocumentImage)}
          >
            {/* Document Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-[#695aa6] px-4 py-2 rounded-full shadow-lg">
                <p className="text-white text-sm font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                  📋 完整 PRD 文件結構
                </p>
              </div>
            </div>

            {/* Blur Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-black/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
                <p className="text-white text-sm font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                  🔒 已模糊化
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative bg-gray-100">
              <img 
                src={prdDocumentImage}
                alt="PRD 文件結構圖"
                className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                style={{ filter: 'blur(3px) brightness(1.05)' }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-4 shadow-xl">
                  <Maximize2 className="text-[#695aa6]" size={32} />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-white border-t-2 border-blue-200">
              <h4 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                部分竣工驗收流程 - 完整 PRD 文件
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                包含資料庫架構設計（ER Diagram）、流程圖、資料表結構、欄位定義、關聯設計等完整技術規格文件。
                點擊可放大檢視（已模糊化保護機密）。
              </p>
            </div>
          </div>
        </div>

        {/* Figma Design Section */}
        <div>
          <h3 
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            🎨 Figma 設計流程記錄
          </h3>
          
          <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "'Patrick Hand', cursive" }}>
            以下設計稿已進行模糊處理以保護專案機密資訊，點擊可放大查看
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {figmaDesigns.map((design) => (
              <div 
                key={design.id}
                className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#695aa6] cursor-pointer"
                onClick={() => setSelectedImage(design.imageUrl)}
              >
                {/* Phase Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-[#695aa6] px-3 py-1 rounded-full shadow-lg">
                    <p className="text-white text-xs font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                      {design.phase}
                    </p>
                  </div>
                </div>

                {/* Blur Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                    <p className="text-white text-xs font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                      🔒 已模糊化
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={design.imageUrl}
                    alt={design.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ filter: 'blur(1.5px) brightness(1.05)' }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                      <Maximize2 className="text-[#695aa6]" size={24} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {design.title}
                  </h4>
                  <p className="text-sm text-gray-600" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img 
              src={selectedImage}
              alt="放大檢視"
              className="w-full h-auto"
              style={{ filter: 'blur(1.5px) brightness(1.05)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-center font-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
                🔒 此圖片已模糊處理以保護專案機密資訊
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}