import SparkleEffect from '../SparkleEffect'

export default function SparkleEffectExample() {
  return (
    <div className="relative h-48 bg-background border rounded-md overflow-hidden">
      <SparkleEffect />
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Sparkle effects animation</p>
      </div>
    </div>
  )
}