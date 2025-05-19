const SampleConfirmation = ({ status = "Not Started", orderData, currentStep = 0 }) => {
  const steps = ["FABRIC", "GARMENT", "TRIMS & LABELS"];
  
  // Helper function to get status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-[#508E4E] text-white";
      case "In Progress":
        return "bg-[#EDF5FF] text-[#233B6E]";
      case "Not Started":
      default:
        return "bg-[#F5F5F5] text-[#757575]";
    }
  };

  // Determine currentStep based on status
  let stepIndex = 0;
  if (status === "In Progress") {
    stepIndex = 1; // Middle step
  } else if (status === "Completed") {
    stepIndex = 3; // All steps completed
  }

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
            const isCompleted = index < stepIndex;
            const isCurrent = index === stepIndex && status === "In Progress";
            
            return (
              <div className="flex flex-col items-center relative w-full" key={index}>
                {/* Connecting line */}
                {index > 0 && (
                  <div
                    className={`absolute top-2.5 w-full h-0.5 z-0 ${
                      index < stepIndex
                        ? "bg-[#333]"
                        : index === stepIndex && status === "In Progress"
                        ? "border-t border border-black"
                        : "bg-gray-300"
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
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full bg-white" />
                  )}
                </div>
                
                {/* Label */}
                <div
                  className={`text-xs mt-1 font-[NSregular] ${
                    isCompleted || isCurrent ? "text-black" : "text-gray-400"
                  }`}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Status */}
        <span className={`text-xs font-medium font-[NSregular] px-3 py-1 rounded-full ${getStatusStyle(status)}`}>
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default SampleConfirmation;