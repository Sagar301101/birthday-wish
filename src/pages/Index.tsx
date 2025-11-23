import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { FireworksScreen } from "@/components/FireworksScreen";
import { CakeScreen } from "@/components/CakeScreen";
import { ThankYouScreen } from "@/components/ThankYouScreen";

const Index = () => {
  const [screen, setScreen] = useState<"welcome" | "fireworks" | "cake" | "thankyou">("welcome");

  return (
    <>
      {screen === "welcome" && <WelcomeScreen onProceed={() => setScreen("fireworks")} />}
      {screen === "fireworks" && <FireworksScreen onNext={() => setScreen("cake")} />}
      {screen === "cake" && <CakeScreen onNext={() => setScreen("thankyou")} />}
      {screen === "thankyou" && <ThankYouScreen />}
    </>
  );
};

export default Index;
