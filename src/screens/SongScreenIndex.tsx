import  TracksList  from '../components/TrackList'
import { screenPadding } from '../../constants/tokens'
import { trackTitleFilter } from '../helper/filter'
import { generateTracksListId } from '../helper/miscellaneous'
import { useNavigationSearch } from '../hooks/useNavigationSearch'
import { useTracks } from '../store/library'
import { defaultStyles } from '../../styles'
import { useMemo } from 'react'
import { ScrollView, View } from 'react-native'

const SongsScreenIndex = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
			tintColor: '#ccc',
			textColor: '#fff',
			barTintColor: '#000'

		},
	})

	const tracks = useTracks()

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
				
			>
				<TracksList scrollEnabled={false}/>
				
			</ScrollView>
		</View>
	)
}

export default SongsScreenIndex