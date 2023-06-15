import { FC, useEffect, useRef, useState } from "react";
import { Transformer } from "react-konva";

interface ITransformer {
    isSelected: boolean,
    handleSelected: Function,
    rotation?: number,
    opacity?: number,
    url: string,
}
export const withTransform = (Commponent: FC<any>): FC<any> => {
    const Inner: FC<any> = (props: ITransformer) => {
        const {
            isSelected = false,
            handleSelected,
            rotation = 1,
            opacity = 0.8,
        } = props;

        const [info, setInfo] = useState({
            x: 100,
            y: 100,
            isDragging: false,
        });

        const eleRef = useRef<any>(null);
        const trRef = useRef<any>(null);


        useEffect(() => {
            if (isSelected && trRef) {
                trRef.current.nodes([eleRef.current]);
                trRef.current.getLayer().batchDraw();
            }
        }, [isSelected])

        const handleDragStart = () => {
            handleSelected();
            setInfo({
                ...info,
                isDragging: true
            });
        }

        const handleDragEnd = (e: any) => {
            setInfo(
                {
                    ...info,
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y()
                })
        }


        return <>
            <Commponent
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={info.isDragging ? 10 : 5}
                shadowOffsetY={info.isDragging ? 10 : 5}
                scaleX={info.isDragging ? 1.2 : 1}
                scaleY={info.isDragging ? 1.2 : 1}
                opacity={opacity}
                draggable
                ref={eleRef}
                myRef={eleRef}
                onClick={handleSelected}
                {...props}
            />
            {
                isSelected && (
                    <Transformer
                        ref={trRef}
                        boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 5 || newBox.height < 5) {
                                return oldBox
                            }
                            return newBox
                        }}
                    />
                )
            }

        </>



    }
    return Inner;
}