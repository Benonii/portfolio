import { createContext, useContext, ReactNode } from 'react';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function useSoundContext() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
} 