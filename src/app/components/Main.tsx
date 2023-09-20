import React, { ReactNode } from 'react'
import OrderSection from './OrderSection';
import StepContainer from './step-section/StepContainer';
import ProductContainer from './product-section/ProductContainer';

interface MainProps {
    children: ReactNode;
}

const Main:React.FC<MainProps> = ({children}) => {


    return <main className='min-w-[360px] px-[20px] max-w-80 max-h-96'>
       <OrderSection />
       <StepContainer />
       <ProductContainer>{children}</ProductContainer>
    {children}</main>
}


export default Main