import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
};

const useMyState = () => useState(initialState);

export const {
  Provider: SharedStateProvider,
  useTracked: useSharedState,
} = createContainer(useMyState);
