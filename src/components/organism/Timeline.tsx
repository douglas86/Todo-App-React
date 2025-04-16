import useLocalStorage from "../../hooks/useLocalStorage.tsx";

const Timeline = () => {
  const { getLocal } = useLocalStorage();

  console.log("getLocal", getLocal());

  return (
    <div className={`flex flex-col items-center justify-center p-5`}>
      <div className={`relative border-l-3 border-gray-300 ml-4 space-y-12`}>
        {Object.entries(getLocal()).map(([key, value]) => (
          <div key={key} className="relative pl-12">
            <h1>{key}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

// const Timeline = () => {
//   const { getLocal } = useLocalStorage();
//
//   console.log("getLocal", getLocal());
//
//   return (
//     <div className="flex flex-col items-center justify-center p-5">
//       <div className="relative border-l-3 border-gray-300 ml-4 space-y-12">
//         {[
//           {
//             avatar: "/images/avatar1.jpg",
//             title: "Timeline Title Here.",
//             content: `The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants...`,
//           },
//           {
//             avatar: "/images/avatar2.jpg",
//             title: "Timeline Title Here.",
//             content: `The key to more success is to have a lot of pillows...`,
//           },
//           {
//             avatar: "/images/avatar3.jpg",
//             title: "Timeline Title Here.",
//             content: `I'm never giving up, I'm just getting started. I'm up to something. Fan luv.`,
//           },
//         ].map((item, index) => (
//           <div key={index} className="relative pl-12">
//             {/* Avatar */}
//             <img
//               src={item.avatar}
//               alt="Avatar"
//               className="w-10 h-10 rounded-full absolute left-[-20px] top-0 border-2 border-white shadow-md"
//             />
//             {/* Content */}
//             <h3 className="text-lg font-semibold">{item.title}</h3>
//             <p className="text-gray-600 text-sm">{item.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default Timeline;
