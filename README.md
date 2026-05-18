# Borang JPPH T-11-A PDF Filler (Next.js)

A simple web app to fill text fields and generate a completed PDF by overlaying text on top of the **original Borang JPPH template**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- pdf-lib

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Put the original template PDF in:
   ```
   public/Borang-JPPH-T-11-A-Pindaan-2026.pdf
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## App flow

1. `/` Fill form fields.
2. `/preview` Review submitted values.
3. Click **Generate & Download PDF**.
4. `/api/generate-pdf` overlays text on the original PDF and returns downloadable output.

## Adjusting PDF text positions

Edit `lib/pdfCoordinates.ts`.

Each field has:

- `page`: page index (first page is `0`)
- `x`: horizontal position
- `y`: vertical position
- `size`: font size
- `maxWidth`: optional text width limit

Example:

```ts
rujTuan: { page: 0, x: 410, y: 760, size: 10 }
```

### Coordinate tips

- `pdf-lib` uses **bottom-left origin**.
- Increasing `x` moves text right.
- Increasing `y` moves text up.
- Make small changes (2-5 points) and regenerate to align exactly with blank lines.

## Notes

- This v1 intentionally has **no login/database/dashboard**.
- If PDF generation fails, verify template exists at:
  `public/Borang-JPPH-T-11-A-Pindaan-2026.pdf`.
