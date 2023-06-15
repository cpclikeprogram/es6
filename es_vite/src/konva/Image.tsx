import { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";


export const KonvaImage: React.FC<any> = ({ url = "", handleSelected = () => { }, isSelected = false, ...props }) => {

    const [image, status] = useImage(url, 'anonymous');
    const imgRef = useRef(null);
    const trRef = useRef(null);

    useEffect(() => {
        // if (isSelected) {
        //     if (trRef.current) {
        //         (trRef.current as any).nodes([imgRef.current]);
        //         (trRef.current as any).getLayer().batchDraw();
        //     }
        // }
        console.info(props.myRef)

    }, [isSelected])
    return <>
        {
            props.myRef ? <Image
                image={(image)}
                draggable
                ref={props.myRef}
                width={200}
                height={200}
                onClick={handleSelected}
                {...props} /> : null
        }

    </>

}


export default KonvaImage;