import { NextResponse } from 'next/server'
import {cookies} from "next/headers";

export async function middleware(request) {
    const userId = (await cookies()).get('user_id');

    if (!userId && request.url !== '/auth/register') {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

export const config = {
    matcher: '/((?!auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|pokeball.webp).*)',
};