import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Button } from '../../Components/atoms';
import { FormInput } from '../../Components/molecules';
import { GetProfileUser, LoginUser } from '../../Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from '../../Services/redux/hook';
import { getImageFromAssets } from '../../Services/Utils/assetHelper';

export default function Index() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log('user redux', user);

  const [formInput, setformInput] = useState({
    username: '',
    password: '',
  });

  const handlerChangeInput = (e: any) => {
    const { name, value } = e.target;
    setformInput({
      ...formInput,
      [name]: value,
    });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const res: any = await dispatch(LoginUser(formInput));
    if (res.http_code === 200) {
      const getProfile: any = await dispatch(GetProfileUser());
      if (getProfile.http_code === 200) {
        navigate('/dashboard', { replace: true });
      }
    } else {
      alert(res?.message ?? 'Something went wrong');
    }
  };

  return (
    <div className="relative min-h-screen max-h-full w-full bg-zinc-50 flex justify-center items-center">
      <div className="relative h-full max-w-xl w-full bg-white p-8 rounded-xl shadow-xl">
        <div className="relative flex justify-between">
          <h1 className="text-4xl font-bold leading-relaxed text-zinc-900 hidden">
            E-PROGAL
          </h1>
          <img
            src={getImageFromAssets('images/pins.png')}
            alt=""
            className="h-16 object-cover object-top"
          />
        </div>
        <div className="relative mt-16">
          <h1 className="text-3xl static top-0 font-semibold leading-relaxed tracking-wide text-gray-800">
            Login
          </h1>
          <p className="text-base font-normal text-gray-800 leading-relaxed text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <form
          id="form-login"
          className="mt-8 grid gap-4"
          onSubmit={handlerSubmit}>
          <FormInput
            isDisabled={user?.loading}
            labelName="Username"
            inputName="username"
            inputType="text"
            isRequired={true}
            placeholder="Username"
            isError={user.isError}
            message={user.message}
            onChange={handlerChangeInput}
          />

          <FormInput
            isDisabled={user?.loading}
            labelName="Password"
            inputName="password"
            inputType="password"
            placeholder="Password"
            isRequired={true}
            isError={user.isError}
            message={user.message}
            onChange={handlerChangeInput}
          />

          <div className="relative flex justify-end -mt-2">
            <Anchor
              target={'_blank'}
              href="https://myday.pins.co.id/forget"
              title="forgot password">
              Forgot password?
            </Anchor>
          </div>
          <div className="relative mt-4">
            <Button
              isSubmit={user?.loading}
              isDisabled={user?.loading}
              typeClass="primary"
              type="submit"
              classButton="w-full">
              Login
            </Button>
          </div>

          <div className="relative flex justify-center items-center mt-6">
            <Anchor>Back to Apps</Anchor>
          </div>
        </form>
      </div>
    </div>
  );
}
