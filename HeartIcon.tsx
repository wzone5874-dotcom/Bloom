import HeartIcon from '../HeartIcon'

export default function HeartIconExample() {
  return (
    <div className="flex gap-4 items-center p-4">
      <HeartIcon size={16} className="text-primary" />
      <HeartIcon size={24} filled className="text-primary" />
      <HeartIcon size={32} className="text-primary animate-pulse-heart" />
    </div>
  )
}