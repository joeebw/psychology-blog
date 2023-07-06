import { createContext, useState } from "react";
import { useTheme, useMediaQuery } from '@mui/material'

export const ScreenContext = createContext({
  isSmallScreen: () => {}
})

export const ScreenProvider = ({children}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const value = {
    isSmallScreen
  }

  return(
    <ScreenContext.Provider value={value}>
      {children}
    </ScreenContext.Provider>
  )
}

