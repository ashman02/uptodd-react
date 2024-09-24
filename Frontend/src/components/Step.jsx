import { useState } from 'react';
import Button from './Button';
import './step.css';
export default function Step() {
    const [selectedStep, setSelectedStep] = useState(1);

    const steps = [
        { id: 1, title: "01", content: "Unlock your Child's Brilliance: Personalised programs for their unique mind!" , image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-1.webp"},
        { id: 2, title: "02", content: "Tailored Learning: Customized curriculum to match your child's pace and interests." , image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-2.webp"},
        { id: 3, title: "03", content: "Expert Guidance: Experienced mentors to nurture your child's potential." , image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-3.webp"},
        { id: 4, title: "04", content: "Progress Tracking: Regular assessments to monitor your child's growth.", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-4.webp" },
        { id: 5, title: "05", content: "Parental Involvement: Tools to stay connected and involved in your child's learning." , image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-5.webp"},
    ];

    const handleStepChange = (id) => {
        setSelectedStep(id)
    }
  return (
    <div>
      <div className="flex flex-col md:flex-row border-2 rounded-md p-4 m-4">
        <div className="w-full md:flex-1 order-2 md:order-1">
        {steps.map(step => (
            <div 
                key={step.id}
                className={`text-black text-sm border-2 rounded-xl p-2 m-2 cursor-pointer ${selectedStep === step.id ? 'border-green-500' : 'border-gray-300'} ${selectedStep === step.id ? 'flex' : 'hidden'} md:flex`}
                onClick={() => handleStepChange(step.id)}
            >
                <div className='flex justify-center items-center flex-col'>
                    <h4 className='text-sm'>STEP</h4>
                    <h3 className='text-xl text-bold leading-none'>{step.title}</h3>
                </div>
                    <svg className='mx-5 w-2' xmlns="http://www.w3.org/2000/svg" width="1" height="60" viewBox="0 0 1 60" fill="none">
                        <path d="M0.5 0V60" stroke="#002863" strokeDasharray="2 2" />
                    </svg>
                <div className='flex justify-center items-center'>
                    <p>
                        {step.content}
                    </p>
                </div>
            </div>
        ))}
        </div>
        <div className="w-full md:flex-1 order-1 md:order-2">
          <div className='relative h-full'>
            <div className='overflow-hidden h-64 md:h-4/5'>
                {steps.map((step) => (
                    <img
                        key={step.id}
                        src={step.image}
                        alt={`Step ${step.id}`}
                        className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500 ${selectedStep === step.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className='flex justify-center p-4 absolute bottom-0 left-0 right-0'>
                {steps.map((step) => (
                    <span
                        key={step.id}
                        className={`inline-block w-3 h-3 rounded-full mx-2 cursor-pointer ${selectedStep === step.id ? 'bg-green-500' : 'bg-gray-700'}`}
                        onClick={() => handleStepChange(step.id)}
                    ></span>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Button className="bg-green-500 block text-white mx-auto px-4 py-2 my-4 rounded-xl text-lg font-bold">Access this Program</Button>
    </div>
  )
}
