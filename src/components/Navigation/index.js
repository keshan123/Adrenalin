import React from 'react';
import { Switch, Link } from 'react-router-dom';

import {
  NavigationContainer,
  LogoContainer,
  NavigationOptionsContainer,
  NavigationItem,
} from './styles';
import { Logo } from './Logo';

function Navigation() {
  return (
    <Switch>
      <NavigationContainer>
        <LogoContainer>
          <Link to={`/`}>
            <Logo />
          </Link>
        </LogoContainer>
        <NavigationOptionsContainer>
          <NavigationItem>
            Culture
          </NavigationItem>
          <NavigationItem>
            Work
          </NavigationItem>
          <NavigationItem>
            Clients
          </NavigationItem>
          <NavigationItem>
            Services
          </NavigationItem>
          <NavigationItem>
            Careers
          </NavigationItem>
          <NavigationItem>
            Contacts
          </NavigationItem>
        </NavigationOptionsContainer>
      </NavigationContainer>
    </Switch>
  );
}

export default Navigation
