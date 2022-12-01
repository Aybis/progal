import Swal from 'sweetalert2';

type PropsSweet = {
  status?: 'success' | 'warning' | 'error' | string | any;
  title?: string;
  text?: string;
};

const sweetHelper = (props: PropsSweet) => {
  Swal.fire({
    title: props.title,
    text: props.text,
    icon: props.status,
    confirmButtonText: 'OK',
  });
};

export default sweetHelper;
