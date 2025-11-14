import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="space-y-8 text-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold">Hover Effect Demo</h1>
          <p className="text-muted-foreground mb-8">
            Hover over the circular badge to see the icon appear
          </p>
        </div>

        {/* Demo Button */}
        <button
          className="cursor-pointer whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 break-words hover:text-accent-foreground has-[>svg]:px-3 group h-[32px] w-[125px] px-2 py-[4px] bg-white dark:bg-input/30 rounded-[6px] border border-slate-300 dark:border-input inline-flex justify-center items-center gap-2 overflow-hidden shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0 hover:bg-slate-100 dark:hover:bg-input/50"
          type="button"
        >
          <div className="flex justify-end items-center gap-1">
            <div className="px-1 flex justify-end items-end">
              <span className="text-[14px] font-normal leading-6 text-foreground">
                Team
              </span>
            </div>
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-data-[state=open]:rotate-180"
              style={{ width: "10px", height: "10px" }}
            >
              <path
                d="M0.5 0.5L4.5 4.5L8.5 0.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="h-full border-l border-dashed border-slate-300" />
          
          {/* Hover-enabled badge - THIS IS THE KEY PART */}
          <div className="w-[24px] h-[24px] px-[6px] bg-slate-100 dark:bg-slate-800 rounded-[14px] hover:rounded-[4px] border-[1px] border-slate-300 dark:border-slate-700 flex justify-center items-center group/badge relative cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {/* Number - hidden on hover */}
            <div className="text-foreground text-[14px] leading-normal group-hover/badge:opacity-0 transition-opacity">
              {count}
            </div>
            
            {/* Icon - shown on hover */}
            <svg 
              className="absolute inset-0 m-auto opacity-0 group-hover/badge:opacity-100 transition-opacity w-3 h-3 text-primary" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                if (count > 0) setCount(count - 1);
              }}
            >
              {/* X icon */}
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </button>

        {/* Additional examples */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">More Examples</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Example with different icons */}
            <div className="w-[24px] h-[24px] px-[6px] bg-slate-100 dark:bg-slate-800 rounded-[14px] border-[1px] border-slate-300 dark:border-slate-700 flex justify-center items-center group/badge relative cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="text-foreground text-[14px] leading-normal group-hover/badge:opacity-0 transition-opacity">
                5
              </div>
              <svg 
                className="absolute inset-0 m-auto opacity-0 group-hover/badge:opacity-100 transition-opacity w-3 h-3 text-blue-600" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="w-[24px] h-[24px] px-[6px] bg-slate-100 dark:bg-slate-800 rounded-[14px] border-[1px] border-slate-300 dark:border-slate-700 flex justify-center items-center group/badge relative cursor-pointer hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <div className="text-foreground text-[14px] leading-normal group-hover/badge:opacity-0 transition-opacity">
                3
              </div>
              <svg 
                className="absolute inset-0 m-auto opacity-0 group-hover/badge:opacity-100 transition-opacity w-3 h-3 text-green-600" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="w-[24px] h-[24px] px-[6px] bg-slate-100 dark:bg-slate-800 rounded-[14px] border-[1px] border-slate-300 dark:border-slate-700 flex justify-center items-center group/badge relative cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              <div className="text-foreground text-[14px] leading-normal group-hover/badge:opacity-0 transition-opacity">
                9
              </div>
              <svg 
                className="absolute inset-0 m-auto opacity-0 group-hover/badge:opacity-100 transition-opacity w-3 h-3 text-orange-600" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 3L9 7H13L10 9.5L11 14L8 11L5 14L6 9.5L3 7H7L8 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mt-8">
          <p>💡 Try hovering over the badges to see different icons appear!</p>
          <p className="mt-2">The red X icon on the main button is clickable and decrements the count.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
