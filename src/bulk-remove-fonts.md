# 批量移除字體設定腳本

以下文件需要移除所有的 `style={{ fontFamily: ... }}` 設定：

## 需要處理的文件列表（除了 Navbar.tsx 和 Hero.tsx）

1. /components/About.tsx ✅
2. /components/BPMNDiagram.tsx
3. /components/Experience.tsx  
4. /components/FunctionPathDiagram.tsx
5. /components/InteractivePrototypeSection.tsx
6. /components/PRDAndDesignSection.tsx
7. /components/PRDSpecificationDiagram.tsx
8. /components/PartialAcceptanceProcess.tsx
9. /components/ProcessMapOverview.tsx
10. /components/Projects.tsx
11. /components/RACIMatrix.tsx
12. /components/Skills.tsx
13. /components/UseCaseDiagram.tsx
14. /components/UserDataReviewDiagram.tsx
15. /components/WorkLifecycleDiagram.tsx
16. /pages/ProjectDetail.tsx

## 替換規則

移除所有出現的：
- `style={{ fontFamily: "'Patrick Hand', cursive" }}`
- `style={{ fontFamily: "'Leckerli One', sans-serif" }}`
- `style={{ fontFamily: \"'Patrick Hand', cursive\" }}`
- `style={{ fontFamily: \"'Leckerli One', sans-serif\" }}`

以及在 object 屬性中的：
- `fontFamily: "'Patrick Hand', cursive"`
- `fontFamily: "'Leckerli One', sans-serif"`
- `fontFamily: \"'Patrick Hand', cursive\"`
- `fontFamily: \"'Leckerli One', sans-serif\"`
