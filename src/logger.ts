import { ILogger, IAppExtension, IArchApp } from '@nodearch/core';
import { Colors } from './colors';


export class Logger implements ILogger, IAppExtension {
  
  async onInit(archApp: IArchApp): Promise<void> {
    archApp.globalProviders.push({ provider: Logger, use: this });
  }
  
  async onStart(archApp: IArchApp): Promise<void> {}

  error(...args: any[]): void {
    this.print(this.getTimestamp(), Colors.fgRed, "[ERROR]", Colors.reset, ...args);
  } 

  warn(...args: any[]): void {
    this.print(this.getTimestamp(), Colors.fgYellow, "[WARN]", Colors.reset, ...args);
  }

  info(...args: any[]): void {
    this.print(this.getTimestamp(), Colors.fgGreen, "[INFO]", Colors.reset, ...args);
  }

  debug(...args: any[]): void {
    this.print(this.getTimestamp(), Colors.fgBlue, "[DEBUG]", Colors.reset, ...args);
  }

  private print(...args: any[]) {
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
  
  private getTimestamp () {
    return new Date().toDateString();
  }
}