import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Link } from '@chakra-ui/react';
import { FaMoon, FaSun, FaTwitch, FaDiscord } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export const TwitchIcon = props => {

  return (
    <Link href="https://www.twitch.tv/shizukasakuya" isExternal="true">
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        icon={<FaTwitch />}
        {...props}
      />
    </Link>
  );
};

export const DiscordIcon = props => {

  return (
    <Link href="https://discord.gg/kYrv3kcYMP" isExternal="true">
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        icon={<FaDiscord/>}
        {...props}
      />
    </Link>
  );
};



