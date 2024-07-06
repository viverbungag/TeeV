import { type NextRequest, NextResponse } from 'next/server';
import { authenticatedUser } from '@/app/cognito/amplify-server-utils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = await authenticatedUser({ request, response });

  const isOnLogin = request.nextUrl.pathname.startsWith('/admin/login');

  if (!user && request.nextUrl.pathname.startsWith('/admin') && !isOnLogin) {
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
  }

  if (user && isOnLogin) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return response;
}

export const config = {
  /*
   * Match all request paths except for the ones starting with
   */
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
