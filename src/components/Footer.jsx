import React from 'react';

function Footer() {

    const FooterLinks = [
        {
            'title': "Links",
            'subLinks': [
                'Home', 'Shop', 'About', 'Contact'
            ]
        },
        {
            'title': 'Help',
            'subLinks': [
                'Payment Options',
                'Returns',
                'Privacy Policies'
            ]
        },
        {
            'title': "Newsletter",
            'newsLetter': {
                'input': 'Enter Your Email Address',
                'button': 'SUBSCRIBE'
            }
        }
    ];

    const renderedFooterLinks = FooterLinks.map((footer) => {
        return (
            <div className="flex flex-col gap-6" key={footer.title}>
                <h3 className="mb-2 text-gray-600">{footer.title}</h3>
                <div className="flex flex-col gap-4">
                    {footer.subLinks ? (
                        footer.subLinks.map((subLink, index) => (
                            <a href="#" key={index} className="block py-1 font-bold hover:text-blue-500">{subLink}</a>
                        ))
                    ) : (
                        <div className="flex flex-row gap-2">
                            <input
                                type="email"
                                placeholder={footer.newsLetter.input}
                                className="block w-full p-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none mb-2"
                            />
                            <button className="border-0 border-b-2 border-gray-300 bg-transparent mb-2 text-black font-bold">
                                {footer.newsLetter.button}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    });

    return (
        <div className="flex flex-col p-8 bg-white text-black">
            <div className="flex flex-row w-full justify-evenly mb-8">
                <div className="flex flex-col ">
                    <h3 className="font-bold text-2xl mb-2">
                        Funiro.
                    </h3>
                    <p className="text-gray-600">
                        400 University Drive Suite 200<br />
                        Coral Gables, FL 33134<br />
                        USA
                    </p>
                </div>
                {renderedFooterLinks}
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="text-left text-gray-600">
                2023 Funiro. All rights reserved
            </div>
        </div>
    )
}

export default Footer;
