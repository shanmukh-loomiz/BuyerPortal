const ConfirmPaymentTerms = () => {
    return (
        <div className="mx-30 my-10 shadow-md border border-[#E0E0E0] bg-white rounded-[10px]">
        <div className="flex justify-between items-center px-6 py-4">
        <h2 className="  font-[NSmedium] text-[#3F72AF] pl-5 text-[24px] font-medium py-4">CONFIRM PAYMENT TERMS</h2>
        {/* <span className="text-xs font-medium bg-[#508E4E] font-[NSregular] text-white px-2 py-0.5 rounded-full">
          COMPLETED
        </span> */}

        <span className="text-xs font-medium bg-[#EDF5FF] font-[NSregular] text-[#233B6E] px-2 py-0.5 rounded-full">
          INPROGRESS
        </span>
      </div>
    </div>
    );
  };
  
  export default ConfirmPaymentTerms;
  