import { FormDataPayload } from './types';

export type PdfFieldCoordinate = {
  page: number;
  x: number;
  y: number;
  size?: number;
  maxWidth?: number;
};

/**
 * Coordinate map for each form field.
 *
 * How to tune positions:
 * 1. Open the PDF template and identify each blank line area.
 * 2. Adjust x/y until the text aligns exactly on the target blank field.
 * 3. y=0 starts at the BOTTOM of the PDF page in pdf-lib's coordinate system.
 */
export const PDF_COORDINATES: Record<keyof FormDataPayload, PdfFieldCoordinate> = {
  rujTuan: { page: 0, x: 410, y: 760, size: 10 },
  rujKami: { page: 0, x: 410, y: 740, size: 10 },
  tarikh: { page: 0, x: 410, y: 720, size: 10 },
  noLotPt: { page: 0, x: 180, y: 620, size: 10 },
  noHakMilik: { page: 0, x: 180, y: 600, size: 10 },
  seksyen: { page: 0, x: 180, y: 580, size: 10 },
  mukimBandar: { page: 0, x: 180, y: 560, size: 10 },
  daerahBahagianJajahan: { page: 0, x: 180, y: 540, size: 10 },
  namaPemohon1: { page: 0, x: 180, y: 500, size: 10 },
  noKpPemohon1: { page: 0, x: 180, y: 480, size: 10 },
  namaPemohon2: { page: 0, x: 180, y: 460, size: 10 },
  noKpPemohon2: { page: 0, x: 180, y: 440, size: 10 },
  noRujukanPpi1: { page: 0, x: 180, y: 390, size: 10 },
  noRujukanPpi2: { page: 0, x: 180, y: 370, size: 10 },
  peringkatKesiapanRumah: { page: 0, x: 290, y: 335, size: 10 },
  namaKontraktorPemaju: { page: 0, x: 170, y: 290, size: 10 },
  tarikhKontraktor: { page: 0, x: 430, y: 290, size: 10 },
  namaPemohon1Tandatangan: { page: 0, x: 130, y: 190, size: 10 },
  noKpPemohon1Tandatangan: { page: 0, x: 130, y: 172, size: 10 },
  tarikhPemohon1: { page: 0, x: 130, y: 154, size: 10 },
  namaPemohon2Tandatangan: { page: 0, x: 370, y: 190, size: 10 },
  noKpPemohon2Tandatangan: { page: 0, x: 370, y: 172, size: 10 },
  tarikhPemohon2: { page: 0, x: 370, y: 154, size: 10 },
};
