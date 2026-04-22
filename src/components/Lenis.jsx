import SmoothScroll from "@/hooks/SmoothScroll";

export default function SmoothScrollWrapper({ children }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
