import { createI18n } from "vue-i18n";
import getBrowserLocale from "./util/i18n/get-browser-locale";
import { supportedLocalesInclude } from "./util/i18n/supported-locales";

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });
  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en";
  }
}

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}
if (!localStorage.getItem("locale")) {
  localStorage.setItem("locale", getStartingLocale());
}
export default createI18n({
  locale: localStorage.getItem("locale"),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
