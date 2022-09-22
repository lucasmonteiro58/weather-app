export function useConversorFarenheit(value: number | undefined) {
  if (value) {
    return Math.round((value * 9) / 5 + 32);
  } else return value;
}
