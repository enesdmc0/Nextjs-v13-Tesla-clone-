'use client';

const Presentation = () => {
    return (
        <div className="relative top-[52px] snap-end">
            <video autoPlay loop className="h-container w-screen object-cover">
                <source
                    src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4"/>
            </video>
            <div className="absolute top-16 flex items-center flex-col text-white text-center w-full gap-80">
                <div>
                    <h1 className="text-5xl font-medium">Experience Tesla</h1>
                    <p className="">Schedule a Demo Drive Today</p>
                </div>

            </div>
        </div>
    );
};

export default Presentation;
