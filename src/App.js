import React, { useContext } from "react";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import { I18nProvider, LOCALES } from "./i18n";
import { ScheduleContext } from "./context/Provider";

import "react-calendar/dist/Calendar.css";

function App() {
  const { lang } = useContext(ScheduleContext);
  return (
    <I18nProvider locale={LOCALES[lang]}>
      <SchedulePage />
    </I18nProvider>
  );
}

export default App;
