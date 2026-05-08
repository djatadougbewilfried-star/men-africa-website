import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ success: false, reason: 'no_config' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { page, referrer } = await req.json();

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const country = req.headers.get('x-vercel-ip-country') || 'CI';
    const city = req.headers.get('x-vercel-ip-city') || 'Abidjan';
    const userAgent = req.headers.get('user-agent') || '';

    const { error } = await supabase.from('visitors').insert([
      {
        ip,
        country,
        city,
        page: page || '/',
        referrer: referrer || '',
        user_agent: userAgent,
      },
    ]);

    if (error) {
      return NextResponse.json({ success: false, reason: error.message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, reason: String(err) });
  }
}
