import {
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../../atoms';

type Props = {
  isUpload?: boolean;
  handlerClick?: (
    type: string,
    item: any,
    document?: any,
    typeForm?: any,
  ) => void | null;
  item?: any;
  document?: any;
  documentName?: string;
};

export default function Index(props: Props) {
  return (
    <div className="relative flex gap-2">
      {props.isUpload === null || props.isUpload === undefined ? (
        <div className="flex justify-center items-center w-full h-full">
          <Button
            handlerClick={() =>
              props.handlerClick?.(props.documentName ?? '', props.item)
            }
            title={`Upload File ${props.documentName}`}
            isTransparent="primary">
            <DocumentPlusIcon className="h-5" />
          </Button>
        </div>
      ) : (
        <div className="relative flex justify-center items-center w-full gap-2">
          <Button
            handlerClick={() =>
              props.handlerClick?.(
                props.documentName ?? '',
                props.item,
                props.isUpload,
                'preview',
              )
            }
            title={`Preview File ${props.documentName ?? ''}`}
            type="button"
            isTransparent="warning">
            <DocumentCheckIcon className="h-5" />
          </Button>
          <Button
            handlerClick={() =>
              props.handlerClick?.(
                props.documentName ?? '',
                props.item,
                props.isUpload,
                'update',
              )
            }
            title={`Update File ${props.documentName}`}
            type="button"
            isTransparent="update">
            <DocumentDuplicateIcon className="h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
