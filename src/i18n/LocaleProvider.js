import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import messages from "../i18n/messages";
import { LOCALES } from "./locales";

const LocaleProvider = ({ children, locale = LOCALES.ENGLISH }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
