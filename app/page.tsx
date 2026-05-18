'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FORM_FIELDS, FormDataPayload } from '@/lib/types';

const initialState = FORM_FIELDS.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {} as FormDataPayload);

export default function HomePage() {
  const [formData, setFormData] = useState<FormDataPayload>(initialState);
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('jpphFormData', JSON.stringify(formData));
    router.push('/preview');
  };

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-2 text-2xl font-semibold">Borang JPPH T-11-A (Pindaan 2026)</h1>
      <p className="mb-6 text-sm text-slate-600">Isi medan kosong, semak di preview, kemudian jana PDF.</p>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FORM_FIELDS.map((field) => (
          <label key={field.name} className="space-y-1 text-sm">
            <span className="font-medium">{field.label}</span>
            <input
              value={formData[field.name]}
              onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              placeholder={field.placeholder ?? 'Masukkan nilai'}
            />
          </label>
        ))}
        <div className="md:col-span-2">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="submit">
            Seterusnya: Preview
          </button>
        </div>
      </form>
    </main>
  );
}
