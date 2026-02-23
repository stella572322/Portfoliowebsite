export default function Skills() {
  const designSkills = [
    { name: 'Figma (進階)', icon: '🎨' },
    { name: 'Xmind (邏輯梳理)', icon: '🧠' },
    { name: 'Miro (遠端協作)', icon: '📋' },
  ];

  const managementSkills = [
    { name: 'PRD 撰寫', icon: '📝' },
    { name: 'Notion (資料庫整理)', icon: '📊' },
    { name: 'ERP 系統', icon: '💼' },
  ];

  const technicalSkills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML/CSS', icon: '🌐' },
  ];

  const softSkills = [
    { name: '跨部門轉譯', icon: '🔄' },
    { name: '需求通靈', icon: '🤝' },
    { name: '高度法規邏輯化', icon: '⚖️' },
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: { name: string; icon: string }[] }) => (
    <div className="w-full max-w-[500px] bg-transparent border border-[#695aa6] rounded-2xl px-9 py-4.5">
      <h2 className="m-0 mb-5 text-xl text-center text-black">
        {title}
      </h2>
      <div className="flex justify-center flex-wrap gap-3 mb-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="text-sm text-black border border-[#695aa6] rounded-xl px-4 py-3 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="block w-full mb-[30px] bg-[#f9f9f9] py-10">
      <div className="w-full flex flex-col justify-between items-center">
        <div className="text-xl text-center mb-6 mt-5">
          <h1 className="text-black text-3xl p-0 m-0">My Skills</h1>
        </div>
        <div className="w-full flex flex-wrap mt-[30px] gap-[30px] justify-center px-5 max-w-[1100px]">
          <SkillCard title="設計與原型" skills={designSkills} />
          <SkillCard title="文件與管理" skills={managementSkills} />
          <SkillCard title="技術認知" skills={technicalSkills} />
          <SkillCard title="軟實力" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}