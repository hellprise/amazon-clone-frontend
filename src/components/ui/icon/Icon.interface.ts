import { SVGAttributes } from 'react'

export type IconName = 'close' | 'eye' | 'eye-slash'

export interface IIconProps extends SVGAttributes<SVGElement> {
	icon?: IconName
}
