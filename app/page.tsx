"use client";

import { useState } from "react";
import { Menu, Search, Plus, FileText, Database, Calendar, Settings } from "lucide-react";

export default function Home() {
  const [sidebarOpen] = useState(true);
  const [pageTitle, setPageTitle] = useState("Welcome to Nothing • Notion");

  return (
    <div className="flex h-screen bg-nothing-bg text-nothing-text">
      {/* SIDEBAR - Nothing OS style */}
      <div className={`w-72 border-r border-nothing-border bg-nothing-panel flex flex-col transition-all ${sidebarOpen ? 'translate-x-0' : '-translate-x-72'}`}>
        {/* Header */}
        <div className="h-14 border-b border-nothing-border flex items-center px-4 gap-3">
          <div className="w-8 h-8 bg-nothing-accent rounded-xl flex items-center justify-center text-white text-xl font-bold">N</div>
          <span className="font-semibold tracking-tighter text-2xl">Nothing</span>
        </div>

        {/* Search */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 bg-black border border-nothing-border rounded-2xl px-4 h-10 text-sm">
            <Search size={18} />
            <span className="text-nothing-muted">Quick find...</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-3 py-2 overflow-y-auto nothing-scroll">
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-nothing-border rounded-2xl text-sm cursor-pointer">
              <FileText size={20} />
              <span>Workspace</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-nothing-border rounded-2xl text-sm cursor-pointer">
              <Database size={20} />
              <span>Databases</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 hover:bg-nothing-border rounded-2xl text-sm cursor-pointer">
              <Calendar size={20} />
              <span>Calendar</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-nothing-border flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gray-800 rounded-full"></div>
            <div>
              <div className="text-xs">Nibir Biswas</div>
              <div className="text-[10px] text-nothing-muted">Free</div>
            </div>
          </div>
          <Settings size={20} className="text-nothing-muted cursor-pointer" />
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="h-14 border-b border-nothing-border flex items-center px-6 justify-between">
          <div className="flex items-center gap-4">
            <Menu size={24} className="text-nothing-muted cursor-pointer" />
            <div className="flex items-center gap-2">
              <span className="text-xl">📝</span>
              <span className="font-medium text-lg">Untitled Page</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button className="flex items-center gap-2 px-5 py-1.5 bg-nothing-accent hover:bg-red-600 rounded-2xl text-white text-sm font-medium transition-colors">
              <Plus size={18} />
              New
            </button>
          </div>
        </div>

        {/* Canvas - the "Notion" editor area */}
        <div className="flex-1 p-12 max-w-4xl mx-auto w-full overflow-y-auto nothing-scroll">
          <div className="max-w-3xl mx-auto">
            {/* FIXED: No React children conflict + suppress warning */}
            <div
              className="text-5xl font-light tracking-tighter mb-8 focus:outline-none"
              contentEditable
              suppressContentEditableWarning={true}
              onInput={(e) => setPageTitle(e.currentTarget.innerText)}
            >
              {pageTitle}
            </div>

            <div className="prose prose-invert max-w-none text-lg leading-relaxed">
              <p className="text-nothing-muted">Start typing… everything is already Nothing OS themed.</p>
              <p>This is the foundation. Every element (buttons, sidebar, text, accents) is locked to the exact Nothing OS palette.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}