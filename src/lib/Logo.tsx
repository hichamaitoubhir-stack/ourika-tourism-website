
import { Link } from 'react-router-dom';
import { MountainSnow } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-14 h-9 rounded-xl bg-[#D9773A] grid place-items-center">
        {/* <MountainSnow className="w-5 h-5 text-[#F5EBDC]" /> */}
  
          <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g
        stroke="#eae6e1"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 68 L37 30 L49 49 L59 35 L87 68" />
        <path d="M29 43 L37 30 L45 43" />
        <path d="M53 43 L59 35 L66 46" />
        <path d="M18 75 Q39 59 57 73 T88 72" />
        <path d="M14 83 Q37 72 55 82 T88 81" />
       
      </g>
    
    </svg>
    
      </div>

      <div className="leading-none">
        <div className="font-display font-[660] text-[18px] tracking-[-0.02em] text-[#D9773A]">
          Atlas <span className="text-[#D9773A] text-[1.2em] font-serif  mx-0.7">&</span>  Desierto
        </div> 
        <div className="text-center text-[10px] tracking-[0.28em] uppercase font-[700] text-[black] mt-1">
         EST. 2014
        </div>
      </div>
    </Link>
  );
}
