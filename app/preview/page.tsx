'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { FORM_FIELDS, FormDataPayload } from '@/lib/types';

export default function PreviewPage() {
  const [data, setData] = useState<FormDataPayload | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('jpphFormData');
    if (raw) setData(JSON.parse(raw));
  }, []);

  const formEntries = useMemo(() => {
    if (!data) return [];
    return FORM_FIELDS.map((f) => ({ label: f.label, value: data[f.name] || '-' }));
  }, [data]);

  const onGenerate = async () => {
    if (!data) return;
    const res = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert('Gagal jana PDF. Sila pastikan fail template ada di public/Borang-JPPH-T-11-A-Pindaan-2026.pdf');
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Borang-JPPH-T-11-A-Lengkap.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Preview Data</h1>
      <div className="mb-6 grid grid-cols-1 gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-2">
        {formEntries.map((entry) => (
          <div key={entry.label}>
            <p className="text-xs text-slate-500">{entry.label}</p>
            <p className="text-sm font-medium">{entry.value}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/" className="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
          Kembali Edit
        </Link>
        <button onClick={onGenerate} className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700">
          Generate & Download PDF
        </button>
      </div>
    </main>
  );
}
