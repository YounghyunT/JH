import React, { useState } from 'react';
import { Layout, Code, Users, BookOpen, ChevronRight, Github, ExternalLink, Mail } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  const subjects = [
    { 
      id: 1, 
      title: "파이썬 기초", 
      desc: "프로그래밍의 시작, 파이썬의 기본 문법을 마스터합니다.", 
      tag: "기초",
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    { 
      id: 2, 
      title: "AI와 머신러닝", 
      desc: "인공지능의 원리를 이해하고 간단한 모델을 만들어봅니다.", 
      tag: "심화",
      icon: <Layout className="w-6 h-6 text-purple-400" />
    },
    { 
      id: 3, 
      title: "웹 개발 (React)", 
      desc: "나만의 멋진 웹사이트를 직접 구축하고 배포합니다.", 
      tag: "실습",
      icon: <ExternalLink className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* 내비게이션 바 */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Code className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">JH Coding Club</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-blue-400 transition-colors">수업소개</a>
            <a href="#" className="hover:text-blue-400 transition-colors">프로젝트</a>
            <a href="#" className="hover:text-blue-400 transition-colors">공지사항</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all text-sm">
              로그인
            </button>
          </div>
        </div>
      </nav>
      {/* 히어로 섹션 */}
      <header className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold mb-6">
            전남 장흥의 미래 정보교사 커뮤니티
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            코딩으로 그리는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">더 나은 미래</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI와 프로그래밍을 통해 장흥의 아이들에게 더 넓은 세상을 보여주고자 합니다. 
            우리만의 멋진 디지털 프로젝트를 지금 시작해보세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              수업 신청하기 <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <Github className="w-5 h-5" /> 저장소 방문
            </button>
          </div>
        </div>
      </header>

      {/* 대시보드 그리드 */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-blue-500" /> 개설된 수업
          </h2>
          <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-md text-sm transition-all ${activeTab === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              전체
            </button>
            <button 
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-1.5 rounded-md text-sm transition-all ${activeTab === 'featured' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              추천
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.id} className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {subject.icon}
              </div>
              <div className="mb-6 bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                {subject.icon}
              </div>
              <span className="text-xs font-bold text-blue-500 mb-2 block uppercase tracking-wider">{subject.tag}</span>
              <h3 className="text-xl font-bold text-white mb-3">{subject.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {subject.desc}
              </p>
              <button className="text-sm font-semibold text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                상세보기 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-slate-800 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-blue-500 w-5 h-5" />
              <span className="font-bold text-white">JH Coding Club</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 장흥 정보교사 최영현. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:teacher.younghyun@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/YounghyunT" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;