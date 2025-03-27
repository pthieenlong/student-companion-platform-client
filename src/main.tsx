import { createRoot } from "react-dom/client"
import "./styles/index.css"
import Providers from "./app/Providers.tsx"

createRoot(document.getElementById("root")!).render(<Providers />)
