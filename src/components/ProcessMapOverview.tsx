import { ArrowDown } from 'lucide-react';

export default function ProcessMapOverview() {
  const stages = [
    {
      id: 1,
      title: '階段一：申請與審查',
      subtitle: '廠商報核 / 監造審查',
      color: '#E3F2FD',
      textColor: '#1976D2',
      badgeColor: '#64B5F6',
      description: '廠商完成部分工程後提出竣工報告，機關進行文件審查與現場勘查，確認是否符合契約規定並決定是否進入驗收程序。'
    },
    {
      id: 2,
      title: '階段二：驗收與查驗',
      subtitle: '現場查驗 / 隱蔽部分',
      color: '#E3F2FD',
      textColor: '#1976D2',
      badgeColor: '#64B5F6',
      description: '組成驗收小組進行現場查驗、測試、丈量等作業，核對工程品質與數量，確認施工成果符合契約要求。'
    },
    {
      id: 3,
      title: '階段三：瑕疵改善與複驗',
      subtitle: '缺失限期改善 / 重新查驗',
      color: '#FFE7D9',
      textColor: '#E65100',
      badgeColor: '#FF9E80',
      description: '若發現缺失，要求廠商限期改善並進行複驗。確保所有缺失完成改善，品質符合要求後才能進入下一階段。'
    },
    {
      id: 4,
      title: '階段四：結算與付款',
      subtitle: '證明書核發 / 保固啟動',
      color: '#E3F2FD',
      textColor: '#1976D2',
      badgeColor: '#64B5F6',
      description: '驗收合格後核發驗收證明書，啟動保固期，辦理價金給付及履約保證金發還等結算作業。'
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
          全銳導覽圖 (Process Map)
        </h2>
        <p 
          className="text-white/90 text-sm mt-2"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          部分竣工驗收流程四階段圖解
        </p>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Process Map Diagram */}
          <div className="flex flex-col items-center space-y-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="w-full">
                {/* Stage Card */}
                <div 
                  className="relative p-6 rounded-2xl shadow-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: stage.color }}
                >
                  {/* Stage Number Badge */}
                  <div 
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    style={{ 
                      backgroundColor: stage.badgeColor,
                      fontFamily: "'Leckerli One', sans-serif"
                    }}
                  >
                    {stage.id}
                  </div>

                  {/* Stage Content */}
                  <div className="ml-6">
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{ 
                        color: stage.textColor,
                        fontFamily: "'Patrick Hand', cursive"
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ 
                        color: stage.textColor,
                        fontFamily: "'Patrick Hand', cursive",
                        opacity: 0.8
                      }}
                    >
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow between stages */}
                {index < stages.length - 1 && (
                  <div className="flex justify-center my-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#E0E0E0' }}
                    >
                      <ArrowDown 
                        size={24} 
                        className="text-gray-600"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Descriptions */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold text-[#695aa6] mb-2"
                style={{ fontFamily: "'Leckerli One', sans-serif" }}
              >
                流程說明
              </h3>
              <p 
                className="text-sm text-gray-500"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                Noto Sans TC Regular (#556677)
              </p>
            </div>

            {stages.map((stage) => (
              <div key={stage.id} className="relative pl-6 pb-6 border-l-4 border-gray-200 last:border-l-0 last:pb-0">
                {/* Connecting Dot */}
                <div 
                  className="absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-white"
                  style={{ backgroundColor: stage.badgeColor }}
                ></div>

                {/* Stage Info */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                      style={{ 
                        backgroundColor: stage.badgeColor,
                        fontFamily: "'Leckerli One', sans-serif"
                      }}
                    >
                      {stage.id}
                    </span>
                    <h4 
                      className="font-bold text-lg"
                      style={{ 
                        color: '#556677',
                        fontFamily: "'Patrick Hand', cursive"
                      }}
                    >
                      {stage.title}
                    </h4>
                  </div>
                  
                  <p 
                    className="text-sm mb-2"
                    style={{ 
                      color: '#556677',
                      fontFamily: "'Patrick Hand', cursive",
                      opacity: 0.7
                    }}
                  >
                    {stage.subtitle}
                  </p>
                  
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: '#556677',
                      fontFamily: "'Patrick Hand', cursive"
                    }}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm text-gray-600"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            完整流程圖展示部分竣工驗收的四個主要階段
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#E3F2FD' }}></div>
              <span style={{ fontFamily: "'Patrick Hand', cursive" }}>一般階段</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFE7D9' }}></div>
              <span style={{ fontFamily: "'Patrick Hand', cursive" }}>重點關注</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
