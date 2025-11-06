'use client';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex items-center mb-6">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div className={`h-0.5 w-8 mx-1 ${step < currentStep ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
          )}
        </div>
      ))}
      <div className="ml-4 text-sm text-gray-600">
        Step {currentStep} – Select Service Details
      </div>
    </div>
  );
}