import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoginRoute = pathname === "/panel-ceronix/login";

  if (!isLoginRoute && !req.auth) {
    const loginUrl = new URL("/panel-ceronix/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/panel-ceronix/:path*"],
};
