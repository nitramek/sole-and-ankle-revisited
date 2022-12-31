/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
  return (
      <StyledOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <StyledDialogContent>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" size={32}/>
            <VisuallyHidden>
              Close dialog
            </VisuallyHidden>
          </CloseButton>
          <Filler />
          <Navigation>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Navigation>
          <Filler />
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </StyledDialogContent>
      </StyledOverlay>
  );
};

const StyledOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsla(220 5% 40% / 0.8);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const StyledDialogContent = styled(DialogContent)`
  background-color: ${COLORS.white};
  padding-left: 32px;
  padding-bottom: 32px;
  height: 100%;
  width: 80%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  a {
    color: ${COLORS.gray["900"]};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${WEIGHTS.medium};
  }
  a:first-of-type{
    color: ${COLORS.secondary};
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  a {
    color: ${COLORS.gray["700"]};
    text-decoration: none;
  }
`;

export default MobileMenu;
