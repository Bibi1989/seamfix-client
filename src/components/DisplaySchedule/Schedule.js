import React, { useContext } from "react";
import { ScheduleList, Flex } from "./style";
import { Icon } from "semantic-ui-react";
import { ScheduleContext } from "../../context/Provider";

import { getTime } from "../../utils/dates";

const Schedule = ({ schedule }) => {
  const { cancelSchedule } = useContext(ScheduleContext);
  const handleDelete = (id) => {
    cancelSchedule(id);
    // window.location.href = window.location.origin;
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
    </ScheduleList>
  );
};

export default Schedule;
