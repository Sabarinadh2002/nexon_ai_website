export function DottedGlowBackground({
  className = "",
  style = {},
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorLightVar = "--color-neutral-500",
  glowColorLightVar = "--color-neutral-600",
  colorDarkVar = "--color-neutral-500",
  glowColorDarkVar = "--color-sky-800",
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}) {
  return (
    <div
      className={className}
      style={{
        ...style,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
