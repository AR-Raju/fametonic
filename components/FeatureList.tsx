import Image from "next/image";

const FeatureList = () => {
  const PointIcon = () => (
    <Image
      src="/point.png"
      alt="Point icon"
      width={22}
      height={22}
      className="w-[22px] h-[22px] object-contain"
      style={{ filter: "drop-shadow(2px 2px 10px rgba(0, 231, 249, 0.5))" }}
      priority
      loading="eager"
      draggable="false"
    />
  );

  const features = [
    {
      icon: PointIcon,
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      icon: PointIcon,
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      icon: PointIcon,
      text: "Use a Personal AI Worker to boost your content ",
    },
    {
      icon: PointIcon,
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];
  return (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 group animate-in slide-in-from-left-5 duration-700"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <feature.icon />
          <span className="font-figtree text-white text-[16px] leading-[22px]">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
