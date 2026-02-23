import { Monitor, Smartphone } from 'lucide-react';
import prototypeF11 from 'figma:asset/f94eb823c2f01ca9811a30a1ea00d65651123d82.png';
import prototypeF12 from 'figma:asset/0328e4b97082c87a6d1570d350ea95be448a9f3d.png';
import prototypeApp from 'figma:asset/6f850e5bfed7ccc2a944adb54084a2dad2d89f8f.png';

export default function InteractivePrototypeSection() {
  return (
    <div className="space-y-12">
      {/* F1.1 Prototype */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="text-[#695aa6]" size={28} />
          <h3 className="text-2xl text-[#695aa6]">
            桌面端功能模組 F1.1 - 互動原型設計
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          展示桌面端主要功能模組的完整使用者流程設計，包含資料登錄、查詢、審核等核心操作介面。
          原型涵蓋元件設計系統（Components）與完整互動流程（User Flow），確保介面一致性與使用體驗優化。
        </p>
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img 
            src={prototypeF11} 
            alt="F1.1 功能模組互動原型設計 - 完整 User Flow 與元件系統"
            className="w-full h-auto"
            style={{ filter: 'blur(3px)' }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">
          * 為保護專案機密，圖中敏感資訊已模糊處理
        </p>
      </div>

      {/* F1.2 Prototype */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="text-[#695aa6]" size={28} />
          <h3 className="text-2xl text-[#695aa6]">
            桌面端功能模組 F1.2 - 互動原型設計
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          展示桌面端進階功能模組的使用者流程設計，涵蓋複雜的多步驟操作流程與跨頁面互動邏輯。
          原型設計強調資訊架構清晰度與操作路徑優化，降低使用者學習成本。
        </p>
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img 
            src={prototypeF12} 
            alt="F1.2 功能模組互動原型設計 - 完整 User Flow"
            className="w-full h-auto"
            style={{ filter: 'blur(3px)' }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">
          * 為保護專案機密，圖中敏感資訊已模糊處理
        </p>
      </div>

      {/* Mobile App Prototype */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="text-[#695aa6]" size={28} />
          <h3 className="text-2xl text-[#695aa6]">
            行動端應用程式 - 跨平台互動原型設計
          </h3>
        </div>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          展示 Android 與 iOS 雙平台行動應用程式的完整使用者流程設計。
          原型涵蓋現場巡查作業、即時資料上傳、離線作業支援等行動端核心功能，
          並針對不同平台的設計規範（Material Design / Human Interface Guidelines）進行優化。
        </p>
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img 
            src={prototypeApp} 
            alt="Android 與 iOS APP 互動原型設計 - 完整跨平台 User Flow"
            className="w-full h-auto"
            style={{ filter: 'blur(3px)' }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-3 italic">
          * 為保護專案機密，圖中敏感資訊已模糊處理
        </p>
      </div>
    </div>
  );
}