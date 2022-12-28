import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content, PreviewMitra } from '../../Components/molecules';
import progalApi from '../../Middleware/progal-api';

export default function Index() {
  const { id } = useParams();
  const [dataProjectMitra, setdataProjectMitra] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const res = await progalApi.detailProjectMitra({
          params: {
            id: id,
          },
        });

        setdataProjectMitra(res.data[0]);

        return res;
      } catch (error: any) {
        console.log(error);
        return error;
      }
    })();
  }, [id]);

  return (
    <Content textHeading="Detail Project Mitra" backNavigation>
      <PreviewMitra data={dataProjectMitra} handlerPreview={true} />
    </Content>
  );
}
