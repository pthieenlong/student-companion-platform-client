import { JSX } from "react"

export type FooterItem = {
  icon: JSX.Element
  label: string
  link: string
}

export type FooterSectionProps = {
  title: string
  items: FooterItem[]
}
