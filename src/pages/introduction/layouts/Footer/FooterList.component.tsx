import { FooterItem, FooterSectionProps } from "./types/footer.type"

function FooterList({ title, items }: FooterSectionProps) {
  return (
    <div className="font-monserrat text-white">
      <h4 className="pb-[1rem] text-xl font-bold">{title}</h4>
      <ul>
        {items.map((item: FooterItem, index: number) => (
          <li key={index} className="flex items-center gap-2 py-[0.25rem]">
            {item.icon}
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList
