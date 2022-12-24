//import styles from '@module-ui/css/components/TextField/TextField.module.scss'
import styles from '@module-ui/css/dist/TextField.module.css'
import { FC } from 'react'

export type TextFieldProps = JSX.IntrinsicElements['input'] & {}

export const TextField: FC<TextFieldProps> = (props) => {
  return <input {...props} className={styles.base} />
}

