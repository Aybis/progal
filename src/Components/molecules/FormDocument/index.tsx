import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '..';
import { updateFileProject } from '../../../Services/redux/Actions/project';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Button } from '../../atoms';

type Props = {
  handlerClose: (arg: boolean) => void;
};

export default function Index(props: Props) {
  const dispatch = useAppDispatch();
  const { selectedProjectMitra } = useAppSelector((state) => state.hasMitra);

  const [form, setform] = useState<any>({
    file_p6: '',
    file_p8: '',
    file_kl: '',
  });

  const handlerChangeValueFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setform({
      ...form,
      [name]: e?.target?.files?.[0],
    });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(form).forEach((item) => {
      formData.append(item, form[item]);
    });

    try {
      const res = await dispatch(
        updateFileProject(selectedProjectMitra?.id?.toString(), formData),
      );
      Swal.fire('Success', 'Upload file success', 'success');
      props?.handlerClose?.(false);
      return res;
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
      return error;
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      {Object.keys(form).map((item) => {
        return (
          <FormInput
            key={item}
            labelName={item.replace(/_/g, ' ').toUpperCase()}
            inputName={item}
            inputType="file"
            onChange={handlerChangeValueFile}
          />
        );
      })}

      <Button typeClass="primary" type="submit" classButton="py-2 mt-4">
        Upload
      </Button>
    </form>
  );
}
