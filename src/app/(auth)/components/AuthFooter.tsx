'use client'

import { HStack } from '@chakra-ui/react';
import Link from 'next/link';

export const AuthFooter = () => (
  <HStack padding={5} justifyContent="space-around" alignItems="center">
    <Link href="/privacy">Privacy Policy</Link>
  </HStack>
);