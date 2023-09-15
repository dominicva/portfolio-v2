'use client';

import { useRouter } from 'next/navigation';
import { Icons } from './ui/icons';
import { Button } from './ui/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={router.back}
      variant="outline"
      size="sm"
      className="mb-6 flex gap-1"
    >
      <Icons.arrowLeft />
      <span>Back</span>
    </Button>
  );
}
