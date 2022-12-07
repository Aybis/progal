import React, { useState } from 'react';
import { FormInput } from '../';
import { RadioGroup } from '../../atoms';

type ProjectMitra = {
  onSubmit?: (data: any) => void;
  projectMitra?: any;
};

export default function Index(props: ProjectMitra) {
  console.log('data', props.projectMitra);
  const [caraBayarSelected, setcaraBayarSelected] = useState('');

  const dataCaraBayar: Array<string> = [
    'One Time Charge',
    'Cash Before Delivery',
    'Cash on Delivery',
    'Progress',
    'Termin',
  ];

  const [formUpdateMitra, setformUpdateMitra] = useState({
    deskripsi_pekerjaan: '',
    tata_cara_pembayaran: '',
    is_down_payment: false,
    nilai_pekerjaan: 0,
    nilai_realisasi_cogs: 0,
    nilai_down_payment: 0,
    start_jangka_waktu_pekerjaan: '',
    end_jangka_waktu_pekerjaan: '',
  });

  return (
    <div className="relative flex flex-col gap-4">
      <RadioGroup
        label="Cara Bayar"
        setDokumenSelected={setcaraBayarSelected}
        dokumenSelected={caraBayarSelected}
        listData={dataCaraBayar}
      />
      {Object.keys(formUpdateMitra).map((key) => {
        return (
          <FormInput
            key={key}
            placeholder={key.replace(/_/g, ' ')}
            typeForm={key.includes('nilai') ? 'currency' : ''}
            inputType={key.includes('jangka') ? 'date' : 'text'}
            classLabel="capitalize"
            labelName={key.replace(/_/g, ' ')}
            inputName="nilai_realisasi_cogs"
          />
        );
      })}
    </div>
  );
}
