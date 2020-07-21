import React, { useState, useContext } from "react";
import { scheduleCombineDate, stopAtCombineDate } from "../../utils/dates";

import { ScheduleContext } from "../../context/Provider";

import {
  Container,
  Form,
  DivGroup,
  Input,
  Label,
  Select,
  DivGroupAccordion,
  Flex,
  Button,
  ErrorLabel,
} from "./style";
import translate from "../../i18n/translate";
import DisplaySchedule from "../DisplaySchedule/DisplaySchedule";

const data = ["minutes", "hours", "day", "week", "month"];

const SchedulePage = () => {
  const { getLang, scheduleReport, errors } = useContext(ScheduleContext);
  const [values, setValues] = useState({
    name: "",
    scheduler: "",
    email: "",
    performed_at: "",
    performed_time: "",
    interval_range: "",
    interval_time: "minutes",
    stop_date: "",
    stop_time: "",
  });
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFile = ({ target: { files } }) => {
    setValues({
      ...values,
      file: files[0],
    });
  };

  const [type, setType] = useState("once");

  const onsubmit = (e) => {
    e.preventDefault();

    if (!values.performed_at && !values.performed_time) {
      return setError("This feild cannot be empty!!!");
    }

    setError("");

    let schedule_date = scheduleCombineDate(values);
    let stop_date = stopAtCombineDate(values);

    const form = new FormData();
    form.append("name", values.name);
    form.append("scheduler", values.scheduler);
    form.append("schedule_date", schedule_date);
    form.append("email", values.email);
    form.append("interval_range", values.interval_range);
    form.append("interval_time", values.interval_time);
    form.append("stop_date", stop_date);
    form.append("file", values.file);
    form.append("type", type);

    scheduleReport(form);
  };

  const handleLang = ({ target: { value } }) => {
    getLang(value);
  };
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <h1 style={{ flex: "2" }}>{translate("Schedule Report")}</h1>
        <Select
          style={{ justifySelf: "flex-end", alignSelf: "center", flex: "1" }}
          onChange={handleLang}
        >
          <option value='ENGLISH'>ENGLISH</option>
          <option value='FRENCH'>FRENCH</option>
          <option value='HAUSA'>HAUSA</option>
          <option value='YORUBA'>YORUBA</option>
          <option value='IGBO'>IGBO</option>
        </Select>
      </div>
      <Form onSubmit={onsubmit}>
        <DivGroup>
          <Label>{translate("Schedule Title")}</Label>
          <Input
            type='text'
            name='name'
            placeholder='Name...'
            onChange={handleInput}
          />
          {errors && errors.name && (
            <ErrorLabel>*This Field cannot be empty</ErrorLabel>
          )}
        </DivGroup>
        <DivGroup>
          <Label>{translate("Report Document")}</Label>
          <Input
            type='file'
            placeholder='Upload a report'
            onChange={handleFile}
          />
        </DivGroup>
        <DivGroup>
          <Label>{translate("Report Sender")}</Label>
          <Input
            type='text'
            name='scheduler'
            placeholder='Report sender...'
            onChange={handleInput}
          />
          {errors && errors.scheduler && (
            <ErrorLabel>*This Field cannot be empty</ErrorLabel>
          )}
        </DivGroup>
        <DivGroup>
          <Label>{translate("email")}</Label>
          <Input
            type='email'
            name='email'
            placeholder='Email Address'
            onChange={handleInput}
          />
        </DivGroup>
        <DivGroup>
          <Label>{translate("Pick a schedule time and date")}</Label>
          <Flex>
            <Input
              type='date'
              onChange={(e) =>
                setValues({ ...values, performed_at: e.target.value })
              }
            />
            <Input
              type='time'
              placeholder='hour/minute/am/pm'
              onChange={(e) =>
                setValues({ ...values, performed_time: e.target.value })
              }
            />
          </Flex>
          {error && <ErrorLabel>*This Field cannot be empty</ErrorLabel>}
        </DivGroup>

        <DivGroup>
          <Select
            onChange={(e) => {
              setType(e.target.value);
              setValues({
                ...values,
                interval: "",
                time: "",
                stop_date: "",
                stop_time: "",
              });
            }}
          >
            <option value='once'>Once</option>
            <option value='reoccuring'>Reoccuring</option>
          </Select>
        </DivGroup>

        {type === "reoccuring" && (
          <DivGroupAccordion>
            <DivGroup>
              <Label>{translate("Choose an interval")}</Label>
              <Input
                type='number'
                placeholder='Choose an interval'
                onChange={(e) =>
                  setValues({ ...values, interval_range: e.target.value })
                }
              />
            </DivGroup>
            <DivGroup>
              <Label>{translate("Choose Days")}</Label>
              <Select
                onChange={(e) =>
                  setValues({ ...values, interval_time: e.target.value })
                }
              >
                {data.map((d) => (
                  <option key={d} value={d}>
                    {d.toLocaleUpperCase()}
                  </option>
                ))}
              </Select>
            </DivGroup>
            <DivGroup>
              <Label>{translate("Pick a schedule time and date")}</Label>
              <Flex>
                <Input
                  type='date'
                  onChange={(e) =>
                    setValues({ ...values, stop_date: e.target.value })
                  }
                />
                <Input
                  type='time'
                  placeholder='hour/minute/am/pm'
                  onChange={(e) =>
                    setValues({ ...values, stop_time: e.target.value })
                  }
                />
              </Flex>
            </DivGroup>
          </DivGroupAccordion>
        )}

        <Button type='submit' onClick={onsubmit}>
          {translate("Schedule Report")}
        </Button>
      </Form>

      <div>
        <DisplaySchedule />
      </div>
    </Container>
  );
};

export default SchedulePage;
