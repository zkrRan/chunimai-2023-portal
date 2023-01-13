import { Heading, Stack, Text } from '@chakra-ui/react'

interface IPageTitleProps {
	title: string
	subtitle: string
}

export const PageTitle = ({ title, subtitle }: IPageTitleProps) => {
	return (
		<Stack spacing={1} textAlign="center">
			<Heading textColor="primary.600" fontSize="4xl">
				{title}
			</Heading>
			<Text opacity={0.7}>{subtitle}</Text>
		</Stack>
	)
}
