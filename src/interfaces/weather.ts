export interface IWeather {
  lat: number;
  lon: number;
  sunrise: string;
  datetime: string;
  sunset: string;
  timezone: string;
  source: string[];
  ob_time: string;
  ts: number;
  city_name: string;
  state_code: string;
  pres: number;
  slp: number;
  wind_spd: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  app_temp: number;
  rh: number;
  dewpt: number;
  clouds: number;
  pod: string;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  vis: number;
  precip: number;
  snow: number;
  uv: number;
  aqi: number;
  dhi: number;
  dni: number;
  ghi: number;
  solar_rad: number;
  elev_angle: number;
}

export interface IWeatherMinutely {
  timestamp_utc: string;
  snow: number;
  temp: number;
  timestamp_local: string;
  ts: number;
  precip: number;
}

export interface IWeatherResponse {
  data: IWeather[];
  count: number;
  minutely: IWeatherMinutely[];
}
