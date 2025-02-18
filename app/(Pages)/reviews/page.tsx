import React from 'react';

const Page = () => {
    const Urls = [
        "https://www.youtube.com/embed/xErTwNBofOM?si=hHSyXm-OSnhgSJ0C",
        "https://www.youtube.com/embed/rrGi4h4aV0c?si=ReLRq9AKjygHXqnY",
        "https://www.youtube.com/embed/p4Tx74AJWFA?si=aC1DjlQ21sIKAEOm",
        "https://www.youtube.com/embed/9D1scSllQJI?si=_vzfh5aPkt9GcqtN",
        "https://www.youtube.com/embed/ERuBRBP1Vr8?si=qakIKsqKZc5f8YQr",
        "https://www.youtube.com/embed/dcGuQa2mliY?si=hI7NOPjyh0J1hRN-",
        "https://www.youtube.com/embed/QJSMiEfQUas?si=mEeaQNa26wzyYy20",
        "https://www.youtube.com/embed/64FuROc9J04?si=6OpMG9F73GgvKb_m",
        "https://www.youtube.com/embed/qGLtRYL3h9c?si=XDtvLEuiF5JDjl5I",

    ];

    return (
        <>
            <div className="container mx-auto py-10">
                <div className="row flex flex-col md:flex-row gap-20  items-center py-5">
                    <div className="col w-full md:w-1/2 flex flex-col gap-5">
                        <h2 className='text-5xl'>Video Testimonials</h2>
                        <p className='text-slate-500'>
                            Watch our patients share their experiences with Restore Podiatry! See how our expert care and personalized treatments have helped them restore their foot health and well-being.
                        </p>
                    </div>
                    <div className="col w-full md:w-1/2 relative aspect-video">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/PLK1iKzimx8?si=im84qhS9IlBJTQD7"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    {Urls.map((Url, index) => (
                        <div className="w-full relative aspect-video" key={index}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={Url}
                                title={`YouTube video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Page;
