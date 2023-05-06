
const Contact = () => {
    return (
        <div className="w-[930px] m-auto p-8 flex flex-col gap-20 mt-10">
            <h3 className="text-[28px] font-medium text-[#171A20]">Contact Information</h3>
            <form>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-10">
                        <label className="label">First Name<input className="input" type="text"/></label>
                        <label className="label">Last Name<input className="input" type="text"/></label>
                    </div>
                    <div className="flex gap-10">
                        <label className="label">Phone Number<input className="input" type="text"/></label>
                        <label className="label">Email Address<input className="input" type="text"/></label>
                    </div>
                    <div className="flex flex-col gap-10">
                        <label className="label">Zip Code<input className="input" type=""/></label>
                        <div className="flex flex-col text-[14px] gap-3 font-medium text-[#5C5E62]">
                            <label className="flex gap-2"><input className="w-6 h-6" type="checkbox"/><span className="cursor-pointer hover:text-[#171A20] transition-all duration-300">I’m interested in solar and Powerwall</span></label>
                            <label className="flex gap-2"><input className="w-6 h-6" type="checkbox"/><span className="border-b border-b-[#5C5E62] hover:border-b-2 cursor-pointer hover:text-[#171A20] transition-all duration-300">Get Tesla Updates</span></label>
                        </div>
                    </div>
                    <div className="w-[660px] h-[60px] text-[12px] text-[#393C41] font-medium">
                        By clicking "Submit & Continue" I agree to share the provided information with Tesla to be contacted with more details or offers about Tesla products. I understand these calls or texts may use computer-assisted dialing or pre-recorded messages. This consent is not a condition of the demo drive.
                    </div>
                    <button className="h-10 w-[318px] bg-[#3B64D1] rounded text-white font-medium text-[14px] hover:bg-[#3457B1] transition-all duration-300">Submit and Continue</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
