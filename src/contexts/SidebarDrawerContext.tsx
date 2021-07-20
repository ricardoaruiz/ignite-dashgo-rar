import React from 'react'
import { UseDisclosureReturn } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { createContext } from 'react'
import { useRouter } from 'next/dist/client/router'

type SidebarDrawerProviderProps = {
  children: React.ReactNode
}

type SidebarDrawerContext = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContext)

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclousure = useDisclosure()
  const router = useRouter()

  React.useEffect(() => {
    disclousure.onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => {
  const context = React.useContext(SidebarDrawerContext)

  if (!context) {
    throw new Error('useSidebarDrawer must be use in SidebarDrawerContext')
  }

  return context
}
