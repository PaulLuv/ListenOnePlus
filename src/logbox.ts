export function debug(msg: string, ...extras) {
  console.info(msg, ...extras);
}

export function info(msg: string, ...extras) {
  console.info(msg, ...extras);
}

export function warn(msg: string, ...extras) {
  console.warn(msg, ...extras);
}
export function error(msg: string, ...extras) {
  console.error(msg, ...extras);
}

export class Log {
  static debug(msg: string, ...extras) {
    console.info(msg, ...extras);
  }

  static info(msg: string, ...extras) {
    console.info(msg, ...extras);
  }

  static warn(msg: string, ...extras) {
    console.warn(msg, ...extras);
  }
  static error(msg: string, ...extras) {
    console.error(msg, ...extras);
  }
}

export const logbox = new Log()

export default logbox;
