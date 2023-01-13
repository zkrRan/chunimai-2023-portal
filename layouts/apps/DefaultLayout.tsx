import { Box, Flex } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface DefaultLayoutProps {
	children?: React.ReactNode
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
	children
}) => {
	return (
		<Flex direction="column" minH="100vh">
			<Flex direction="column" flex="1" w="full" overflowY="auto">
				<Box flexGrow="1" className="content">
					{children}
				</Box>
			</Flex>
		</Flex>
	)
}
