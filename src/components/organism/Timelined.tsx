import { Timeline, TimelineItem } from "@material-tailwind/react";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import { FormInputs } from "../../utils/types.tsx";
import TimelineCard from "../molecule/TimelineCard.tsx";
import { convertKeyToUsableData } from "../../utils/helpers.tsx";

const Timelined = () => {
  const { getLocal } = useLocalStorage();
  const entries: [string, FormInputs][] = Object.entries(getLocal());

  return (
    <div className="p-3 my-5">
      <Timeline className="flex justify-center m-auto">
        {entries.map(([key, value], index) => (
          <TimelineItem key={key}>
            <>
              {index === entries.length - 1 ? (
                <TimelineCard
                  title={convertKeyToUsableData(key)}
                  value={value}
                />
              ) : (
                <TimelineCard
                  title={convertKeyToUsableData(key)}
                  value={value}
                  showConnector={true}
                />
              )}
            </>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Timelined;
