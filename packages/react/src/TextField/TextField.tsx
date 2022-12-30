import styles from "@thomathings/module-ui-css/components/textfield.module.css";
import { FC } from "react";

export type TextFieldProps = JSX.IntrinsicElements["input"] & {};

export const TextField: FC<TextFieldProps> = (props) => {
  return <input {...props} className={styles.base} />;
};
