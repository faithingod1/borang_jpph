import { readFile } from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { PDF_COORDINATES } from '@/lib/pdfCoordinates';
import { FormDataPayload } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as FormDataPayload;
    const templatePath = path.join(process.cwd(), 'public', 'Borang-JPPH-T-11-A-Pindaan-2026.pdf');
    const templateBytes = await readFile(templatePath);

    const pdfDoc = await PDFDocument.load(templateBytes);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    for (const [fieldKey, value] of Object.entries(payload)) {
      if (!value?.trim()) continue;
      const coordinate = PDF_COORDINATES[fieldKey as keyof FormDataPayload];
      if (!coordinate) continue;

      const page = pages[coordinate.page];
      page.drawText(value, {
        x: coordinate.x,
        y: coordinate.y,
        size: coordinate.size ?? 10,
        font,
        color: rgb(0, 0, 0),
        maxWidth: coordinate.maxWidth,
      });
    }

    const outBytes = await pdfDoc.save();
    return new NextResponse(outBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Borang-JPPH-T-11-A-Lengkap.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to generate PDF. Ensure template exists at public/Borang-JPPH-T-11-A-Pindaan-2026.pdf' },
      { status: 500 },
    );
  }
}
