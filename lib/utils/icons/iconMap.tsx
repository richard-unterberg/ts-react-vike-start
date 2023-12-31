/**
 * App Icons Collection - All icons must be defined here
 * no manual imports in modules needed / wanted
 * todo: "minimize", "maximize", "close" icons
 */
import {
  ExternalLink,
  Github,
  LucideProps,
  MagnetIcon,
  MonitorDown,
  PackageCheck,
  PencilRuler,
  Sailboat,
} from 'lucide-react'

import { ICON_ID } from './iconID'

type ICON_TYPE = {
  [key in ICON_ID]: {
    component: React.ComponentType<LucideProps> | null
    className?: string
  }
}

const APP_ICON: ICON_TYPE = {
  [ICON_ID.None]: { component: null },
  [ICON_ID.Github]: { component: Github },
  [ICON_ID.ExternalLink]: { component: ExternalLink },
  [ICON_ID.MagnetIcon]: { component: MagnetIcon },
  [ICON_ID.MonitorDown]: { component: MonitorDown },
  [ICON_ID.PackageCheck]: { component: PackageCheck },
  [ICON_ID.PencilRuler]: { component: PencilRuler },
  [ICON_ID.Sailboat]: { component: Sailboat },
}

export default APP_ICON
