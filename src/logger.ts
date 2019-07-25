import { Colors } from './colors';


function print(...args: any[]) {
  let str = "";

  for (let i = 0; i < args.length; i++) {

    if (args[i] instanceof Error) {
      str += args[i].stack;
    }
    else if (typeof args[i] === "object") {
      str += JSON.stringify(args[i], null, 2);
    }
    else {
      str += args[i];
    }

    if (i !== args.length - 1) {
      str += " ";
    }
    else {
      str += Colors.reset;
    }
  }
  console.log(str);
}

function getTimestamp () {
  return new Date().toDateString();
}

export function error(...args: any[]) {
  print(getTimestamp(), Colors.fgRed, "[ERROR]", Colors.reset, ...args);
}

export function warn(...args: any[]) {
  print(getTimestamp(), Colors.fgYellow, "[WARN]", Colors.reset, ...args);
}

export function info(...args: any[]) {
  print(getTimestamp(), Colors.fgGreen, "[INFO]", Colors.reset, ...args);
}

export function debug(...args: any[]) {
  print(getTimestamp(), Colors.fgBlue, "[DEBUG]", Colors.reset, ...args);
}

export const logger = {
  error,
  warn,
  info,
  debug
};
