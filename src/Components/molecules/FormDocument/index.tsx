import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '..';
import { updateFileProject } from '../../../Services/redux/Actions/project';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Button } from '../../atoms';

export default function Index() {
  const dispatch = useAppDispatch();
  const { selectedProjectMitra } = useAppSelector((state) => state.hasMitra);

  console.log('test', selectedProjectMitra);

  const [form, setform] = useState<any>({
    file_p6: '',
    file_p8: '',
    file_kl: '',
  });

  const handlerChangeValueFile = (e: any) => {
    const { name, files } = e.target;
    setform({
      ...form,
      [name]: files[0],
    });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await dispatch(
        updateFileProject(selectedProjectMitra?.id?.toString(), form),
      );
      console.log(res);

      return res;
    } catch (error: any) {
      console.log(error);
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
