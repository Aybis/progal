import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Anchor, Button, ModalMessage } from '../../Components/atoms';
import { FormInput } from '../../Components/molecules';
import { GetProfileUser, LoginUser } from '../../Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from '../../Services/redux/hook';
import { getImageFromAssets } from '../../Services/Utils/assetHelper';

export default function Index() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showModalMessage, setshowModalMessage] = useState(false);

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

    // login handler
    const res: any = await dispatch(LoginUser(formInput));
    // await response login
    if (res.http_code === 200) {
      Swal.fire('Yeay!', 'Login success!', 'success');

      // get profile handler
      const userProfile: any = await dispatch(GetProfileUser());
      // condition status user
      if (userProfile?.http_code === 200) {
        setTimeout(() => {
          // success login redirect to homepage
          navigate('/', { replace: true });
        }, 300);
      }
    }
  };

  return (
    <div className="relative min-h-screen max-h-full w-full bg-zinc-50 flex justify-center items-center">
      <div className="relative h-full max-w-xl w-full bg-white p-8 rounded-xl shadow-xl">
        <div className="relative flex-row-reverse flex justify-between">
          <img
            src={getImageFromAssets('images/pins.png')}
            alt=""
            className="h-16 object-cover object-top"
          />
          <div className="relative flex flex-col gap-1 flex-shrink-0 items-start">
            <p className="font-semibold text-lg text-left">
              Procurement <span className="font-light text-xs">&</span>{' '}
            </p>
            <p className="-mt-1.5 font-semibold text-lg">Contract Management</p>
          </div>
        </div>
        <div className="relative mt-16">
          <h1 className="text-3xl static top-0 font-semibold leading-relaxed tracking-wide text-gray-800">
            Login
          </h1>
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
            isError={user?.isError}
            message={user?.message}
            onChange={handlerChangeInput}
          />

          <FormInput
            isDisabled={user?.loading}
            labelName="Password"
            inputName="password"
            inputType="password"
            placeholder="Password"
            isRequired={true}
            isError={user?.isError}
            message={user?.message}
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
              classButton="w-full py-2.5 rounded-lg tracking-wide font-semibold">
              Login
            </Button>
          </div>

          <div className="relative flex justify-center items-center mt-6">
            <Anchor>Back to Apps</Anchor>
          </div>
        </form>
      </div>

      <ModalMessage
        onClose={() => setshowModalMessage(false)}
        isShow={showModalMessage}
        typeModal={user?.isError ? 'error' : 'success'}
        heading={user?.isError ? 'Something happened' : 'Success'}
        description={
          user?.isError
            ? user?.message
            : `Login success, Welcome back ${user?.profile?.name}`
        }
      />
    </div>
  );
}
