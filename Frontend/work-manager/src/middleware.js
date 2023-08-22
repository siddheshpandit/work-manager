import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Middleware Executed");
  const authToken = request.cookies.get("authToken")?.value;

  if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
    return;
  }
  const loggedInUserNotAccessiblePaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/sign-up";

  if (loggedInUserNotAccessiblePaths) {
    if (authToken) {
        return NextResponse.redirect(new URL('/profile/user', request.url))
    }
  }
  else{
    if(!authToken){
      if(request.nextUrl.pathname.startsWith("/api")){
        return NextResponse.json({
          message:"Access Denied",
          success:false
        },{
          status:401
        })
      }
        return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/sign-up",
    "/add-task",
    "/view-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
