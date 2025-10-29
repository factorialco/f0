import { FeatureCard, FeatureCardProps } from "./FeatureCard"

export type FeatureGridProps = {
  features: FeatureCardProps[]
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 pb-8 md:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
}
