/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

export function formatToDateTime(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatToDate(
  date: dayjs.Dayjs | string | undefined = undefined,
  format = DATE_FORMAT,
): string {
  return dayjs(date).format(format);
}

export function formatToMoment(date) {
  const mistiming = Math.round(dayjs(Date.now()).diff(dayjs(date), 'second'));
  const arrr = ['年', '个月', '周', '天', '小时', '分钟', '秒'];
  const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (let i = 0; i < arrn.length; i++) {
    const inm = Math.floor(mistiming / arrn[i]);
    if (inm != 0) {
      return inm + arrr[i] + '前';
    }
  }
}

export const dateUtil = dayjs;
