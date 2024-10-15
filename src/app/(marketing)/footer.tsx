import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  Link
} from '@chakra-ui/react';
import { DoinfineLogo } from '@/lib/images/DoinfineLogo';

const links = {
  Company: {
    CultureFit: 'https://culturefit.doinfine.app',
  }
};

export const MarketingFooter = () => {
  return (
    <Box
      as="footer"
      boxShadow="rgba(23, 92, 211, 0.20) 0 0 120px 50px"
      width="full"
    >
      <Divider borderColor="chakra-primary-color" />
      <VStack
        align="stretch"
        p={8}
        maxW="container.xl"
        marginInline="auto"
        gap={8}
      >
        <Flex flexWrap="wrap" gap={8}>
          <Flex
            flexGrow={2}
            justifyContent="space-between"
            flexDirection={{ base: 'row', md: 'column' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <HStack
              gap={4}
              as={Link}
              href="/"
              variant="unstyled"
            >
              <DoinfineLogo />
              <Heading size="md" textDecoration="none">
                Doinfine
              </Heading>
            </HStack>
            <Spacer />
          </Flex>
          <Flex
            flexGrow={3}
            alignItems="stretch"
            justifyContent="space-between"
            gap={8}
            flexWrap="wrap"
          >
            {Object.entries(links).map(([section, links]) => (
              <VStack key={section} alignItems="flex-start" gap={4}>
                <Heading size="md">{section}</Heading>
                {Object.entries(links).map(([title, href]) => (
                  <Link key={href} href={href}>
                    {title}
                  </Link>
                ))}
              </VStack>
            ))}
          </Flex>
        </Flex>
        <Flex height="1px" justifyContent="stretch">
          <Box flexGrow={1} bgGradient="linear(to-r, transparent, gray.500)" />
          <Box flexGrow={1} bgGradient="linear(to-l, transparent, gray.500)" />
        </Flex>
        <Flex flexWrap="wrap" fontSize="sm" color="chakra-subtle-text">
          <Spacer minW={10} />
          <Text>Doinfine Pty Ltd. All Rights Reserved.</Text>
        </Flex>
      </VStack>
    </Box>
  );
};
