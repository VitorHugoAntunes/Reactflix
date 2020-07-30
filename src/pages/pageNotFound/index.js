import React from 'react';
import Img from '../../assets/img/pngsad.png'

import { Container, ContainerSpan, Span2, StyledImg } from './style';

const PageNotFound = () => (
    <Container >
        <StyledImg src={Img} alt="img"/>
        <ContainerSpan>
            <Span2>Você está tentando acessar uma página que não existe.</Span2> 
        </ContainerSpan>
    </Container>
)

export default PageNotFound;