import { ReactElement, useState } from "react";

export function useFormWizard(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

    function navigateToNextStep() {
        setCurrentStepIndex(index => {
            if (index >= steps.length - 1) return index;
            return index + 1;
        });
    }

    function navigateToPreviousStep() {
        setCurrentStepIndex(index => {
            if (index === 0) return index;
            return index - 1;
        });
    }

    function goto(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        step: steps[currentStepIndex],
        steps,
        currentStepIndex,
        goto,
        navigateToNextStep,
        navigateToPreviousStep,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1
    };
}