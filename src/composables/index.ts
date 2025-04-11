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
  113: "wsymbol_0001_sunny.png", // Clear/Sunny
  "116": "wsymbol_0002_sunny_intervals.png", // Partly Cloudy
  119: "wsymbol_0003_cloudy.png", // Cloudy
  122: "wsymbol_0004_black_low_cloud.png", // Overcast
  176: "wsymbol_0009_light_rain_showers.png", // Patchy rain nearby
  179: "wsymbol_0013_sleet_showers.png", // Patchy snow nearby
  182: "wsymbol_0013_sleet_showers.png", // Patchy sleet nearby
  185: "wsymbol_0017_freezing_drizzle.png", // Patchy freezing drizzle
  200: "wsymbol_0024_thunderstorms.png", // Thundery outbreaks
  227: "wsymbol_0019_snow_showers.png", // Blowing snow
  230: "wsymbol_0019_snow_showers.png", // Blizzard
  248: "wsymbol_0006_mist.png", // Mist
  260: "wsymbol_0007_fog.png", // Freezing fog
  263: "wsymbol_0009_light_rain_showers.png", // Patchy light drizzle
  266: "wsymbol_0008_drizzle.png", // Light drizzle
  281: "wsymbol_0017_freezing_drizzle.png", // Freezing drizzle
  293: "wsymbol_0009_light_rain_showers.png", // Patchy light rain
  296: "wsymbol_0008_drizzle.png", // Light rain
  299: "wsymbol_0010_heavy_rain_showers.png", // Moderate rain at times
  302: "wsymbol_0010_heavy_rain_showers.png", // Moderate rain
  305: "wsymbol_0010_heavy_rain_showers.png", // Heavy rain at times
  308: "wsymbol_0011_heavy_rain.png", // Heavy rain
  353: "wsymbol_0009_light_rain_showers.png", // Light rain shower
  356: "wsymbol_0010_heavy_rain_showers.png", // Moderate or heavy rain shower
  359: "wsymbol_0011_heavy_rain.png", // Torrential rain shower
  362: "wsymbol_0013_sleet_showers.png", // Light sleet showers
  365: "wsymbol_0013_sleet_showers.png", // Moderate or heavy sleet showers
  368: "wsymbol_0015_snow_showers.png", // Light snow showers
  371: "wsymbol_0016_heavy_snow_showers.png", // Heavy snow showers
  386: "wsymbol_0024_thunderstorms.png", // Patchy light rain with thunder
  389: "wsymbol_0024_thunderstorms.png", // Moderate or heavy rain with thunder
  392: "wsymbol_0025_thunderstorms_snow.png", // Patchy light snow with thunder
  395: "wsymbol_0025_thunderstorms_snow.png", // Moderate or heavy snow with thunder
};

export function getWeatherIconUrl(code: any) {
  const baseUrl = "https://assets.weatherstack.com/images/wsymbols01_png_64/";

  return baseUrl + iconMap[code as keyof typeof iconMap];
}
