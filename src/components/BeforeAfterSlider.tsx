import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Sliders, CheckCircle2, AlertCircle } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  surface: string;
  petType: string;
  timeToClean: string;
  toolUsed: string;
  toolPrice: number;
  beforeLabel: string;
  afterLabel: string;
  beforeImg: string;
  afterImg: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'rug-golden',
    name: 'High-Pile Living Room Rug',
    surface: 'Carpet & Wool Area Rug',
    petType: 'Golden Retriever Undercoat',
    timeToClean: '45 seconds',
    toolUsed: 'Deep-Pile Carpet Fur Rake',
    toolPrice: 29.99,
    beforeLabel: 'Buried undercoat felted into fiber loops',
    afterLabel: '100% extracted with restored carpet pile',
    // Realistic carpet & fur textures
    beforeImg: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'couch-cat',
    name: 'Deep Navy Velvet Sectional',
    surface: 'Microfiber & Velvet Sofa',
    petType: 'White Ragdoll & Persian Cat Hair',
    timeToClean: '30 seconds',
    toolUsed: 'Electrostatic Fur Roller Pro',
    toolPrice: 24.99,
    beforeLabel: 'Micro-hair clinging via static charge',
    afterLabel: 'Zero hair & zero fabric snagging',
    beforeImg: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1493663284041-78707166c61f?auto=format&fit=crop&w=1200&q=80',
  }
];

interface BeforeAfterSliderProps {
  onSelectTool: (toolName: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onSelectTool }) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('rug-golden');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const currentScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clamped = Math.max(0, Math.min(width, x));
    const percent = Math.round((clamped / width) * 100);
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 md:py-28 bg-[#1A1A1A] text-[#FAF9F6] relative border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FAF9F6]/60 mb-3">
            Comparative Evidence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#FAF9F6]">
            Inspect the <span className="italic font-serif">Restoration</span> Proof
          </h2>
          <p className="mt-3 text-[#FAF9F6]/70 text-sm sm:text-base leading-relaxed">
            Drag the divider to observe microscopically complete fiber release on high-friction velvet and deep-pile wool.
          </p>

          {/* Scenario Selector Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenarioId(s.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all border ${
                  activeScenarioId === s.id
                    ? 'bg-[#FAF9F6] text-[#1A1A1A] border-[#FAF9F6]'
                    : 'bg-transparent text-[#FAF9F6]/70 border-[#FAF9F6]/20 hover:border-[#FAF9F6]/60 hover:text-[#FAF9F6]'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* The Comparison Box */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[460px] overflow-hidden select-none cursor-ew-resize border border-[#FAF9F6]/15 bg-[#141414]"
          >
            {/* After Image (Full background) */}
            <img
              src={currentScenario.afterImg}
              alt="After pet hair removal"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentScenario.beforeImg}
                alt="Before pet hair removal"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
              {/* Subtle film simulating embedded hair overlay */}
              <div className="absolute inset-0 bg-[#1A1A1A]/30 mix-blend-multiply" />
            </div>

            {/* Labels on both sides */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-[#1A1A1A]/90 text-[#FAF9F6] border border-[#FAF9F6]/20 px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm flex items-center gap-2">
                <AlertCircle className="w-3 h-3 text-[#D4CEC2]" />
                Before: Embedded Fur
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="bg-[#FAF9F6]/95 text-[#1A1A1A] border border-[#1A1A1A]/20 px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-[#1A1A1A]" />
                After: Restored Weave
              </span>
            </div>

            {/* Center Slider Divider Line */}
            <div
              className="absolute inset-y-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-[0.5px] w-[1px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#FAF9F6] border border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center shadow-2xl">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none z-20">
              <span className="bg-[#1A1A1A]/80 backdrop-blur-md text-[#FAF9F6]/90 text-[10px] uppercase tracking-widest px-4 py-1.5 border border-[#FAF9F6]/15">
                ⟵ Drag to compare ⟶
              </span>
            </div>
          </div>

          {/* Details below comparison */}
          <div className="mt-6 bg-[#212121] border border-[#FAF9F6]/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAF9F6]/60 font-semibold block">
                Restoration time: {currentScenario.timeToClean}
              </span>
              <div className="font-serif text-xl italic text-white">
                {currentScenario.toolUsed}
              </div>
              <p className="text-xs text-[#FAF9F6]/70">
                Target: {currentScenario.petType} on {currentScenario.surface}
              </p>
            </div>

            <button
              onClick={() => onSelectTool(currentScenario.toolUsed)}
              className="px-6 py-3 bg-[#FAF9F6] hover:bg-white text-[#1A1A1A] text-xs uppercase tracking-widest font-semibold transition-colors shrink-0 flex items-center gap-2"
            >
              <span>View Tool Specifications (${currentScenario.toolPrice.toFixed(2)})</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
