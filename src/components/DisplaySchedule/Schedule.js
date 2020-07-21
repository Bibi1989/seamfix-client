import React, { useContext, useState } from "react";
import { ScheduleList, Flex, Image } from "./style";
import { Icon, Accordion } from "semantic-ui-react";
import { ScheduleContext } from "../../context/Provider";

import { getTime, isImage } from "../../utils/dates";

const Schedule = ({ schedule }) => {
  const { cancelSchedule } = useContext(ScheduleContext);
  const handleDelete = (id) => {
    cancelSchedule(id);
  };

  const [state, setState] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const activeIndex = state;
    const newIndex = activeIndex === index ? -1 : index;

    setState(newIndex);
  };

  return (
    <ScheduleList>
      <Flex status={schedule.type}>
        <h1>{schedule.name}</h1>
        <span>{schedule.type}</span>
      </Flex>
      <p>Scheduled By {schedule.scheduler}</p>
      <Flex>
        <p>Schedule to Report on {getTime(schedule.schedule_date)}</p>
        <Icon name='alarm' color='grey' />
      </Flex>
      <div>
        {schedule.type === "reoccuring" && (
          <p>
            Reoccuring every {schedule.interval_range} {schedule.interval_time}
          </p>
        )}
      </div>
      <Flex>
        <div>
          {schedule.stop_date ? (
            <p style={{ paddingTop: "10px" }}>
              Scheduling of reports will stop on {getTime(schedule.stop_date)}
            </p>
          ) : (
            schedule.type === "reoccuring" && (
              <p style={{ paddingTop: "10px" }}>No stopping time</p>
            )
          )}
        </div>
        <div>
          <p className='cancel' onClick={() => handleDelete(schedule._id)}>
            <Icon name='cancel' />
            Cancel
          </p>
        </div>
      </Flex>
      <Accordion>
        <Accordion.Title active={state === 0} index={0} onClick={handleClick}>
          <Icon name='dropdown' />
          Click to see document
        </Accordion.Title>
        <Accordion.Content active={state === 0}>
          {isImage(schedule.file) ? (
            <Image>
              <a href={schedule.file} target='_blank' rel='noopener noreferrer'>
                <img src={schedule.file} alt='' />
              </a>
            </Image>
          ) : (
            <a href={schedule.file} target='_blank' rel='noopener noreferrer'>
              Click Me to view document
            </a>
          )}
        </Accordion.Content>
      </Accordion>
    </ScheduleList>
  );
};

export default Schedule;
