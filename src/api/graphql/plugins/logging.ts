import { PluginDefinition } from "apollo-server-core";

export const logging = (): PluginDefinition => {
  let id = 0;

  const banner = (str: string) => {
    const symbols = "=".repeat(Math.floor(40 - str.length / 2));

    if (str.length % 2 !== 0) {
      return symbols + str + symbols + "=";
    }

    return symbols + str + symbols;
  };

  return {
    requestDidStart: async () => ({
      willSendResponse: async (ctx) => {
        id += 1;
        console.info(banner(`Request Start ${id}`));
        console.info(banner(`Query Start ${id}`));
        console.info((ctx.request.query || "").trim());
        console.info(banner(`Query End ${id}`));
        console.info(banner(`Variables Start ${id}`));
        console.info(ctx.request.variables);
        console.info(banner(`Variables End ${id}`));
        console.info(banner(`Data Start ${id}`));
        console.info({ data: ctx.response.data, errors: ctx.response.errors });
        console.info(banner(`Data End ${id}`));
        console.info(banner(`Request End ${id}`));
      },
    }),
  };
};
