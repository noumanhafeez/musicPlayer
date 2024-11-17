import { TouchableHighlight, View, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "../../constants/images";
import { defaultStyles } from '../../styles/index'
import { colors, fontSize } from '../../constants/tokens'


export type TrackListItemProps = {
	track: { title: string; image?: string, artist?: string}
}

const TrackListItem = ({track}: TrackListItemProps) => {
	const isActive = false
	return <TouchableHighlight>
		<View style={styles.trackItemContainer}>
		<View>
			<FastImage
			source={{
				uri:track.image ?? unknownTrackImageUri,
				priority: FastImage.priority.normal
			}}
			style={{
				...styles.trackArtworkImage,
				opacity: isActive ? 0.5 : 1
			}}
			/>
		</View>
		<View style={{width:'100%'}}>
			<Text 
			numberOfLines={1}
			style={{
				...styles.trackTitleText,
				color: isActive ? colors.primary : colors.text
			}}
			>
				{track.title}
			</Text>
			{track.artist && (
					<Text numberOfLines={1} style={styles.trackArtistText}>
						{track.artist}
					</Text>
						)}
		</View>
		</View>
	</TouchableHighlight>
}

const styles = StyleSheet.create({
	trackItemContainer: {
		top:100,
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})

export default TrackListItem