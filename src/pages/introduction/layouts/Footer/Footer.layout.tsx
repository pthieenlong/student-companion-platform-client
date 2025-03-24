import {
  AtSymbolIcon,
  ClipboardDocumentIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ArrowPathIcon,
  PhoneArrowDownLeftIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"
import FooterList from "./FooterList.component"
function Footer() {
  return (
    <footer className="absolute z-[-1] flex w-full flex-row items-center justify-center bg-black">
      <div className="flex w-[48rem] flex-row justify-between px-[1rem] pt-[1rem] pb-[9rem]">
        <div className="font-monserrat text-white">
          <FooterList
            title="Company"
            items={[
              {
                icon: <AtSymbolIcon className="size-6" />,
                label: "About Us",
                link: "#",
              },
              {
                icon: <QuestionMarkCircleIcon className="size-6" />,
                label: "FAQs",
                link: "#",
              },
              {
                icon: <ClipboardDocumentIcon className="size-6" />,
                label: "Terms of use",
                link: "#",
              },
              {
                icon: <ClipboardDocumentIcon className="size-6" />,
                label: "Privacy Policy",
                link: "#",
              },
              {
                icon: <PhoneArrowDownLeftIcon className="size-6" />,
                label: "Support",
                link: "#",
              },
            ]}
          />
        </div>
        <div className="font-monserrat text-white">
          <FooterList
            title="Resources"
            items={[
              {
                icon: <BookOpenIcon className="size-6" />,
                label: "Blog",
                link: "#",
              },
              {
                icon: <ArrowPathIcon className="size-6" />,
                label: "Updated history",
                link: "#",
              },
            ]}
          />
        </div>
        <div className="">
          <FooterList
            title="Contact Us"
            items={[
              {
                icon: <MapPinIcon className="size-6" />,
                label: "Ho Chi Minh City",
                link: "#",
              },
              {
                icon: <EnvelopeIcon className="size-6" />,
                label: "support@stack.com",
                link: "#",
              },
            ]}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
