import styles from '@thomathings/module-ui-css/components/Button/Button.module.scss'
//import styles from '@module-ui/css/dist/Button.module.css'
import { FC } from 'react'

export type ButtonProps = JSX.IntrinsicElements['button'] & {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props} type="button" className={styles.base}>
    <span className={styles.text}>{children}</span>
  </button>
}

