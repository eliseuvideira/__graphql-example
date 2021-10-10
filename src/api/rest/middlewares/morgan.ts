import _morgan from "morgan";

export const MORGAN_FORMAT = `':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms - ":referrer" ":user-agent"'`;

export const morgan = () => _morgan(MORGAN_FORMAT);
