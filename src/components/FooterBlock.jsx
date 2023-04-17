import React from "react";

export default function FooterBlock() {
  return (
    <footer className="relative min-h-[15%] flex flex-col p-10 py-20 bg-slate-900 text-center">
      <div>
        <h3 className="font-bold text-slate-300">Elie Kabengele</h3>
      </div>
      <div className="font-medium text-slate-600">
        <a href="https://github.com/amEhlee/amehlee-portfolio">
          <p>Junior Full-Stack Developer</p>⭐ Github ⭐
        </a>
      </div>
    </footer>
  );
}
