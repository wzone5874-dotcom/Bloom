import FloatingHearts from '../FloatingHearts'

export default function FloatingHeartsExample() {
  return (
    <div className="relative h-64 bg-background border rounded-md overflow-hidden">
      <FloatingHearts />
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Floating hearts animation</p>
      </div>
    </div>
  )
}