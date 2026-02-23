import image_eba95b731ea346f19e3c1d968a6963eb0a401602 from '../assets/eba95b731ea346f19e3c1d968a6963eb0a401602.png'
import { useParams, Link } from 'react-router';
import { ArrowLeft, Target, Users, Calendar, Wrench, Building2, CheckCircle2 } from 'lucide-react';
import { getProjectById } from '../data/projectsData';
import PartialAcceptanceProcess from '../components/PartialAcceptanceProcess';
import ProcessMapOverview from '../components/ProcessMapOverview';
import UseCaseDiagram from '../components/UseCaseDiagram';
import BPMNDiagram from '../components/BPMNDiagram';
import RACIMatrix from '../components/RACIMatrix';
import WorkLifecycleDiagram from '../components/WorkLifecycleDiagram';
import FunctionPathDiagram from '../components/FunctionPathDiagram';
import PRDAndDesignSection from '../components/PRDAndDesignSection';
import UserDataReviewDiagram from '../components/UserDataReviewDiagram';
import PRDSpecificationDiagram from '../components/PRDSpecificationDiagram';
import InteractivePrototypeSection from '../components/InteractivePrototypeSection';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: "'Leckerli One', sans-serif" }}>
            專案不存在
          </h1>
          <Link 
            to="/"
            className="text-[#695aa6] hover:underline"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            返回 Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[76.5rem] mx-auto px-5 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="flex items-center gap-2 text-[#695aa6] hover:opacity-80 transition-opacity no-underline"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            <ArrowLeft size={20} />
            <span className="text-lg">返回 Portfolio</span>
          </Link>
          <h2 
            className="text-2xl text-[#695aa6]"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            {project.title}
          </h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-12 bg-gradient-to-b from-[#f9f9f9] to-white">
        <div className="max-w-[76.5rem] mx-auto px-5">
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-[#695aa6]" size={20} />
                <h3 
                  className="text-lg"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  我的角色
                </h3>
              </div>
              <p 
                className="text-[#565656] text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                {project.role}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-[#695aa6]" size={20} />
                <h3 
                  className="text-lg"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  專案時程
                </h3>
              </div>
              <p 
                className="text-[#565656] text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                {project.timeline}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-[#695aa6]" size={20} />
                <h3 
                  className="text-lg"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  團隊規模
                </h3>
              </div>
              <p 
                className="text-[#565656] text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                {project.teamSize || '資訊待補充'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="text-[#695aa6]" size={20} />
                <h3 
                  className="text-lg"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  專案範疇
                </h3>
              </div>
              <p 
                className="text-[#565656] text-sm"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                {project.projectScope || '資訊待補充'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[76.5rem] mx-auto px-5 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 
            className="text-3xl mb-4 text-[#695aa6]"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            專案概述
          </h2>
          <p 
            className="text-lg text-[#212529] leading-relaxed"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            {project.overview}
          </p>
        </section>

        {/* Background */}
        <section className="mb-12 bg-[#f9f9f9] p-8 rounded-2xl">
          <h2 
            className="text-3xl mb-4 text-[#695aa6]"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            專案背景
          </h2>
          <p 
            className="text-lg text-[#212529] leading-relaxed"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            {project.background}
          </p>
        </section>

        {/* Two Column Layout for Challenges, Objectives, Stakeholders, Methodology, Solutions, Features */}
        <div className="space-y-8 mb-12">
          {/* Challenges */}
          <section>
            <h2 
              className="text-3xl mb-4 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              專案挑戰
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li 
                    key={index}
                    className="text-base text-[#212529] leading-relaxed pl-6 relative before:content-['⚠️'] before:absolute before:left-0"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Objectives */}
          <section className="bg-[#f9f9f9] p-6 rounded-2xl">
            <h2 
              className="text-3xl mb-4 text-[#695aa6] flex items-center gap-3"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              <Target size={32} />
              專案目標
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-base text-[#212529] leading-relaxed"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  <CheckCircle2 className="text-[#695aa6] flex-shrink-0 mt-0.5" size={20} />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stakeholders */}
          <section>
            <h2 
              className="text-3xl mb-4 text-[#695aa6] flex items-center gap-3"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              <Users size={32} />
              利害關係人
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#695aa6]">
              <div className="space-y-2">
                {project.stakeholders.map((stakeholder, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-[#695aa6] text-lg flex-shrink-0 mt-0.5">•</span>
                    <p 
                      className="text-base text-[#212529]"
                      style={{ fontFamily: "'Patrick Hand', cursive" }}
                    >
                      {stakeholder}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="bg-[#f9f9f9] p-6 rounded-2xl">
            <h2 
              className="text-3xl mb-4 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              執行方法
            </h2>
            <p 
              className="text-base text-[#212529] leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              {project.methodology}
            </p>
          </section>

          {/* Solutions */}
          <section>
            <h2 
              className="text-3xl mb-4 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              解決方案
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li 
                    key={index}
                    className="text-base text-[#212529] leading-relaxed pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold"
                    style={{ fontFamily: "'Patrick Hand', cursive" }}
                  >
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 
              className="text-3xl mb-4 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              核心功能
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-[#695aa6] text-lg flex-shrink-0 mt-0.5">✓</span>
                    <p 
                      className="text-base text-[#212529]"
                      style={{ fontFamily: "'Patrick Hand', cursive" }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Process Documentation - Only show for specific projects */}
        {project.hasProcessDocumentation && (
          <section className="mb-12">
            <PartialAcceptanceProcess />
          </section>
        )}

        {/* Work Lifecycle Diagram - Standalone section for projects without hasProcessDocumentation */}
        {!project.hasProcessDocumentation && project.hasWorkLifecycleDiagram && (
          <section className="mb-12">
            <WorkLifecycleDiagram />
          </section>
        )}

        {/* User Data Review Diagram - Only show for specific projects */}
        {project.hasUserDataReviewDiagram && (
          <section className="mb-12">
            <UserDataReviewDiagram />
          </section>
        )}

        {/* Use Case Diagram - Only show for specific projects */}
        {project.hasUseCaseDiagram && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              需求分析範例：Use Case 圖
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示系統需求分析階段產出的 Use Case 圖（使用案例圖）。
              為保護專案機密，已將敏感業務術語替換為通用描述，展示系統分析與需求梳理能力。
            </p>
            <UseCaseDiagram />
          </section>
        )}

        {/* BPMN Diagram - Only show for specific projects */}
        {project.hasBPMNDiagram && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              流程設計範例：BPMN 圖
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示業務流程分析階段產出的 BPMN 圖（業務流程模型與標記法）。
              圖表呈現跨單位協作流程，包含泳道設計、流程節點與決策邏輯。為保護專案機密，已將敏感字眼替換為通用術語。
            </p>
            <BPMNDiagram />
          </section>
        )}

        {/* RACI Matrix - Only show for specific projects */}
        {project.hasRACIMatrix && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              責任分配矩陣範例：RACI 矩陣
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示責任分配矩陣範例，包含 RACI 矩陣圖表。
              為保護專案機密，已將敏感業務術語替換為通用描述，展示責任分配與角色分工能力。
            </p>
            <RACIMatrix />
          </section>
        )}

        {/* Function Path Diagram - Only show for specific projects */}
        {project.hasFunctionPathDiagram && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              功能路徑範例：Function Path 圖
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示功能路徑範例，包含 Function Path 圖表。
              為保護專案機密，已將敏感業務術語替換為通用描述，展示功能路徑與流程設計能力。
            </p>
            <FunctionPathDiagram />
          </section>
        )}

        {/* PRD and Design Section - Only show for specific projects */}
        {project.hasPRDAndDesignSection && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              產品需求文件與設計範例
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示產品需求文件（PRD）與設計範例，包含需求分析、功能描述、設計圖表及原型。
              為保護專案機密已將敏感業務術語替換為通用描述。
            </p>
            <PRDAndDesignSection />
          </section>
        )}

        {/* PRD Specification Diagram - Only show for specific projects */}
        {project.hasPRDSpecificationDiagram && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              產品需求文件範例：PRD Specification 圖
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示產品需求文件（PRD）範例，包含 PRD Specification 圖表。
              為保護專案機密已將敏感業務術語替換為通用描述。
            </p>
            <PRDSpecificationDiagram />
          </section>
        )}

        {/* Interactive Prototype Section - Only show for specific projects */}
        {project.hasInteractivePrototype && (
          <section className="mb-12">
            <h2 
              className="text-3xl mb-6 text-[#695aa6]"
              style={{ fontFamily: "'Leckerli One', sans-serif" }}
            >
              互動原型設計範例
            </h2>
            <p 
              className="text-lg text-[#212529] mb-8 leading-relaxed"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              以下展示系統完整的互動原型設計成果，包含桌面端功能模組（F1.1、F1.2）與跨平台行動應用程式（Android/iOS）的 User Flow 設計。
              原型設計涵蓋元件系統化、資訊架構規劃、互動流程設計等完整 UX/UI 設計流程。為保護專案機密，圖中敏感資訊已進行模糊處理。
            </p>
            <InteractivePrototypeSection />
          </section>
        )}

        {/* Impact */}
        <section className="mb-12 bg-gradient-to-r from-[#695aa6] to-[#543d8d] p-8 rounded-2xl text-white">
          <h2 
            className="text-3xl mb-6"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            成果與影響
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.impact.map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 
                  className="text-xl mb-2"
                  style={{ fontFamily: "'Patrick Hand', cursive" }}
                >
                  {item.metric}
                </h3>
                <p 
                  className="text-2xl"
                  style={{ fontFamily: "'Leckerli One', sans-serif" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <h2 
            className="text-3xl mb-6 text-[#695aa6] flex items-center gap-3"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            <Wrench size={32} />
            使用工具
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-[#695aa6] text-white px-4 py-2 rounded-full text-lg"
                style={{ fontFamily: "'Patrick Hand', cursive" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Back to Projects */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-[#695aa6] text-xl hover:opacity-80 transition-opacity no-underline"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            <ArrowLeft size={20} />
            查看更多專案
          </Link>
        </div>
      </div>
    </div>
  );
}