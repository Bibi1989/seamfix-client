import styled from "styled-components";

export const Container = styled.div`
  .schedule_header {
    text-align: center;
    padding: 20px;
    padding-top: 50px;
  }
`;
export const Grid = styled.div``;
export const Image = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`;
export const ScheduleList = styled.div`
  padding: 16px;
  border-radius: 4px;
  box-shadow: ${({ noShadow }) =>
    noShadow ? noShadow : "0 2px 10px rgba(0, 0, 0, 0.2)"};
  margin-bottom: 16px;

  h1 {
    color: #999999;
  }

  .no_schedule {
    font-size: 1.3em;
    text-align: center;
  }
  .add_schedule {
    font-size: 1.3em;
    text-align: center;

    i {
      padding-right: 16px;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    background: ${({ status }) => (status === "once" ? "teal" : "violet")};
    padding: 3px 6px;
    align-self: center;
    color: white;
    border-radius: 5px;
  }

  .cancel {
    background: tomato;
    padding: 3px 6px;
    align-self: center;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;
// export const Grid = styled.div``;
