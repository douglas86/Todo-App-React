import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Timelined = () => {
  // const { getLocal } = useLocalStorage();
  //
  // console.log("getLocal", getLocal());

  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className={`flex !w-1 bg-blue-500 ml-4`} />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://docs.material-tailwind.com/img/team-1.jpg"
                alt="user 1"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className={`flex !w-1 bg-blue-500 ml-4`} />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://docs.material-tailwind.com/img/team-2.jpg"
                alt="user 2"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="user 3"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Timelined;

// const Timelined = () => {
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
//             title: "Timelined Title Here.",
//             content: `The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants...`,
//           },
//           {
//             avatar: "/images/avatar2.jpg",
//             title: "Timelined Title Here.",
//             content: `The key to more success is to have a lot of pillows...`,
//           },
//           {
//             avatar: "/images/avatar3.jpg",
//             title: "Timelined Title Here.",
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
// export default Timelined;
