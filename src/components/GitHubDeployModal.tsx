import React, { useState } from 'react';
import { X, Github, Check, Copy, Terminal, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const gitCommands = [
    'git init',
    'git add .',
    'git commit -m "feat: Pet hair removal store & interactive tool website"',
    'git branch -M main',
    'git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git',
    'git push -u origin main',
  ].join('\n');

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
      <div className="relative bg-[#FAF9F6] max-w-2xl w-full shadow-2xl border border-[#1A1A1A]/15 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#EFEBE3] hover:bg-[#E5E1D8] text-[#1A1A1A] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-[#141414] text-[#FAF9F6] p-7 sm:p-8 border-b border-[#FAF9F6]/10">
          <div className="flex items-center gap-2 text-[#FAF9F6]/70 text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Deployment Specification</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Publishing to GitHub Pages
          </h3>
          <p className="text-[#FAF9F6]/70 text-xs mt-1 leading-relaxed">
            This repository includes relative asset configurations and an automated GitHub Actions CI/CD deployment pipeline.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm bg-[#FAF9F6]">
          {/* Pre-configuration badges */}
          <div className="bg-[#F9F7F2] border border-[#1A1A1A]/10 p-5 space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>Engineered in Codebase:</span>
            </div>
            <ul className="text-xs text-[#1A1A1A]/80 space-y-1.5 pl-5 list-disc leading-relaxed">
              <li><strong>Relative Asset Resolution:</strong> <code>base: './'</code> configured in <code>vite.config.ts</code> for frictionless repository subpath routing.</li>
              <li><strong>Automated CI/CD Workflow:</strong> <code>.github/workflows/deploy.yml</code> handles automatic builds and deployment triggers.</li>
              <li><strong>Static Edge CDN:</strong> Pure client-side delivery requiring zero server maintenance.</li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <div>
              <div className="font-serif text-base font-normal text-[#1A1A1A] flex items-center gap-2 mb-1">
                <span className="w-4 h-4 bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-mono">
                  1
                </span>
                <span>Create GitHub Repository</span>
              </div>
              <p className="text-[#1A1A1A]/70 text-xs pl-6">
                Navigate to <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-[#1A1A1A] font-bold underline inline-flex items-center gap-0.5">github.com/new <ExternalLink className="w-3 h-3" /></a> to create your remote repository.
              </p>
            </div>

            <div>
              <div className="font-serif text-base font-normal text-[#1A1A1A] flex items-center gap-2 mb-1">
                <span className="w-4 h-4 bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-mono">
                  2
                </span>
                <span>Commit & Push Code</span>
              </div>
              <p className="text-[#1A1A1A]/70 text-xs pl-6 mb-2">
                Execute the standard terminal sequence:
              </p>

              <div className="relative bg-[#141414] text-[#FAF9F6] p-4 font-mono text-xs overflow-x-auto border border-[#FAF9F6]/10">
                <pre>{gitCommands}</pre>
                <button
                  onClick={() => handleCopy(gitCommands, 1)}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-[#FAF9F6] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1 transition-colors"
                >
                  {copiedIndex === 1 ? (
                    <>
                      <Check className="w-3 h-3 text-[#1A1A1A]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <div className="font-serif text-base font-normal text-[#1A1A1A] flex items-center gap-2 mb-1">
                <span className="w-4 h-4 bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-mono">
                  3
                </span>
                <span>Select GitHub Actions Provider</span>
              </div>
              <p className="text-[#1A1A1A]/70 text-xs pl-6 leading-relaxed">
                In repository <strong>Settings → Pages</strong>, switch <strong>Build and deployment → Source</strong> to <strong>GitHub Actions</strong>.
                Your website will automatically deploy to <code>https://your-username.github.io/your-repo/</code>.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Close Instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
