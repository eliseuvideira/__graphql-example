import { PluginDefinition } from "apollo-server-core";

export const logging: PluginDefinition = {
  requestDidStart: async () => ({
    willSendResponse: async (ctx) => {
      console.info((ctx.request.query || "").trim());
      console.info({ variables: ctx.request.variables });
      console.info({ data: ctx.response.data, errors: ctx.response.errors });
    },
  }),
};
