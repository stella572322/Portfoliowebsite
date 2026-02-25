import { useState } from 'react';
import { CheckCircle2, Clock, AlertTriangle, Calendar } from 'lucide-react';

interface ProcessStage {
  id: number;
  title: string;
  description: string;
  keyActions: string[];
  duration: string;
  risks: string[];
  deliverables: string[];
  startDay: number;
  endDay: number;
  milestone: string;
}

const processStages: ProcessStage[] = [
  {
    id: 1,
    title: '竣工報核與審查',
    description: '廠商完成部分工程後，提出竣工報告，機關進行初步審查與現場勘查。',
    keyActions: [
      '廠商提送竣工報告書',
      '檢附竣工圖說、自主檢查表',
      '監造單位初審文件完整性',
      '機關審查是否符合契約規定',
      '決定是否進入驗收程序'
    ],
    duration: '7-10 日',
    risks: [
      '文件不齊全導致退件',
      '與契約規定不符',
      '施工範圍界定爭議'
    ],
    deliverables: [
      '竣工報告書',
      '竣工圖說',
      '自主檢查表',
      '審查意見'
    ],
    startDay: 0,
    endDay: 10,
    milestone: '收到竣工報告'
  },
  {
    id: 2,
    title: '驗收程序與協驗',
    description: '組成驗收小組，進行現場查驗、測試、丈量等作業，確認工程品質與數量。',
    keyActions: [
      '成立驗收小組（主驗、會驗、協驗）',
      '訂定驗收時間與地點',
      '現場查驗工程品質',
      '核對數量與規格',
      '測試功能與性能',
      '製作驗收紀錄'
    ],
    duration: '30 日內',
    risks: [
      '驗收人員專業不足',
      '查驗標準認知差異',
      '隱蔽工程查驗困難',
      '功能測試項目不完整'
    ],
    deliverables: [
      '驗收紀錄',
      '現場照片',
      '測試報告',
      '缺失清單'
    ],
    startDay: 10,
    endDay: 40,
    milestone: '啟動初驗程序'
  },
  {
    id: 3,
    title: '瑕疵改善與複驗',
    description: '發現缺失時，要求廠商限期改善，並進行複驗確認改善成果。',
    keyActions: [
      '紀錄缺失項目於驗收紀錄',
      '約定改善期限（7-14 日）',
      '廠商執行改善作業',
      '監造單位查核改善進度',
      '機關進行複驗',
      '確認改善完成或採取其他措施'
    ],
    duration: '7-14 日',
    risks: [
      '廠商逾期未改善',
      '改善品質不符要求',
      '重複發生相同缺失',
      '需動用保證金處理'
    ],
    deliverables: [
      '缺失改善計畫',
      '改善完成報告',
      '複驗紀錄',
      '改善前後對照'
    ],
    startDay: 40,
    endDay: 54,
    milestone: '缺失改善通知'
  },
  {
    id: 4,
    title: '證明書核發與保固',
    description: '驗收合格後，核發驗收證明書，啟動保固期，並辦理價金給付。',
    keyActions: [
      '製作驗收證明書（四方簽署）',
      '陳核機關首長核定',
      '核發結算驗收證明書',
      '登記保固起始日',
      '計算應付工程款',
      '發還履約保證金（依比例）'
    ],
    duration: '10 日內',
    risks: [
      '證明書簽署流程延誤',
      '保固責任界定不清',
      '價金計算爭議',
      '保證金發還比例認知差異'
    ],
    deliverables: [
      '驗收證明書',
      '結算驗收證明書',
      '保固起始日登記',
      '價金給付文件',
      '保證金發還文件'
    ],
    startDay: 54,
    endDay: 70,
    milestone: '驗收合格'
  }
];

const milestones = [
  { day: 0, label: '第0日', name: '收到竣工報告' },
  { day: 10, label: '第10日', name: '啟動初驗程序' },
  { day: 40, label: '第40日', name: '缺失改善通知' },
  { day: 54, label: '第54日', name: '複驗完成' },
  { day: 70, label: '第70日', name: '核發證明書' },
];

export default function PartialAcceptanceProcess() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const totalDays = 70;

  return (
    <div className="space-y-8">
      {/* Project Timeline */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-6">
          <h3 
            className="text-2xl text-white flex items-center gap-3 font-leckerli"
          >
            <Calendar size={28} />
            部分竣工驗收流程時間軸
          </h3>
          <p 
            className="text-white/90 text-sm mt-2 font-patrick"
          >
            將滑鼠移至各階段查看關鍵作業與風險注意事項
          </p>
        </div>

        <div className="p-8">
          {/* Timeline Container */}
          <div className="relative">
            {/* Milestones Row */}
            <div className="relative mb-6">
              <div className="flex items-start justify-between">
                {milestones.map((milestone) => (
                  <div 
                    key={milestone.day}
                    className="flex flex-col items-center"
                    style={{ 
                      position: 'absolute',
                      left: `${(milestone.day / totalDays) * 100}%`,
                      transform: milestone.day === 0
                        ? 'translateX(0%)'
                        : milestone.day === totalDays
                        ? 'translateX(-100%)'
                        : 'translateX(-50%)'
                    }}
                  >
                    {/* Milestone Label */}
                      <div className="text-center mb-2">
                      <div 
                        className="text-xs font-bold text-gray-700 font-patrick"
                      >
                        {milestone.label}
                      </div>
                      <div 
                        className="text-xs text-gray-600 whitespace-nowrap font-patrick"
                      >
                        {milestone.name}
                      </div>
                    </div>
                    
                    {/* Milestone Dot */}
                    <div className="w-4 h-4 bg-[#e91e63] rounded-full shadow-md z-10"></div>
                    
                    {/* Vertical Line */}
                    <div className="w-px bg-gray-200 absolute top-12" style={{ height: '400px' }}></div>
                  </div>
                ))}
              </div>
              
              {/* Horizontal Timeline Line */}
              <div 
                className="h-px bg-gray-300 absolute top-12" 
                style={{ width: '100%', left: 0 }}
              ></div>
            </div>

            {/* Stages Content Area */}
            <div className="relative mt-24 space-y-6">
              {processStages.map((stage) => {
                const leftPosition = (stage.startDay / totalDays) * 100;
                const width = ((stage.endDay - stage.startDay) / totalDays) * 100;
                
                return (
                  <div 
                    key={stage.id}
                    className="relative"
                    onMouseEnter={() => setHoveredStage(stage.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    style={{ 
                      marginLeft: `${leftPosition}%`,
                      width: `${width}%`,
                      minWidth: '200px'
                    }}
                  >
                    {/* Stage Card */}
                    <div
                      className={`p-5 mb-4 rounded-lg border-2 transition-all duration-300 cursor-pointer origin-top relative ${
                          hoveredStage === stage.id
                            ? 'bg-white border-[#e91e63] shadow-xl scale-105 z-20'
                            : 'bg-[#fce4ec] border-[#f8bbd0] shadow-md hover:shadow-lg'
                        }`}
                    >
                      {/* Stage Header (badge absolute to avoid squeezing title) */}
                      <div className="relative mb-3">
                        <div className="flex items-center gap-2 pr-16">
                          <span 
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shadow ${
                              hoveredStage === stage.id
                                ? 'bg-white text-[#e91e63]'
                                : 'bg-[#e91e63] text-white'
                            } font-leckerli flex-shrink-0`}
                          >
                            {stage.id}
                          </span>
                          <h4 className="flex-1 min-w-0 font-bold text-gray-800 font-patrick truncate">
                            {stage.title}
                          </h4>
                        </div>
                      </div>

                      {/* Default Content */}
                      {hoveredStage !== stage.id && (
                        <div>
                          <p 
                            className="text-sm text-gray-700 mb-3 font-patrick"
                          >
                            {stage.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {stage.deliverables.slice(0, 3).map((item, idx) => (
                              <span
                                key={idx}
                                className="bg-white/80 text-gray-700 px-2 py-1 rounded text-xs font-patrick"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Hover Content */}
                      {hoveredStage === stage.id && (
                        <div className="space-y-3">
                          {/* Key Actions */}
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              <CheckCircle2 size={14} className="text-green-600" />
                              <span className="text-xs font-bold text-gray-800">關鍵作業</span>
                            </div>
                            <ul className="space-y-1">
                              {stage.keyActions.slice(0, 4).map((action, idx) => (
                                <li 
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-gray-700 font-patrick"
                                >
                                  <span className="text-gray-700 mt-0.5">•</span>
                                  <span>{action}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Risks */}
                          <div>
                            <div className="flex items-center gap-1 mb-2">
                              <AlertTriangle size={14} className="text-yellow-400" />
                              <span className="text-xs font-bold text-gray-800">風險注意</span>
                            </div>
                            <ul className="space-y-1">
                              {stage.risks.map((risk, idx) => (
                                <li 
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-gray-700 font-patrick"
                                >
                                  <span className="text-yellow-400 mt-0.5">⚠</span>
                                  <span>{risk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gantt Bar */}
                    <div className="mt-2">
                      <div 
                        className={`h-8 bg-[#e91e63] rounded-full shadow-md flex items-center justify-center transition-all duration-300 origin-top overflow-hidden ${
                          hoveredStage === stage.id ? 'scale-105 shadow-xl translate-y-1' : ''
                        }`}
                        style={{ opacity: 0.95 }}
                      >
                        <span 
                          className="text-white text-xs font-bold font-patrick w-full truncate text-center px-3"
                        >
                          {stage.title} ({stage.duration})
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Time Labels */}
            <div className="relative mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-xs text-gray-500 font-patrick">
                <span>第 0 日</span>
                <span>第 20 日</span>
                <span>第 40 日</span>
                <span>第 60 日</span>
                <span>第 70 日</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
