export type FormDataPayload = {
  rujTuan: string;
  rujKami: string;
  tarikh: string;
  noLotPt: string;
  noHakMilik: string;
  seksyen: string;
  mukimBandar: string;
  daerahBahagianJajahan: string;
  namaPemohon1: string;
  noKpPemohon1: string;
  namaPemohon2: string;
  noKpPemohon2: string;
  noRujukanPpi1: string;
  noRujukanPpi2: string;
  peringkatKesiapanRumah: string;
  namaKontraktorPemaju: string;
  tarikhKontraktor: string;
  namaPemohon1Tandatangan: string;
  noKpPemohon1Tandatangan: string;
  tarikhPemohon1: string;
  namaPemohon2Tandatangan: string;
  noKpPemohon2Tandatangan: string;
  tarikhPemohon2: string;
};

export const FORM_FIELDS: Array<{ name: keyof FormDataPayload; label: string; placeholder?: string }> = [
  { name: 'rujTuan', label: 'Ruj. Tuan' },
  { name: 'rujKami', label: 'Ruj. Kami' },
  { name: 'tarikh', label: 'Tarikh' },
  { name: 'noLotPt', label: 'No. Lot/PT' },
  { name: 'noHakMilik', label: 'No. Hak Milik' },
  { name: 'seksyen', label: 'Seksyen' },
  { name: 'mukimBandar', label: 'Mukim/Bandar' },
  { name: 'daerahBahagianJajahan', label: 'Daerah/Bahagian/Jajahan' },
  { name: 'namaPemohon1', label: 'Nama Pemohon 1' },
  { name: 'noKpPemohon1', label: 'No. KP Pemohon 1' },
  { name: 'namaPemohon2', label: 'Nama Pemohon 2' },
  { name: 'noKpPemohon2', label: 'No. KP Pemohon 2' },
  { name: 'noRujukanPpi1', label: 'No. Rujukan PPI 1' },
  { name: 'noRujukanPpi2', label: 'No. Rujukan PPI 2' },
  { name: 'peringkatKesiapanRumah', label: 'Peringkat kesiapan rumah %' },
  { name: 'namaKontraktorPemaju', label: 'Nama Kontraktor/Pemaju' },
  { name: 'tarikhKontraktor', label: 'Tarikh Kontraktor' },
  { name: 'namaPemohon1Tandatangan', label: 'Nama Pemohon 1 (ruangan tandatangan)' },
  { name: 'noKpPemohon1Tandatangan', label: 'No. KP Pemohon 1 (ruangan tandatangan)' },
  { name: 'tarikhPemohon1', label: 'Tarikh Pemohon 1' },
  { name: 'namaPemohon2Tandatangan', label: 'Nama Pemohon 2 (ruangan tandatangan)' },
  { name: 'noKpPemohon2Tandatangan', label: 'No. KP Pemohon 2 (ruangan tandatangan)' },
  { name: 'tarikhPemohon2', label: 'Tarikh Pemohon 2' },
];
