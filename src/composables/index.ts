import moment from "moment";

export function useConversorFarenheit(value: number | undefined) {
  if (value) {
    return Math.round((value * 9) / 5 + 32);
  } else return value;
}

export function formatData(data: string | Date) {
  return moment(data).format("DD/MM/YYYY");
}

export function formatDataName(data: string) {
  return moment(data).format("LL");
}

export function replace64for128(url: string | undefined) {
  return url?.replace("64x64", "128x128");
}

const iconMap = {
  113: "01", // clear
  116: "02", // partly cloudy
  119: "03", // cloudy
  122: "04", // overcast
  143: "50", // mist
  176: "09", // patchy rain
  179: "13", // patchy snow
  182: "13", // patchy sleet
  185: "09", // freezing drizzle
  200: "11", // thunder
  227: "13", // blowing snow
  230: "13", // blizzard
  248: "50", // fog
  260: "50", // freezing fog
  263: "09", // patchy light drizzle
  266: "09", // light drizzle
  281: "09", // freezing drizzle
  284: "09", // heavy freezing drizzle
  293: "09", // patchy light rain
  296: "10", // light rain
  299: "10", // moderate rain
  302: "10", // moderate rain
  305: "10", // heavy rain
  308: "10", // heavy rain
  311: "09", // light freezing rain
  314: "09", // heavy freezing rain
  317: "13", // light sleet
  320: "13", // heavy sleet
  323: "13", // patchy light snow
  326: "13", // light snow
  329: "13", // moderate snow
  332: "13", // moderate snow
  335: "13", // heavy snow
  338: "13", // heavy snow
  350: "13", // ice pellets
  353: "09", // light rain shower
  356: "09", // heavy rain shower
  359: "09", // torrential rain
  362: "13", // light sleet shower
  365: "13", // heavy sleet shower
  368: "13", // light snow shower
  371: "13", // heavy snow shower
  374: "13", // light ice pellet showers
  377: "13", // heavy ice pellet showers
  386: "11", // patchy rain with thunder
  389: "11", // thunder with rain
  392: "11", // patchy snow with thunder
  395: "11", // heavy snow with thunder
};

export function getWeatherIconUrl(code: any, isDay = true) {
  const mapped = iconMap[code as keyof typeof iconMap] || "01";
  const suffix = isDay ? "d" : "n";

  return `https://openweathermap.org/img/wn/${mapped}${suffix}@2x.png`;
}
