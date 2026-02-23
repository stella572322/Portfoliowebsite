import image_cc1a89380b74d843961d08cade57a5108da294e3 from '../assets/cc1a89380b74d843961d08cade57a5108da294e3.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  return (
    <section 
      id="about" 
      className="flex justify-center items-center min-h-[70vh] py-10 px-5 md:px-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1200px] gap-8 md:gap-0">
        <div className="imgeffect">
          <ImageWithFallback
            src={image_cc1a89380b74d843961d08cade57a5108da294e3}
            alt="Stella"
            className="w-[300px] h-[400px] rounded-[10px] object-cover"
          />
        </div>
        <div className="md:w-[650px] md:ml-[100px] w-full">
          <p className="m-0 mb-1.5">
            Who Am I?
          </p>
          <h2 className="m-0 mb-4 text-3xl">
            About Me
          </h2>
          <p className="m-0 mb-4 text-[14px] md:text-base leading-relaxed">
            具備 <strong className="text-[#695aa6] font-bold">3 年以上政府級大型 B2B 系統</strong>產品規劃與設計經驗。擅長在複雜業務邏輯與多方利害關係人（Stakeholders）之間取得平衡，主導過 24+ 項系統功能模組，成功將設計思維轉化為可落地的產品規格。
            <br /><br />
            核心優勢在於<strong className="text-[#695aa6] font-bold">「需求解構」與「跨團隊轉譯」</strong>：能將模糊的政策與業務需求轉化為高可行性的 PRD 與系統架構，有效降低至少 20% 以上的溝通成本與開發返工率。目標將企業級系統轉型經驗，投入 B2B 或 SaaS 產品開發。
          </p>
          <a href="https://stella572322.github.io/resume" target="_blank">
            <button className="px-6 py-2 mt-6 rounded-[50px] bg-[#695aa6] text-white text-[17px] cursor-pointer hover:bg-[#543d8d] transition-colors">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}