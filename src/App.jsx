import React from 'react';
import { 
  Terminal, Code2, Rocket, MessageSquare, Map, Waves, 
  Palette, Box, Layers, Zap, Share2, MousePointer2, 
  RotateCcw, ArrowRight, Globe, Database 
} from 'lucide-react';

const App = () => {
  // 공통 카드 컴포넌트
  const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  // 프로세스 단계 컴포넌트
  const ProcessStep = ({ step, title, desc, icon: Icon, color }) => (
    <div className={`p-6 rounded-2xl border-2 ${color} transition-transform hover:scale-[1.02]`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <Icon size={20} className="text-slate-700" />
        </div>
        <span className="text-sm font-bold text-slate-500 uppercase tracking-tighter font-mono">Step {step}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Code2 size={20} />
            </div>
            <span className="font-black text-xl tracking-tight text-blue-900">장흥 삼다수 코딩동아리</span>
          </div>
          <div className="hidden md:block text-xs font-bold text-slate-400 tracking-widest">
            AI-NATIVE EDUCATION HUB
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
            2026 JANGHEUNG CODING CLASS
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            장흥 코딩동아리 <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">
              세상을 코딩(Coding)하자
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            "코드 한 줄 몰라도 괜찮을까?" <br />
            AI와 함께라면 누구나 장흥의 이야기를 담은 웹과 게임을 만들 수 있어.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {/* 1. Foundation Section: 기초 프로그래밍 이해 */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                <Database size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-4">1. 우리가 배우는 기초 탄탄</h2>
            <p className="text-gray-500">AI에게 똑똑하게 지시하기 위해 반드시 알아야 할 3요소</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-orange-200 transition-all">
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h4 className="text-xl font-bold mb-3">HTML (뼈대)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">웹사이트의 구조를 잡는 설계도입니다. 어디에 무엇을 놓을지 결정합니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h4 className="text-xl font-bold mb-3">CSS (옷)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">뼈대에 예쁜 색과 인테리어를 입힙니다. 사용자에게 보여지는 디자인을 담당합니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-yellow-200 transition-all">
              <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h4 className="text-xl font-bold mb-3">JS (근육)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">웹사이트에 생명력을 불어넣습니다. 클릭하면 반응하고 데이터가 움직이게 합니다.</p>
            </div>
          </div>
        </section>

        {/* 2. AI-Native Process Section: 최신 개발 프로세스 (중요!) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
                <Zap size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-4 text-slate-900 tracking-tighter">2. AI 네이티브 개발 프로세스</h2>
            <p className="text-gray-500 font-medium italic">아이디어가 실제 웹사이트로 탄생하는 실전 워크플로우</p>
          </div>
          
          {/* Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <ProcessStep 
              step="1" 
              title="기획 (Claude AI)" 
              desc="대화로 전체 코드를 생성하고 미리보기로 확인합니다." 
              icon={MessageSquare} 
              color="bg-orange-50 border-orange-100"
            />
            <ProcessStep 
              step="2" 
              title="조립 (Cursor IDE)" 
              desc="코드를 복사해 넣고 AI와 함께 세부 에러를 수정합니다." 
              icon={MousePointer2} 
              color="bg-indigo-50 border-indigo-100"
            />
            <ProcessStep 
              step="3" 
              title="저장 (GitHub)" 
              desc="소스 코드를 온라인 저장소에 안전하게 기록합니다." 
              icon={Share2} 
              color="bg-slate-100 border-slate-200"
            />
            <ProcessStep 
              step="4" 
              title="배포 (Vercel)" 
              desc="전 세계 사람들이 볼 수 있게 웹사이트로 공개합니다." 
              icon={Globe} 
              color="bg-blue-50 border-blue-100"
            />
          </div>

          {/* Infinity Loop Visual */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
                <RotateCcw className="text-blue-400 animate-spin-slow" />
                <h3 className="text-2xl font-bold italic text-blue-400">무한 업데이트 루프</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-black mb-2 tracking-tighter">Modify</div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.2em]">Cursor IDE</div>
                </div>
                <ArrowRight className="hidden md:block text-slate-700" size={32} />
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-black mb-2 text-blue-400 font-mono italic">Push</div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">To GitHub</div>
                </div>
                <ArrowRight className="hidden md:block text-slate-700" size={32} />
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-black mb-2 tracking-tighter">Live</div>
                  <div className="text-xs text-slate-400 uppercase tracking-[0.2em]">Vercel Deploy</div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                <p className="text-center text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto">
                  "우리가 코드를 수정해서 깃허브에 올리기만 하면 끝! <br />
                  Vercel이 실시간으로 변화를 감지하여 웹사이트를 즉시 업데이트합니다."
                </p>
              </div>
            </div>
            {/* Background Light Effect */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>
        </section>

        {/* 3. Projects Preview */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="mb-6 inline-block p-3 bg-green-100 text-green-600 rounded-2xl">
                <Rocket size={32} />
              </div>
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight text-slate-900">
                3. 우리가 <br />장흥에서 <br />만들 프로젝트
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Waves /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">장흥 물축제 홍보 게임</h4>
                    <p className="text-sm text-gray-500">탐진강 장어 잡기 리액트 웹게임</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600"><Map size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">장흥 여행코스 메이커</h4>
                    <p className="text-sm text-gray-500">AI 맞춤 우드랜드 여행 추천 시스템</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-white border border-slate-200 rounded-[3rem] p-10 md:p-12 relative shadow-2xl">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-10 text-slate-900 flex items-center gap-3">
                   <Layers className="text-blue-600" /> 학습 로드맵
                 </h3>
                 <div className="space-y-10">
                   <div className="flex gap-6">
                     <div className="flex-none w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">1</div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">기획 (Vibe)</p>
                       <p className="text-sm text-slate-500 mt-1 leading-relaxed text-slate-400">장흥의 가치를 발견하고 어떤 웹을 만들지 대화로 결정하기</p>
                     </div>
                   </div>
                   <div className="flex gap-6">
                     <div className="flex-none w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl">2</div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">제작 (AI + Code)</p>
                       <p className="text-sm text-slate-500 mt-1 leading-relaxed text-slate-400">Claude와 Cursor를 활용해 실제 웹 기능 구현하기</p>
                     </div>
                   </div>
                   <div className="flex gap-6">
                     <div className="flex-none w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl">3</div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">배포 (Share)</p>
                       <p className="text-sm text-slate-500 mt-1 leading-relaxed text-slate-400">Vercel로 전 세계 친구들에게 나의 프로젝트 자랑하기</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Final Greeting */}
        <section className="text-center py-24 px-6 bg-slate-900 rounded-[3.5rem] text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            준비됐니? <br/>
            <span className="text-blue-400">장흥의 미래를 코딩하자!</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium leading-relaxed mb-12">
            기술을 배우는 것은 단순한 지식이 아닙니다. <br />
            나의 생각을 현실로 만드는 가장 강력한 마법을 배우는 것입니다.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-slate-500 text-sm">
            <Code2 size={16} /> 2026 장흥 삼다수 코딩동아리 Orientation
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
          © 2026 장흥 삼다수 코딩동아리 | 정보교사 제작 수업자료
        </p>
      </footer>

      {/* Global Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;