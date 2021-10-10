import { ResolverFn } from "@ev-graphql-2/create-resolver";
import { Context } from "../utils/context";
import { resolver } from "./resolver";

export const loggable = <Source, Result, Args>(
  fn: ResolverFn<Source, Result, Args, Context>,
) =>
  resolver<Source, Result, Args>(async (source, args, ctx, info) => {
    const result = await fn(source, args, ctx, info);

    console.info((ctx.req.body.query || "").trim());
    console.info({ variables: ctx.req.body.variables });
    console.info(result);

    return result;
  });
