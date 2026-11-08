import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e3e0f0] py-6 text-center text-xs text-[#69668a]">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-[#5b3fa8] text-white font-bold size-5 rounded flex items-center justify-center text-[10px]">
            B
          </div>
          <span className="font-semibold text-[#1e1a3c]">BAUST Alumni Network</span>
          <span>· Information System Design (CSE 3210)</span>
        </div>
        <p>BAUST, Saidpur · Alumni Affairs Office © 2026 BAUST Alumni</p>
      </div>
    </footer>
  );
}
