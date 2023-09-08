'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme"
        checked={currentTheme === 'dark'}
        onCheckedChange={() =>
          setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
        }
      />
      <Label htmlFor="theme" className="cursor-pointer">
        {currentTheme === 'light' ? <Sun /> : <Moon />}
      </Label>
    </div>
  );
}
