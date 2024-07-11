import pino, { type TransportTargetOptions } from "pino";

const transport: TransportTargetOptions = {
  target: "pino-pretty",
  options: {
    colorize: true,
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l o",
    ignore: "pid,hostname",
  },
};

const logger = pino({
  transport,
});

export default logger;
