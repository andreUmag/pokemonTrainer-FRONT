import { NextResponse } from 'next/server'
import {cookies} from "next/headers";

export async function middleware(request) {
    const token = (await cookies()).get('auth_token');

    if (!token && request.url !== '/auth/register' && request.url !== '/auth/login' && request.url !== '/auth/reset-password' && request.url !== '/auth/forgot-password') {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

export const config = {
    matcher: '/((?!auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|pokeball.webp).*)',
};
