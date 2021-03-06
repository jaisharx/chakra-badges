import type { NextPage } from 'next'

import Head from 'next/head'
import { Badge, Center, HStack, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  const Colors: string[] = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ]

  return (
    <>
      <Head>
        <title>Chakra Badges Examples</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center minH="100vh">
        <HStack align="flex-start">
          <VStack maxW="container.md" mx="auto">
            <Badge>Default</Badge>
          </VStack>
          <VStack>
            {Colors.map((color) => (
              <Badge key={color} colorScheme={color}>
                Colored
              </Badge>
            ))}
          </VStack>
          <VStack>
            {Colors.map((color) => (
              <Badge key={color} variant="outline" colorScheme={color}>
                Outline Colored
              </Badge>
            ))}
          </VStack>
          <VStack>
            {Colors.map((color) => (
              <Badge key={color} variant="solid" colorScheme={color}>
                Solid Colored
              </Badge>
            ))}
          </VStack>
          <VStack>
            {Colors.map((color) => (
              <Badge key={color} variant="subtle" colorScheme={color}>
                Subtle Colored
              </Badge>
            ))}
          </VStack>
        </HStack>
      </Center>
    </>
  )
}

export default Home
