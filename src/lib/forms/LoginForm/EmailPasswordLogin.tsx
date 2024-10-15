'use client';

import { FormInput } from '@/lib/inputs/FormInput/FormInput';
import { FormContainer } from '@/lib/forms/FormContainer/FormContainer';
import { Button, useToast } from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';


type EmailPasswordLoginFormData = {
  email: string;
  password: string;
};

interface EmailPasswordLoginProps {
  redirectTo?: string;
}

export const EmailPasswordLogin = ({ redirectTo }: EmailPasswordLoginProps) => {
  const supabase = useSupabaseClient();
  const formMethods = useForm<EmailPasswordLoginFormData>();
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (data: EmailPasswordLoginFormData) => {
    const signInPromise: Promise<{ error: AuthError | null; }> =
      supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    const { error } = await signInPromise;

    if (error) {
      toast({ title: error.message, variant: 'error' });
      return;
    }

    if (redirectTo) {
      router.push(redirectTo);
      router.refresh();
    }
  };

  return (
    <FormContainer name="Sign in" onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        <FormInput name="email" required placeholder="name@work-email.com" size="lg" />
        <FormInput
          name="password"
          label="Password"
          required
          type="password"
        />
        <Button
          width="full"
          type="submit"
          variant="primary"
        >
          Sign In
        </Button>
      </FormProvider>
    </FormContainer>
  );
};