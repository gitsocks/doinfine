'use client';

import {
  FeatureFlagNames,
  useFeatureFlag,
} from '@/contexts/FeatureFlagProvider';
import { Box, Divider, VStack } from '@chakra-ui/layout';
import { Flex, HStack, Link, Text } from '@chakra-ui/react';
import { SignInWithMicrosoftButton } from '@/lib/buttons/SignInWithMicrosoftButton/SignInWithMicrosoftButton';
import { EmailPasswordLogin } from './EmailPasswordLogin';
import { OtpLogin } from './OtpLogin';

interface LoginFormProps {
  redirectTo?: string;
  signup?: boolean;
  width?: string;
}

export const LoginForm = ({ redirectTo = '/', signup, width }: LoginFormProps) => {
  const enablePasswordLogin = useFeatureFlag<boolean>(
    FeatureFlagNames.enablePasswordLogin
  );

  return (
    <>
      <VStack spacing={3} alignItems="stretch" gap={8}>
        <VStack alignItems="stretch" gap={5}>
          {enablePasswordLogin ? (
            <EmailPasswordLogin />
          ) : (
            <OtpLogin width={width} redirectTo={redirectTo} />
          )}
        </VStack>

        <Flex margin="auto" alignItems="center" gap={2}>
          <Box w={20}>
            <Divider />
          </Box>
          <Text>OR</Text>
          <Box w={20}>
            <Divider />
          </Box>
        </Flex>

        <HStack>
          <SignInWithMicrosoftButton redirectTo={redirectTo} />
          {/* <SignInWithGoogleButton redirectTo={redirectTo} /> */}
        </HStack>
      </VStack>
      <Flex justifyContent="space-around">
        {signup
          ? (
            <Text>Already have an account? <Link href="/login"><b>Login</b></Link></Text>
          )
          : (
            <Text>Don&apos;t have an account? <Link href="/signup"><b>Sign Up</b></Link></Text>
          )
        }
      </Flex>
    </>
  );
};
