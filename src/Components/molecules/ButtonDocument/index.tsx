import {
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../../atoms';

type Props = {
  isUpload?: boolean;
  handlerClick?: (type: string, item: any) => void | null;
  type?: string;
  item?: any;
  document?: any;
  documentName?: string;
};

export default function Index(props: Props) {
  return (
    <div className="relative flex gap-2">
      {props.isUpload === null ? (
        <Button
          handlerClick={() =>
            props.handlerClick?.(props.documentName ?? '', props.item)
          }
          title={`Upload File ${props.documentName}`}
          isTransparent="primary">
          <DocumentPlusIcon className="h-5" />
        </Button>
      ) : (
        <>
          <Button
            handlerClick={() => props.handlerClick?.('preview', props.item)}
            title={`Preview File ${props.documentName ?? ''}`}
            type="button"
            isTransparent="warning">
            <DocumentCheckIcon className="h-5" />
          </Button>
          <Button
            handlerClick={() => props.handlerClick?.('update', props.item)}
            title={`Update File ${props.documentName}`}
            type="button"
            isTransparent="update">
            <DocumentDuplicateIcon className="h-5" />
          </Button>
        </>
      )}
    </div>
  );
}
