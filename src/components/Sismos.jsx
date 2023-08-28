import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useContx } from '../ContextProvider/ContextProvider'

const Sismos = () => {
  const { data } = useContx()

  if (!data) {
    return <View><Text>Loading...</Text></View>
  }

  const renderSismos = ({ item }) => {
    return (
      <View style={style.renderSismos}>
        <View>
          <Text style={style.sismotime}>{item.local_date}</Text>
          <Text style={style.sismodesc}>{item.geo_reference}</Text>
        </View>
        <View>
          <Text style={style.magnitude}>{item.magnitude.value}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data.events}
        keyExtractor={item => item.id}
        renderItem={renderSismos}
        style={style.container}
      />
    </View>
  )
}

const style = {
  container: {
    padding: 10
  },
  renderSismos: {
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderStyle: 'solid',
    padding: 18,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  magnitude: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    paddingTop: 7,
    paddingBottom: 7,
    paddingStart: 6,
    paddingEnd: 6,
    borderRadius: 8,
    backgroundColor: 'black',
    color: 'white'
  },
  sismodesc: {
    fontSize: 16
  },
  sismotime: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 1
  }

}

export default Sismos