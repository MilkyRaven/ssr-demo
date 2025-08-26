import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";

import { routes } from "./routes";

export async function render(url: string) {
  const handler = createStaticHandler(routes);
  console.log("Rendering URL:", url);
  const context = await handler.query(new Request("http://localhost" + url));

  if (context instanceof Response) {
    console.log("Loader returned a Response (redirect or error):", context.status, context.statusText);
    return { html: "", redirect: context.headers.get("Location") };
  }


  console.log("Context loader data:", context.loaderData);
  console.log("Context params:", context.matches?.map(m => m.params));

  const router = createStaticRouter(handler.dataRoutes, context);

  const html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  return { html };
}
