import React from 'react'
import {
  Heading,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import useColorMode from '@/utils/color-mode'
import { useTranslation } from 'react-i18next'

type Props = {
  showMenu?: boolean
}

const Header = (props: Props) => {
  const { toggleColorMode, newColorMode } = useColorMode()
  const { t } = useTranslation('common')
  return (
    <Box mb="5">
      <Box display="flex">
        <Heading as="h1" size="2xl" flex="1">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            Covid Check
          </Link>{' '}
          <Text display="inline" fontSize="lg" color="red">
            BETA
          </Text>
        </Heading>
        {(props.showMenu ?? true) && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem onClick={() => toggleColorMode}>
                Toggle {newColorMode === 'light' ? 'Dark' : 'Light'}
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
      <Text fontWeight="semibold">{t('subtitle')}</Text>
    </Box>
  )
}

export default Header
