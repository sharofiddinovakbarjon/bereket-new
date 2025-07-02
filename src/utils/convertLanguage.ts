export function convertLanguage(lang: string) {
  switch (lang) {
    case "uz":
      return "O'zbek";
      break;
    case "en":
      return "English";
      break;
    case "ru":
      return "Русский";
      break;
    case "qr":
      return "Qaraqalpaqsha";
      break;

    default:
      return "";
      break;
  }
}
