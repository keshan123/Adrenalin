import React from 'react';

import {
  FooterContainer,
  LogoContainer,
  NavigationOptionsContainer,
  NavigationItem,
} from './styles';
import { Logo } from './Logo';

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavigationOptionsContainer>
        <NavigationItem>
          Privacy
        </NavigationItem>
        <NavigationItem>
          Sitemap
        </NavigationItem>
        <NavigationItem>
          Facebook
        </NavigationItem>
        <NavigationItem>
          LinkedIn
        </NavigationItem>
        <NavigationItem>
          Instagram
        </NavigationItem>
        <NavigationItem>
          Twitter
        </NavigationItem>
      </NavigationOptionsContainer>
    </FooterContainer>
  );
}

export default Footer;
