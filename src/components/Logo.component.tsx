import stackLogo from "../assets/images/stack.svg"

function Logo({ width }: { width: string }) {
  return (
    <img
      src={stackLogo}
      alt="Stack_logo"
      style={{
        filter:
          "invert(55%) sepia(93%) saturate(754%) hue-rotate(177deg) brightness(97%) contrast(86%)",
        width,
        display: "block",
      }}
    />
  )
}

export default Logo
