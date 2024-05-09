import { useState } from 'react';

const Faq = () => {
    const gradientColor = 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)';

    const [isOpen, setIsOpen] = useState([false, false, false]); 

    const toggleAccordion = (index) => {
        const updatedState = isOpen.map((item, i) => i === index ? !item : false); 
        setIsOpen(updatedState);
    };

    return (
        <>
            <div className="Faq-container mt-[8%]">
                <h1 className="montserrat-font text-[2.5rem] mb-5" style={{ background: gradientColor, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h1>

                <div className="faq-questions w-[60%] my-7">
                    {/* Accordion Item 1 */}
                    <div className="border px-3 rounded-lg border-gray-200">
                        {/* Accordion Title 1 */}
                        <div className="flex justify-between items-center py-3 cursor-pointer" onClick={() => toggleAccordion(0)}>
                            <h2 className="text-md text-[#28262C]">Can education flashcards be used for all age groups?</h2>
                            <svg className={`w-4 h-4 ${isOpen[0] ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {/* Accordion Content 1 */}
                        {isOpen[0] && (
                            <p className="py-3 px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias magni veritatis officia sequi, impedit dignissimos iusto eveniet nisi fugit. Laudantium!</p>
                        )}
                    </div>
                    
                    {/* Accordion Item 2 */}
                    <div className="border px-3 rounded-lg border-gray-200 my-6">
                        {/* Accordion Title 2 */}
                        <div className="flex justify-between items-center py-3 cursor-pointer" onClick={() => toggleAccordion(1)}>
                            <h2 className="text-md text-[#28262C]">How do education flashcards work?</h2>
                            <svg className={`w-4 h-4 ${isOpen[1] ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {/* Accordion Content 2 */}
                        {isOpen[1] && (
                            <p className="py-3 px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod temporibus voluptate repudiandae, vero ex quas iure cupiditate molestiae rem non!</p>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border px-3 rounded-lg border-gray-200">
                        {/* Accordion Title 3 */}
                        <div className="flex justify-between items-center py-3 cursor-pointer" onClick={() => toggleAccordion(2)}>
                            <h2 className="text-md text-[#28262C]">Can education flashcards be used for test preparation?</h2>
                            <svg className={`w-4 h-4 ${isOpen[2] ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {/* Accordion Content 3 */}
                        {isOpen[2] && (
                            <p className="py-3 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum autem modi veritatis assumenda odio dignissimos maiores sapiente qui? Tempora!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;