import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Introduction } from "@/components/Introduction";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main */}
      <Introduction />

      {/* Article with cards */}
      <Card />
    </div>
  )
}
