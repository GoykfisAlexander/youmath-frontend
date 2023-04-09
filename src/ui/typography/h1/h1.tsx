import styles from './h1.module.scss'
import {FC} from "react";
import clsx from "clsx";

interface IH1Props {
    children: string | number;
    extraClass?: string;

    textColor: "white" | "black" | "accent";
}

export const H1:FC<IH1Props> = ({children, extraClass, textColor = "white"}) => {

    const style = clsx({
        [styles.h]: true,
        [`${extraClass}`]: !!extraClass,
        [styles.h_color_white]: textColor === "white",
        [styles.h_color_black]: textColor === "black",
        [styles.h_color_accent]: textColor === "accent",
    })

    return (
        <h1 className={style}>{children}</h1>
    );
};
