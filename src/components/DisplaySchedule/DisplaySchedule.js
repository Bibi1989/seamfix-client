import React, { useContext, useEffect } from "react";
import { Container, Grid } from "./style";
import { ScheduleContext } from "../../context/Provider";
import Schedule from "./Schedule";

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
        {schedules.map((schedule) => (
          <Schedule schedule={schedule} key={schedule._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default DisplaySchedule;
