import  { FlatList, FlatListProps, View } from 'react-native'
import library from '../assets/icons/data/library.json'
import TrackListItem from './TrackListItem'
import { utilsStyles } from '../../styles'

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
	<View style={{...utilsStyles.itemSeparator, marginVertical:20, }}/>
)


const TracksList = ({...flatlistprops}: TracksListProps) => {
	return <FlatList 
	data={library} 
	ItemSeparatorComponent={ItemDivider}
	renderItem={({item: track}) => (
	<TrackListItem 
	track={{
			...track,
			image: track.artwork

	}}
	/>
)}
{...flatlistprops}
/>
}


export default TracksList;