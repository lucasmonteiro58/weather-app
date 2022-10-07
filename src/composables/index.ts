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
