import { MainLogo } from "@/shared/components/MainLogo";
import { OnboardingLayout } from "../components/OnboardingLayout";
import { Button } from "@/shared/components/Button";
import Text from "@/shared/components/Text";
import { useNavigate } from "react-router";
import { routePaths } from "@/routes/routePaths";
import { ChevronRight, Home } from "lucide-react";

export const OnboardingOverview = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout>
      <div className="flex flex-col gap-48 items-center">
        <Button className="self-end" onClick={() => navigate(routePaths.HOME)}>
          <Home />
        </Button>
        <div className="flex flex-col gap-2 items-center">
          <MainLogo />
          <Text variant="title">WearIt</Text>
          <Text className="text-center font-medium text-lg px-6 pt-10">
            Changing the fashion-game one outfit at a time.
          </Text>
        </div>
        <Button onClick={() => navigate(routePaths.ONBOARDING_YOUR_PICTURE)}>
          {`Try on clothes`}
          <ChevronRight size={24} />
        </Button>
      </div>
    </OnboardingLayout>
  );
};
