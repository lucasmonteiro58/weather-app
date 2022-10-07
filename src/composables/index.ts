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
