import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";

import { routes } from "./routes";

export async function render(url: string) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request("http://localhost" + url));

  if (context instanceof Response) {

    return { html: "", redirect: context.headers.get("Location") };
  }

  const router = createStaticRouter(handler.dataRoutes, context);

  const html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  return { html };
}
