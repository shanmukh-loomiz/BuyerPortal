const OutForDelivery = ({ status = "Not Started", orderData }) => {
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

  return (
    <div className="mx-30 my-10 shadow-md border border-[#E0E0E0] bg-white rounded-[10px]">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="font-[NSmedium] text-[#3F72AF] pl-5 text-[24px] font-medium py-4">
          OUT FOR DELIVERY
        </h2>
        <span className={`text-xs font-medium font-[NSregular] px-2 py-0.5 rounded-full ${getStatusStyle(status)}`}>
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default OutForDelivery;