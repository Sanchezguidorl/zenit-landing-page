import Image from 'next/image'
import React from 'react'
import DoorIcon from '/public/doorIcon.svg';
import StonksIcon from '/public/stonksIcon.svg';
import CheckListIcon from '/public/checkListIcon.svg';

function PositioningBenefit({children, iconIndex, positionDiv }: { iconIndex: number, positionDiv: string, children:React.ReactNode }) {

    const icons= [DoorIcon, StonksIcon, CheckListIcon];

    return (
        <div className={`w-full flex ${positionDiv==='right' ? 'justify-end': 'justify-start'} mb-12`}>
            <div className={`w-full sm:w-1/2 relative py-6 px-4 ${positionDiv==='right' ? 'border-gradient-stella-to-left': 'border-gradient-stella-to-right'}`}>
                <Image src={icons[iconIndex]} alt="Icono de beneficio de posicionamiento" className='mx-auto w-12 my-8'  />
                <p className=' font-semibold text-white'>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default PositioningBenefit