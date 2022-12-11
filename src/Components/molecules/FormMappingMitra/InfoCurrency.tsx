import React from 'react';
import { FormInput } from '..';
import { useAppSelector } from '../../../Services/redux/hook';
import { convertCurrencyToNumber } from '../../../Services/Utils/currencyHelper';

type FormProps = {
  form?: any;
};

export default function InfoCurrency(props: FormProps) {
  const { selectedProjectMitra } = useAppSelector((state) => state.hasMitra);
  let akumulasiMitraCogs: any = selectedProjectMitra?.project_mitra?.reduce(
    (a, b) => a + b.nilai_realisasi_cogs,
    0,
  );

  let finalCurrency =
    selectedProjectMitra?.inisiasi?.nilai_project -
    (props.form.nilai_realisasi_cogs === ''
      ? akumulasiMitraCogs
      : akumulasiMitraCogs +
        convertCurrencyToNumber(props.form.nilai_realisasi_cogs));

  return (
    <div className="mb-8">
      <div className="relative grid grid-cols-3 gap-4">
        <FormInput
          isDisabled={true}
          labelName="Nilai COGS"
          inputValue={selectedProjectMitra?.inisiasi?.nilai_project?.toLocaleString(
            'id-ID',
          )}
        />
        <FormInput
          isDisabled={true}
          labelName="Akumulasi COGS Mitra"
          inputValue={akumulasiMitraCogs?.toLocaleString('id-ID')}
        />
        <FormInput
          isDisabled={true}
          labelName="Nilai Sisa COGS"
          inputValue={finalCurrency.toLocaleString('id-ID')}
        />
      </div>

      {finalCurrency < 0 && (
        <p className="text-red-600 font-medium text-sm leading-relaxed mt-2">
          Akumulasi Nilai melebihi nilai COGS Project
        </p>
      )}
    </div>
  );
}
