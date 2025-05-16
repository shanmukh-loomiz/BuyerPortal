const SampleConfirmation = ({ currentStep = 2 }) => {
    const steps = ["FABRIC", "GARMENT", "TRIMS & LABELS"];
  
    return (
      <div className="mx-30 my-10 shadow-md border border-[#E0E0E0] bg-white rounded-[10px]">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Title */}
          <h2 className="font-[NSmedium] text-[#3F72AF] text-[24px] font-medium">
            SAMPLE CONFIRMATION
          </h2>
  
          {/* Step Tracker */}
          <div className="flex flex-1 justify-center items-center space-x-6 ml-20 mr-20 relative">
            {steps.map((label, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
  
              return (
                <div className="flex flex-col items-center relative w-full" key={index}>
                  {/* Connecting line */}
                  {index > 0 && (
                    <div
                      className={`absolute  top-2.5 w-full h-0.5 z-0 ${
                        index < currentStep
                          ? "bg-[#333]"
                          : index === currentStep
                          ? "border-t border border-black"
                          : "bg-transparent"
                      }`}
                    />
                  )}
  
                  {/* Step circle */}
                  <div className="z-10">
                    {isCompleted ? (
                      <div className="w-5 h-5 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                        ✓
                      </div>
                    ) : isCurrent ? (
                      <div className="w-5 h-5 border-2 border-[#777] rounded-full bg-white" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-black rounded-full bg-white" />
                    )}
                  </div>
  
                  {/* Label */}
                  <div
                    className={`text-xs mt-1 font-[NSregular] ${
                      isCompleted ? "text-black" : isCurrent ? "text-gray-500" : "text-black"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
  
          {/* Status */}
          <span className="text-xs font-medium bg-[#508E4E] font-[NSregular] text-white px-3 py-1 rounded-full">
            COMPLETED
          </span>
        </div>
      </div>
    );
  };
  
  export default SampleConfirmation;
  