import { useState } from "react";
import CSSAnimatedBackground from "./CSSAnimatedBackground";
import AnimatedBackground from "./AnimatedBackground";
import { Button } from "@/components/ui/button";

const AnimationShowcase = () => {
  const [cssVariant, setCSSVariant] = useState<"gradient-flow" | "floating-orbs" | "geometric" | "aurora">("gradient-flow");
  const [canvasVariant, setCanvasVariant] = useState<"particles" | "waves" | "grid" | "orbital">("particles");
  const [useCanvas, setUseCanvas] = useState(false);

  const cssVariants = [
    { value: "gradient-flow", label: "Gradient Flow", description: "Smooth flowing gradient blobs" },
    { value: "floating-orbs", label: "Floating Orbs", description: "Gentle floating glass orbs" },
    { value: "geometric", label: "Geometric", description: "Rotating geometric shapes" },
    { value: "aurora", label: "Aurora", description: "Northern lights effect" }
  ] as const;

  const canvasVariants = [
    { value: "particles", label: "Particles", description: "Connected particle network" },
    { value: "waves", label: "Waves", description: "Flowing sine waves" },
    { value: "grid", label: "Grid", description: "Animated grid pattern" },
    { value: "orbital", label: "Orbital", description: "Orbiting particles" }
  ] as const;

  return (
    <div className="min-h-screen relative">
      {/* Background Animation */}
      {useCanvas ? (
        <AnimatedBackground variant={canvasVariant} className="fixed inset-0">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Canvas Animation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {canvasVariants.find(v => v.value === canvasVariant)?.description}
              </p>
            </div>
          </div>
        </AnimatedBackground>
      ) : (
        <CSSAnimatedBackground variant={cssVariant} className="fixed inset-0">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                CSS Animation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {cssVariants.find(v => v.value === cssVariant)?.description}
              </p>
            </div>
          </div>
        </CSSAnimatedBackground>
      )}

      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 max-w-sm">
        <h3 className="font-semibold text-foreground mb-4">Animation Controls</h3>
        
        {/* Toggle between CSS and Canvas */}
        <div className="mb-4">
          <label className="text-sm font-medium text-foreground mb-2 block">Animation Type</label>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={!useCanvas ? "default" : "outline"}
              onClick={() => setUseCanvas(false)}
            >
              CSS
            </Button>
            <Button
              size="sm"
              variant={useCanvas ? "default" : "outline"}
              onClick={() => setUseCanvas(true)}
            >
              Canvas
            </Button>
          </div>
        </div>

        {/* CSS Variants */}
        {!useCanvas && (
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">CSS Variant</label>
            <div className="space-y-2">
              {cssVariants.map((variant) => (
                <Button
                  key={variant.value}
                  size="sm"
                  variant={cssVariant === variant.value ? "default" : "outline"}
                  onClick={() => setCSSVariant(variant.value)}
                  className="w-full justify-start text-left"
                >
                  <div>
                    <div className="font-medium">{variant.label}</div>
                    <div className="text-xs opacity-70">{variant.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Canvas Variants */}
        {useCanvas && (
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Canvas Variant</label>
            <div className="space-y-2">
              {canvasVariants.map((variant) => (
                <Button
                  key={variant.value}
                  size="sm"
                  variant={canvasVariant === variant.value ? "default" : "outline"}
                  onClick={() => setCanvasVariant(variant.value)}
                  className="w-full justify-start text-left"
                >
                  <div>
                    <div className="font-medium">{variant.label}</div>
                    <div className="text-xs opacity-70">{variant.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationShowcase;
