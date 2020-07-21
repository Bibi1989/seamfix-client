import React, { useContext, useEffect } from "react";
import { Container, Grid, ScheduleList } from "./style";
import { ScheduleContext } from "../../context/Provider";
import Schedule from "./Schedule";
import { Icon } from "semantic-ui-react";

const DisplaySchedule = () => {
  const { getSchedules, schedules, schedule } = useContext(ScheduleContext);

  useEffect(() => {
    getSchedules();

    // eslint-disable-next-line
  }, [schedule]);
  return (
    <Container>
      <h1 className='schedule_header'>Lists Of Schedules</h1>
      <Grid>
        {schedules.length <= 0 && (
          <ScheduleList noShadow='0'>
            <p className='no_schedule'>No Schedule Reports at the moment</p>{" "}
            <p className='add_schedule'>
              <Icon name='add square' size='big' /> Add a schedule
            </p>
          </ScheduleList>
        )}
        {schedules.map((schedule) => (
          <Schedule schedule={schedule} key={schedule._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default DisplaySchedule;
