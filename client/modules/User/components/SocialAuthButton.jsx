import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { remSize } from '../../../theme';

import { GithubIcon, GoogleIcon } from '../../../common/icons';
import Button from '../../../common/Button';

const authUrls = {
  github: '/auth/github',
  google: '/auth/google'
};

const labels = {
  github: 'Login with GitHub',
  google: 'Login with Google'
};

const linkLabels = {
  github: {
    connect: 'Connect GitHub Account',
    connected: 'Re-link GitHub Account'
  },
  google: {
    connect: 'Connect Google Account',
    connected: 'Re-link Google Account'
  }
};

const icons = {
  github: GithubIcon,
  google: GoogleIcon
};

const services = {
  github: 'github',
  google: 'google'
};

const StyledButton = styled(Button)`
  width: ${remSize(300)};
`;

function SocialAuthButton({ service, link, connected }) {
  const ServiceIcon = icons[service];
  let label;
  if (link) {
    label = connected ? linkLabels[service].connected : linkLabels[service].connect;
  } else {
    label = labels[service];
  }
  return (
    <StyledButton
      iconBefore={<ServiceIcon aria-label={`${service} logo`} />}
      href={authUrls[service]}
    >
      {label}
    </StyledButton>
  );
}

SocialAuthButton.services = services;

SocialAuthButton.propTypes = {
  service: PropTypes.oneOf(['github', 'google']).isRequired,
  link: PropTypes.bool,
  connected: PropTypes.bool
};

SocialAuthButton.defaultProps = {
  link: false,
  connected: false
};

export default SocialAuthButton;
