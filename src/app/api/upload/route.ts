import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(req) {
    const form = await req.formData();
    const file = form.get('file');

    if (!file) {
        return NextResponse.json(
            { error: 'No file uploaded' },
            { status: 400 },
        );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
        .from('images') // tên bucket
        .upload(fileName, buffer, {
            contentType: file.type,
            upsert: false,
        });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${fileName}`;

    return NextResponse.json({
        message: 'Uploaded!',
        url: publicUrl,
    });
}
