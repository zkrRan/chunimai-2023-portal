import { Box, Button, Image, ImageProps, VStack } from '@chakra-ui/react'

export const GameCTAButton = ({
	imageUrl,
	imageStyle,
	color
}: {
	imageUrl: string
	imageStyle?: ImageProps
	color: string
}) => {
	return (
		<VStack gap={6} data-group>
			<Image
				src={imageUrl}
				alt="Maimai Festival"
				transition="0.3s ease"
				_groupHover={{
					transform: 'scale(0.95)'
				}}
				{...imageStyle}
			/>
			<Button
				w="full"
				py={6}
				bg="#1B1819"
				border="5px solid"
				borderColor={color}
				textColor={color}
				rounded="xl"
				_groupHover={{ bg: color, textColor: '#1B1819' }}
				position="relative"
			>
				<Box
					w={4}
					h={4}
					bg={color}
					position="absolute"
					left={4}
					rounded="sm"
					transition="0.3s ease"
					_groupHover={{
						bg: '#1B1819',
						left: 5
					}}
				/>
				กฎการแข่งขัน
				<Box
					w={4}
					h={4}
					bg={color}
					position="absolute"
					right={4}
					rounded="sm"
					transition="0.3s ease"
					_groupHover={{
						bg: '#1B1819',
						right: 5
					}}
				/>
			</Button>
		</VStack>
	)
}
