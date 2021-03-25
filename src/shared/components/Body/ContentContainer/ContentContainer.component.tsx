import React from 'react';

import {
    StyledContainer,
    PictureBlock,
    Picture
} from './ContentContainer.styled';

interface IContentContainerProps{
    data:{
        img: string;
        label: string;
        text?: string;
    }[];
    additionalBlock?: {
        children: JSX.Element;
        pasteIndex: number;
    }
}

const ContentContainer = ({data, additionalBlock}: IContentContainerProps) =>{

    return(
        <StyledContainer>
            <PictureBlock>
                {data.map((picture, index)=>{
                    return (
                        <Picture isRightSide={index%2!=0}>
                            <img src={picture.img} alt={picture.label}/>
                            <p className='label'>{picture.label}</p>
                            <div className='text-box'>
                                {picture.text && 
                                    <p className='text'>{picture.text}</p>
                                }
                            </div>
                            {additionalBlock && additionalBlock.pasteIndex===index && additionalBlock.children}
                        </Picture>
                    )
                })}
            </PictureBlock>
        </StyledContainer>
    )
};

export default ContentContainer;