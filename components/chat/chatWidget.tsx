// 'use client';

// import { useState } from 'react';

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
//       >
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l2-2m6-6l-2-2m2 2l2-2m-2 2l-2 2m2 2v2m2 0h2m-2 0h-2v2m2 0v-2m2 0h2m2 0h2V9M9 7h1V5H9V3H7v2H5v2H3v2h2v2H3v2h2v2H5v2h2v2H9v-2h2v-2H9V9z" clipRule="evenodd" />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-xl p-4">
//           <div className="flex items-center justify-between mb-2">
//             <span className="font-medium">Chat with us</span>
//             <span>👋</span>
//           </div>
//           <p className="text-sm text-gray-600">We're here to help! Send us a message.</p>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="mt-3 text-xs text-blue-600 hover:underline"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }